import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import Productitem from "./Productitem";

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);

  const { products } = useContext(ShopContext);

  useEffect(() => {
    const top5BestSellers = products
      .filter((item) => item.bestseller)
      .slice(0, 5);

    setBestSellers(top5BestSellers);
  }, []);

  return (
    <>
      <div className="my-10">
        <div className="text-3xl text-center py-8">
          <Title text1={"BEST"} text2={"SELLERS"} />
          <p className="text-xl m-auto w-3/4 sm:text-sm md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            architecto totam nobis possimus. Iure impedit sunt veritatis natus
            possimus ipsa, molestias sit modi! Inventore facere ab ad quod
            deserunt vel.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-y-6 py-6">
          {bestSellers.map((item, index) => (
            <Productitem
              id={item._id}
              key={index}
              images={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSellers;
