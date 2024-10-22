import Cart from "../cart/cart";
import { useCart } from "../../hooks/useCart";

const Navigation = () => {
  const { totalQuantity, totalPrice } = useCart();

  if (totalQuantity < 0) {
    setTimeout(() => {
      document.getElementById("toast")?.classList.remove("hidden");
    }, 3000);
    document.getElementById("toast")?.classList.add("hidden");
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Shopy</a>
      </div>
      <div className="flex-none gap-2">
        <Cart totalQuantity={totalQuantity} totalPrice={totalPrice}></Cart>
      </div>
      <div className="toast z-10 hidden" id="toast">
        <div className="alert alert-info">
          <span>Item quantity can not be in negetive</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
