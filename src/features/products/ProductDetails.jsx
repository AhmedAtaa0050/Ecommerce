import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/helpers";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner/Spinner";

function ProductDetails() {
  const { productID } = useParams();

  function getProductDetails(id) {
    return axios(`${BASE_URL}/products/${id}`);
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ["productDetails"],
    queryFn: () => getProductDetails(productID),
  });

  const productData = data?.data?.data;

  console.log(productData);

  return isLoading ? (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Spinner />
    </div>
  ) : (
    <div className="row py-4 align-items-center">
      <div className="col-md-4">
        <img
          src={productData.imageCover}
          className="w-100"
          alt={productData.title}
        />
      </div>
      <div className="col-md-8 d-flex flex-column gap-2">
        <h1>{productData.title}</h1>
        <p className="text-secondary">{productData.description}</p>
        <h6 className="text-main">{productData.category?.name}</h6>
        <span className="text-main">Price: {productData.price} EGP</span>
        <div className="d-flex justify-content-between align-items-center">
          <h6>ratingQuantity: {productData.ratingsQuantity} </h6>

          <i
            className={`fas fa-star rating-color font-sm d-flex align-items-center gap-2`}
          >
            <span className="text-secondary">{productData.ratingsAverage}</span>
          </i>
        </div>

        <button className="btn bg-main text-white">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
