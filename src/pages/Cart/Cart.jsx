import { useContext, useEffect, useState } from "react";
import { getCartProduct } from "../../api/cart";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2'

const Cart = () => {
    const { user } = useContext(AuthContext)
    const [saveP, setSaveP] = useState([])

    useEffect(() => {
        getCartProduct(user?.email)
            .then(data => setSaveP(data))
    }, [user])

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4">Serial</th>
                            <th className="py-2 px-4">Product Name</th>
                            <th className="py-2 px-4">Product Price</th>
                            <th className="py-2 px-4">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {saveP[0]?.documents.map((item, index) => (
                            <tr key={item._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{item.productName}</td>
                                <td className="py-2 px-4">${item.price.toFixed(2)}</td>
                                <td className="py-2 px-4">
                                    <button
                                        // onClick={() => removeFromCart(index)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;