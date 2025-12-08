"use client";

import { useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Star, ArrowLeft, ShoppingCart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import QuantitySelector from "../../components/QuantitySelector";
import SizeSelector from "../../components/SizeSelector";
import ProductTabs from "../../components/ProductTabs";
import { useCart } from "../../context/CartContext";

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Regular");

  const imageRef = useRef(null);
  const detailsRef = useRef(null);
  const tabsRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const isDetailsInView = useInView(detailsRef, { once: true, amount: 0.3 });
  const isTabsInView = useInView(tabsRef, { once: true, amount: 0.3 });

  const productId = params.id as string;

  // SPECIAL LAYOUT FOR "box-1"
  if (productId === "box-1") {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </motion.button>

            {/* CUSTOM GRID FOR BOX-1 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-xl font-bold mb-2">Special Box Item A</h2>
                <p className="text-gray-600">Custom card layout for box-1.</p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-xl font-bold mb-2">Special Box Item B</h2>
                <p className="text-gray-600">Add whatever content you want.</p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-xl font-bold mb-2">Special Box Item C</h2>
                <p className="text-gray-600">This layout replaces product details.</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // NORMAL PRODUCT LOGIC
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <button
            onClick={() => router.push("/")}
            className="text-orange-500 hover:text-orange-600"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= Math.floor(rating)
                ? "fill-yellow-400 text-yellow-400"
                : star - 0.5 <= rating
                ? "fill-yellow-400/50 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {rating} ({product.reviews} reviews)
        </span>
      </div>
    );
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </motion.button>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100"
            >
              <Image src={product.image} alt={product.name} fill className="object-cover" priority />
            </motion.div>

            <motion.div
              ref={detailsRef}
              initial={{ opacity: 0, x: 50 }}
              animate={isDetailsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

              <div className="mb-4">{renderStars(product.rating)}</div>

              <p className="text-3xl font-bold text-orange-500 mb-6">{product.price}</p>

              <p className="text-gray-700 mb-6">{product.description}</p>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Size</label>
                <SizeSelector sizes={product.sizes || []} selectedSize={selectedSize} onSizeChange={setSelectedSize} />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Quantity</label>
                <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
              </div>

              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-3 bg-[#2A2C22] hover:bg-[#2A2C22] text-white font-bold text-lg py-4 px-8 rounded-full transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" /> Add to Cart
              </button>
            </motion.div>
          </div>

          <motion.div
            ref={tabsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isTabsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <ProductTabs details={product.details || ""} />
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

