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
        <div>
            <div>
                <div>
                    <img src={item.image} alt="" />
                </div>
                <div>
                    <h1>{item.title}</h1>
                    <h1>{item.description}</h1>
                    <div>
                        <p>{item.price}</p>
                        <div
                        onClick={removeFromCart}>
                            <RiDeleteBin5Line />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Cartitem;