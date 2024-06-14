import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/helpers";
import Product from "./Product";
import Spinner from "../../ui/Spinner/Spinner";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    setIsLoading(true);
    async function fetchProducts() {
      const { data } = await axios(`${BASE_URL}/products`);
      setProducts(data.data);
      setIsLoading(false);
    }

    fetchProducts();
  }, []);

  return isLoading ? (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Spinner />
    </div>
  ) : (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 col-lg-3" key={product.id}>
          {<Product product={product} key={product.id} />}
        </div>
      ))}
    </div>
  );
}

export default Products;
