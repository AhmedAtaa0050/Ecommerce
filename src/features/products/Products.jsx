import axios from "axios";
import { BASE_URL } from "../../utils/helpers";
import Product from "./Product";
import Spinner from "../../ui/Spinner/Spinner";
import { useQuery } from "@tanstack/react-query";

function Products() {
  function getProducts() {
    return axios(`${BASE_URL}/products`);
  }

  const { isLoading, data } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getProducts,
  });

  return isLoading ? (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Spinner />
    </div>
  ) : (
    <div className="row">
      {data.data.data.map((product) => (
        <div className="col-md-4 col-lg-3" key={product.id}>
          {<Product product={product} key={product.id} />}
        </div>
      ))}
    </div>
  );
}

export default Products;
