"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../components/AdminLayout";
import { useAuth } from "../../context/AuthContext";
import {
  DollarSign,
  TrendingUp,
  Award,
  ArrowRight,
  Download,
  Package,
  BarChart3,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import { useDashboardOverview, usePopularProducts } from "../../hooks/useDashboard";

export default function AdminDashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [chartFilter, setChartFilter] = useState<"daily" | "monthly" | "overview">("monthly");

  // Fetch real dashboard data
  const { data: dashboardData, loading: dashboardLoading } = useDashboardOverview();
  const { products: popularProducts, loading: productsLoading } = usePopularProducts(1, 4);

  useEffect(() => {
    if (!isAuthenticated || user?.role !== "Admin") {
      router.push("/admin/login");
    }
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated || user?.role !== "Admin") {
    return null;
  }

  const loading = dashboardLoading || productsLoading;

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, {user?.fullName}</p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 text-[#2A2C22] animate-spin" />
          </div>
        )}

        {/* Dashboard Content */}
        {!loading && dashboardData && (
          <>
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Daily Sales Card */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Daily Sales</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2">
                      GHS {dashboardData.dailyStats.sales.toFixed(2)}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {dashboardData.dailyStats.orders} orders today
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              {/* Monthly Revenue Card */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2">
                      GHS {dashboardData.monthlyStats.sales.toFixed(2)}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {dashboardData.monthlyStats.orders} orders this month
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Most Popular Item Card */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Popular This Week</p>
                    <h3 className="text-lg font-bold text-gray-900 mt-2">
                      {dashboardData.popularProductThisWeek.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {dashboardData.popularProductThisWeek.quantitySold} sold
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Dishes Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Popular Products</h2>
                <button 
                  onClick={() => router.push("/admin/products")}
                  className="flex items-center gap-2 text-[#2A2C22] font-medium hover:underline"
                >
                  See All
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {popularProducts.map((product) => (
                  <div
                    key={product._id}
                    className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 relative overflow-hidden">
                      <Image
                        src={product.productThumbnail || "/placeholder.png"}
                        alt={product.productName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{product.productName}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-[#2A2C22]">
                        GHS {product.price.toFixed(2)}
                      </span>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
                        {product.totalQuantitySold} sold
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show placeholder if no products */}
              {popularProducts.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Package className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                  <p>No popular products data available</p>
                </div>
              )}
            </div>
          </>
        )}

        {/* Overview Chart Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-xl font-bold text-gray-900">Sales Overview</h2>
            <div className="flex items-center gap-3">
              {/* Filter Buttons */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setChartFilter("daily")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    chartFilter === "daily"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Daily
                </button>
                <button
                  onClick={() => setChartFilter("monthly")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    chartFilter === "monthly"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setChartFilter("overview")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    chartFilter === "overview"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Overview
                </button>
              </div>
              {/* Export Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-[#2A2C22] text-white rounded-lg hover:bg-[#1a1c12] transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          {/* Placeholder for Chart */}
          <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 font-medium">Chart visualization goes here</p>
              <p className="text-sm text-gray-500 mt-1">
                Showing {chartFilter} data
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
