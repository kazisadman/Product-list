import { Product } from "../../redux/api/productApi";

const ProductCard: React.FC<{ data: Product }> = ({ data }) => {
  console.log(data);
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
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
