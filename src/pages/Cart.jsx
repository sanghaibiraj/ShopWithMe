import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => (acc + curr.price),0));
  }, [cart])

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex justify-center gap-[4vw] rela">
          <div className="w-[40vw] p-[2vw]">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className="flex flex-col w-[30vw] items-start justify-between h-[88vh] py-[8vh] sticky">
            <div className="flex flex-col">
                <div className="text-sm sm:text-lg font-bold text-green-700 uppercase -mb-1">Your Cart</div>
                <div className="text-xl sm:text-4xl font-bold text-green-700 uppercase mb-4">Summary</div>
                <p>
                    <span className="font-bold">Total Items: {cart.length}</span>
                </p>
            </div>
            <div className="flex flex-col justify-start">
                <p className="font-bold">Total Amount: ${totalAmount} </p>
                <button className="bg-green-700 text-white font-bold flex justify-center items-center rounded-xl w-[25vw] my-4 hover:bg-green-600 transition duration-300 ease-in">
                    <p className="mx-auto my-3 w-full">CheckOut Now</p>
                </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[88vh] w-full flex flex-col items-center justify-center">
          <h1 className="text-3xl text-black font-semibold mb-[4vh]"> Your Cart is Empty !! </h1>
          <Link to={"/"}>
            <button className="text-2xl text-white rounded-3xl bg-blue-400 hover:bg-blue-600 hover:scale-105 font-semibold p-4">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
