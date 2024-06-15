import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Link to={`/productDetails/${product.id}`}>
      <div className="product overflow-hidden px-2 py-3 cursor-pointer">
        <div className="product-cart">
          <img src={product.imageCover} className="w-100" alt={product.title} />
          <h5 className="font-sm text-main">{product.category.name}</h5>
          <h4>{product.title.split(" ").slice(0, 2).join(" ")}</h4>
          <p className="d-flex justify-content-between">
            <span>{product.price} EGP</span>
            <span>
              <i className="fas fa-star rating-color me-1"></i>
              {product.ratingsAverage}
            </span>
          </p>
        </div>
        <button className="btn bg-main text-white w-100">+Add to cart</button>
      </div>
    </Link>
  );
}

export default Product;
