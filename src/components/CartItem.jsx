import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";

const Cartitem = ({item}) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item removed")
    }

    return (
        <div className="flex border-b-2 border-black">
            <div className="flex flex-col sm:flex-row sm:gap-4">
                <div className="w-[40%]">
                    <img className="h-[25vh] m-4" src={item.image} alt="" />
                </div>
                <div className="flex flex-col m-4 w-[60%]">
                    <h1 className="font-bold text-base mb-4 text-slate-700">{item.title}</h1>
                    <h1 className="font-normal text-xs mb-8">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
                    <div className="flex justify-between">
                        <p className="text-green-600 text-lg font-bold"> ${item.price}</p>
                        <div
                        onClick={removeFromCart}
                        className="bg-red-300 rounded-full text-red-600 flex justify-center items-center"
                        >
                            <RiDeleteBin5Line className="m-2" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Cartitem;