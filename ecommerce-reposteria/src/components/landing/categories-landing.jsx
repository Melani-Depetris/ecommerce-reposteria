import React from "react";

const CategoriesLanding = () => {

  const categories = [
    {
      name: "Cupcakes",
      url: "cupcakes",
    },
    {
      name: "Dulces",
      url: "dulces",
    },
    {
      name: "Tortas",
      url: "tortas",
    },
    {
      name: "Galletas",
      url: "galletas",
    },
    {
      name: "Chocolates",
      url: "chocolates",
    }
  ]

  return (
    <div className="flex absolute justify-center gap-4 bottom-2 z-30 h-[150px] w-full bg-gradient-to-t from-white">
{
  categories.map((category) => (
  <div className="flex justify-center items-center p-2 text-sm h-20 w-20 md:h-36 md:w-36 bg-pink-400 rounded-full">
    <h2>{category.name}</h2>
  </div>
  ))
}
    </div>
  );
};

export default CategoriesLanding