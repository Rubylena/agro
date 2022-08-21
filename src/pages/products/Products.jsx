import React from "react";
import allProducts from "../../components/ProductData";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="p-10">
      <div className=" flex flex-wrap gap-10 justify-center text-center">
        {allProducts.map((product) => (
          <div
            key={product.id.toString()}
            className="rounded-lg flex flex-col w-64"
          >
              <div className="h-80">
                <img
                  src={product.imageUrl}
                  className="rounded-t-lg w-full h-full object-cover product-img"
                  alt={product.name}
                  />
              </div>

              <div className="text-white bg-nblack rounded-b-lg py-2 text-lg">
                <h2>{product.name}</h2>
                <h3>{`$${product.price}.99`}</h3>

                <Link
                  className="border px-5 py-0.5 rounded hover:bg-green hover:text-black hover:rounded hover:animate-pulse hover:border-none"
                  to={`/products/${product.name}`}
                >
                  View
                </Link>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
