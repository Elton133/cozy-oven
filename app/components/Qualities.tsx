// // apps/client/components/Qualities.jsx
// import { Coffee, Menu, X, MapPin } from 'lucide-react';


// const qualities = [
//   { title: 'Quick Delivery', subtitle: 'Get your orders in record time', icon: <Coffee /> },
//   { title: 'Satisfaction Guarantee', subtitle: 'We ensure you love every bite', icon: <Menu /> },
//   { title: 'Secure Payments', subtitle: 'Your transactions are safe with us', icon: <X /> },
// ];

// export default function Qualities() {
//   return (
//     <section className="py-16 grid md:grid-cols-3 gap-6 px-6">
//       {qualities.map(q => (
//         <div key={q.title} className="bg-white/20 backdrop-blur-md p-6 rounded-xl flex flex-col gap-4 items-start hover:scale-105 transition border border-gray-100 shadow-sm">
//           <div className="text-3xl">{q.icon}</div>
//           <h3 className="font-bold text-xl">{q.title}</h3>
//           <p>{q.subtitle}</p>
//         </div>
//       ))}
//     </section>
//   );
// }



"use client";

import { Truck, ShieldCheck, CreditCard } from "lucide-react";

export default function Qualities() {
  const qualities = [
    {
      icon: Truck,
      title: "Quick Delivery",
      description: "Get your fresh baked goods delivered to your doorstep within hours of placing your order.",
    },
    {
      icon: ShieldCheck,
      title: "Satisfaction Guarantee",
      description: "We stand behind the quality of our products. If you're not satisfied, we'll make it right.",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Your payment information is protected with industry-standard security measures.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualities.map((quality, index) => {
            const Icon = quality.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#f5f5f5] p-3 rounded-xl">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{quality.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{quality.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}