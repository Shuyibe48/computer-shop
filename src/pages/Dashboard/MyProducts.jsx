import { useContext, useEffect, useState } from "react";
// import { getUserClasses } from "../../api/class";
import { AuthContext } from "../../provider/AuthProvider";
import { deleteProduct, getUserPostedProducts } from "../../api/product";
import { Link } from "react-router-dom";

const MyProducts = () => {
    const [products, setProducts] = useState([])
    const { user } = useContext(AuthContext)


    useEffect(() => {
        getUserPostedProducts(user?.email)
            .then(data => setProducts(data))
    }, [user])


    const onDeleteClick = id => {
        deleteProduct(id)
            .then(data => {
                console.log(data)
                window.alert('deleted')
            })
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-8">My Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products?.map((productItem) => (
                    <div
                        key={productItem._id}
                        className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-bold mb-2">{productItem.productName}</h3>
                            <p className="mb-4">Available Product : {productItem.availableProduct}</p>
                            <p>Price : {productItem.price}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="mt-4">
                                <Link to={`/update/${productItem._id}`} className="bg-blue-500 btn hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                                    Update
                                </Link>
                            </div>
                            <div className="mt-4">
                                <button
                                    onClick={() => onDeleteClick(productItem._id)}
                                    className="bg-red-500 btn hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                                    delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    );
};

export default MyProducts;
