import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product';
 
function Home() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((prod) => {
              return (
                <Product product={prod} key={prod.id} />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
