import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import saveProductsOnDb from "../../api/cart";
import Swal from 'sweetalert2'

const Card = ({ card }) => {
    const {user} = useContext(AuthContext)

    const saveProductOnCart = (product, email) => {
        console.log(product)
        saveProductsOnDb(product, email)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your product has been saved on cart',
                showConfirmButton: false,
                timer: 1500
              })
        })
    }
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4 flex flex-col">
                <div className="font-bold text-xl mb-2">{card?.productName}</div>
                <span className="ml-2">Seller : {card?.email}</span>
                <span className="ml-2">Available Product : {card?.availableProduct}</span>
                <span className="ml-2">Price : ${card?.price}</span>
                <button onClick={() => saveProductOnCart(card, user?.email)} className="bg-blue-400 text-white font-bold rounded mt-2">Add To Cart</button>
            </div>
        </div>
    );
};

export default Card