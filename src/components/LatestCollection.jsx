import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import Productitem from "./Productitem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(-10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          veritatis consequatur in quaerat similique blanditiis recusandae
          deserunt! Nam iure praesentium assumenda aperiam laborum, repellendus
          nobis possimus architecto repellat illum quidem?
        </p>
      </div>
      {/** Rendering latest products */}
      <div className="grid grid-col-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <Productitem
            key={index}
            id={item._id}
            images={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
