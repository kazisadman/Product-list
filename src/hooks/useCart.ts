import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useCart = () => {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const totalRoundedPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);

  return { totalQuantity, totalPrice:totalRoundedPrice };
};
