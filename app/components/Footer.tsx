"use client";

import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-gray-900"
      style={{ backgroundImage: "url('/cozy4.png')" }} 
    >
      {/* Overlay to keep text readable */}
      <div className="absolute inset-0 bg-[#2A2C22]/20" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Newsletter Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-3">
              Want tips on how to make these tasty delicacies???
            </h2>

            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-gray-100 px-4 py-3 text-sm focus:outline-none rounded-l-full"
              />
              <button className="bg-[#2A2C22]/80 px-4 py-3 transition-colors rounded-r-full hover:cursor-pointer">
                <ArrowRight className="w-5 h-5 text-white hover:translate-x-2 transition-transform duration-200" />
              </button>
            </div>

            <p className="text-xs text-gray-700 mt-4">
              By subscribing you agree to the{" "}
              <a href="#" className="underline hover:no-underline">
                Terms of Use
              </a>{" "}
              &{" "}
              <a href="#" className="underline hover:no-underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="/shipping"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="/returns"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@cozyovens.com"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  hello@cozyovens.com
                </a>
              </li>
              <li>
                <p className="text-gray-700">8:00am - 3:00pm, Mon to Fri</p>
              </li>
              <li>
                <a
                  href="/locations"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Store Locations
                </a>
              </li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Info</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/careers"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="/community"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="/sustainability"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="/press"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                <span className="text-lg">🇬🇭</span>
                <span className="text-sm">Ghana (GHS ₵)</span>
              </button>
            </div>

            <div className="flex flex-col gap-6 md:items-end">
              <div className="flex gap-4">
                <a className="text-gray-700 hover:text-gray-900 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a className="text-gray-700 hover:text-gray-900 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a className="text-gray-700 hover:text-gray-900 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>

              <div className="flex gap-2">
                <span className="px-2 py-1 bg-gray-50 border border-gray-200 text-xs font-medium rounded">
                  Apple Pay
                </span>
                <span className="px-2 py-1 bg-gray-50 border border-gray-200 text-xs font-medium rounded">
                  Google Pay
                </span>
                <span className="px-2 py-1 bg-gray-50 border border-gray-200 text-xs font-medium rounded">
                  Mastercard
                </span>
                <span className="px-2 py-1 bg-gray-50 border border-gray-200 text-xs font-medium rounded">
                  Shop Pay
                </span>
                <span className="px-2 py-1 bg-gray-50 border border-gray-200 text-xs font-medium rounded">
                  Visa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
