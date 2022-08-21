import React from "react";
import allProducts from "../../components/ProductData";
import { useParams, Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ProductDetails = () => {
  // getting product name from and used as id
  const params = useParams();

  // filtering out the product using product name from params
  const data = allProducts.filter(({ name }) => name === params.id);

  return (
    <section className="pt-5 pb-28 flex justify-center item-center ">
      {data.map((prod) => (
        <div key={prod.id} className='w-2/4'>
          <div className="pb-14">
            <Link
              to={"/products"}
              className="text-black font-medium hover:border-b-2 pb-1"
            > <ArrowBackIosIcon />Back
            </Link>
            <div className="flex flex-col md:flex-row items-center gap-5 mt-20">
              <div
                className="md:w-1/4 h-60 rounded-xl"
              ><img src={prod.imageUrl} alt="" className="w-full h-full object-cover rounded-xl"></img></div>

              <div className="md:w-3/4">
                <h2 className="font-semibold text-lg">{prod.name}</h2>
                <p className="leading-5 text-justify">{prod.description}</p>
                <div className="">
                  <div className="text-center p-3 ">
                    <i class=" p-2 ">
                      {`  Weight: ${prod.weight}kg`}
                    </i>
                    <i class="p-2">{`  Calories: ${prod.calories}`}</i>
                    <p className="p-2">{`Price: $${prod.price}.99`}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:justify-around p-3">
                  <button className=" bg-nblack text-green rounded p-2 hover:opacity-80">Bookmark</button>
                  <button className=" bg-nblack text-green rounded p-2 hover:opacity-90">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductDetails;
