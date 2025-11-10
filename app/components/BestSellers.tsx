// // apps/client/components/BestSelling.jsx
// const bestSelling = [
//   { name: 'Banana Bread', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872' },
//   { name: 'Chocolate Cake', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872' },
//   { name: 'Croissants', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872' },
//   { name: 'Muffins', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872' },
//   { name: 'Donuts', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872' },
//   { name: 'Baguette', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872' },
// ];

// export default function BestSelling() {
//   return (
//     <section className="py-16 px-6 scrollbar-hide">
//       <h2 className="text-3xl font-bold mb-6">Best Selling Breads</h2>
//       <div className="flex gap-4 overflow-x-auto">
//         {bestSelling.map(item => (
//           <div key={item.name} className="relative h-[300px] w-[300px] rounded-xl overflow-hidden flex-shrink-0 hover:scale-95 transition">
//             <img src={item.img} alt={item.name} className="object-cover w-full h-full" />
//             <div className="absolute bottom-0 w-full bg-black/40 text-white p-2 text-center">{item.name}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import Image from "next/image";

export default function BestSellers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      name: "Classic Banana Bread",
      price: "GHS 25",
      image: "https://images.unsplash.com/photo-1673961020718-ac4698e08aa8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    },
    {
      name: "Chocolate Chip Banana Bread",
      price: "GHS 30",
       image: "https://images.unsplash.com/photo-1673961020718-ac4698e08aa8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    },
    {
      name: "Walnut Banana Bread",
      price: "GHS 28",
       image: "https://images.unsplash.com/photo-1673961020718-ac4698e08aa8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    },
    {
      name: "Blueberry Muffins",
      price: "GHS 20",
       image: "https://images.unsplash.com/photo-1673961020718-ac4698e08aa8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    },
    {
      name: "Cinnamon Rolls",
      price: "GHS 35",
       image: "https://images.unsplash.com/photo-1673961020718-ac4698e08aa8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    },
    {
      name: "Sourdough Loaf",
      price: "GHS 22",
       image: "https://images.unsplash.com/photo-1673961020718-ac4698e08aa8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Best Sellers
        </h2>
        
       <div
  ref={scrollRef}
  className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
>
  {products.map((product, index) => (
    <div
      key={index}
      className="relative flex-shrink-0 w-[280px] h-[280px] rounded-2xl overflow-hidden cursor-pointer group snap-start bg-white transition-shadow duration-300"
    >
      {/* Image fills card */}
      <Image
             src={`${product.image}`}
             alt="Cozy Oven"
             fill
             className="object-cover"
             priority
           />

      {/* Blurred overlay with text */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-md flex flex-col justify-end p-5">
        <h3 className="text-white text-md font-bold mb-1">{product.name}</h3>
        <p className="text-white/90 text-md font-semibold">{product.price}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
