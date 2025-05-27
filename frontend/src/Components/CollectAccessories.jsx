import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "./ProductItem";

const CollectAccessories = () => {
  const { products } = useContext(ShopContext);
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const accessory = products.filter((item) => item.accessory);
    setAccessories(accessory.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"COLLECTIBLES "} text2={"& ACCESSORIES"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          This Section contains various types of accessories and collectibles
          like key rings, action figures and a lot more!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {accessories.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectAccessories;
