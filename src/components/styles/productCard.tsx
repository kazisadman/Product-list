import { useDispatch } from "react-redux";
import { TProduct } from "../../types/product.type";
import { addItemToCart } from "../../redux/features/cartSlice";

const ProductCard: React.FC<{ data: TProduct }> = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card h-[500px] bg-base-100 shadow-xl">
        <figure>
          <img src={`${data.image}`} alt="Product" className="w-64 h-64" />
        </figure>
        <div className="card-body flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="badge badge-outline">${data.price}</div>
            <div className="badge badge-outline">{data.category}</div>
          </div>

          <h2 className="card-title">{data.title}</h2>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addItemToCart(data.price))}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
