import { Link } from "react-router-dom";
import CategoryNavigator from "./CategoryNavigator";

const ProductCard = (product) => {
  return (
    <div className="col">
      <div class="card border-color rounded-card card-hover product-card custom-bg h-90">
      <Link
             to={`/product/${product.item.id}/category/${product.item.category.id}`}
            >
              <img
          src={"http://localhost:8080/api/product/" + product.item.imageName}
          class="card-img-top rounded mx-auto d-block m-2"
          alt="img"
          style={{
            maxHeight: "200px",
            maxWidth: "100%",
            width: "auto",
          }}
        />
            </Link>
       

        <div class="card-body text-color">
          <p>
            <CategoryNavigator
              item={{
                id: product.item.category.id,
                title: product.item.category.title,
              }}
            />
          </p>
          <h5 class="card-title d-flex justify-content-between">
            <div>
              <b>{product.item.title}</b>
            </div>
          </h5>
        </div>
        <div class="card-footer">
          <div className="text-center text-color">
            <p>
              <span>
                <h4>Price : &#8377;{product.item.price}</h4>
              </span>
            </p>
          </div><div className="text-center text-color">
          <Link
             to={`/product/${product.item.id}/category/${product.item.category.id}`}
              className="btn bg-color custom-bg-text"
            >
              Buy Now
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
