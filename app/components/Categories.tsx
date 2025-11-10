// "use client";
// import { motion } from 'framer-motion';

// const categories = [
//   { name: 'Banana Bread', img: 'https://plus.unsplash.com/premium_photo-1695932833115-646289d0885b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2058' },
//   { name: 'Chocolate Cake', img: 'https://plus.unsplash.com/premium_photo-1695932833115-646289d0885b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2058' },
//   { name: 'Croissants', img: 'https://plus.unsplash.com/premium_photo-1695932833115-646289d0885b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2058' },
//   { name: 'Muffins', img: 'https://plus.unsplash.com/premium_photo-1695932833115-646289d0885b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2058' },
// ];

// export default function Categories() {
//   return (
//     <section className="py-16 px-6">
//       <h2 className="text-3xl font-bold mb-6">Categories</h2>
//       <div className="flex gap-8 overflow-x-auto scrollbar-hide">
//         {categories.map(cat => (
//           <motion.div
//             key={cat.name}
//             className="relative h-[500px] w-[350px] rounded-xl overflow-hidden flex-shrink-0"
//           >
//             <img src={cat.img} alt={cat.name} className="absolute top-0 left-0 w-full h-full object-cover transform scale-100 transition-transform duration-500" />
//             <div className="absolute bottom-0 w-full bg-black/40 text-white p-2 text-center">{cat.name}</div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


export default function Categories() {
  const cards = [
    {
      id: "card-1",
      title: "Banana Bread",
      description: "Our signature banana bread, moist and flavorful, made with ripe bananas and a touch of cinnamon.",
      button: "View Products",
      bgImage:
        "https://images.unsplash.com/photo-1658040529395-39c2ca560ff0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435",
      buttonColor: "bg-[#E9F9F1] hover:bg-[#d8f0e3] text-black",
    },
    {
      id: "card-2",
      title: "Fruit Bread",
      description:
        "A delightful blend of fresh fruits baked into a soft and flavorful bread.",
      button: "Try Now",
      bgImage:
        "https://plus.unsplash.com/premium_photo-1695932845484-f920dae37f04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
      buttonColor: "bg-[#E9F9F1] hover:bg-[#d8f0e3] text-black",
    },
    {
      id: "card-3",
      title: "Chocolate Bread",
      description:
        "Indulge in our rich and moist chocolate bread, perfect for any occasion.",
      button: "Shop Now",
      bgImage:
        "https://images.unsplash.com/photo-1673961020718-ac4698e08aa8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      buttonColor: "bg-[#E9F9F1] hover:bg-[#d8f0e3] text-black",
    },
    {
      id: "card-4",
      title: "Walnut Bread",
      description:
        "Walnut Bread: Nutty Delight in Every Bite",
      button: "Explore Now",
      bgImage:
        "https://images.unsplash.com/photo-1603455908246-99e3a704acb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
      buttonColor: "bg-[#E9F9F1] hover:bg-[#d8f0e3] text-black",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-[Euclid-Circular-B]">
      <div className="w-full max-w-7xl px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative overflow-hidden rounded-xl text-white h-[500px] group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110 z-0"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              ></div>
              <div className="absolute inset-0 bg-black/50 z-10"></div>

              <div className="relative z-20 p-8 h-full flex flex-col">
                <div className="mb-auto">
                  <h2 className="text-4xl font-bold mb-4">{card.title}</h2>
                  <p className="text-gray-300 text-lg">{card.description}</p>
                </div>
                <div className="mb-4">
                  <button
                    className={`${card.buttonColor} font-medium py-3 px-6 rounded-md`}
                  >
                    {card.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
