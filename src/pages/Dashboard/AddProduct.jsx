import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { addProduct } from "../../api/product";

const AddProduct = () => {
    const { user } = useContext(AuthContext)

    console.log(user);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target
        const productName = event.target.productName.value
        const sellerName = user?.displayName
        const email = user?.email
        const availableProduct = event.target.availableProduct.value
        const price = event.target.price.value

        const productData = {
            productName,
            sellerName,
            email,
            availableProduct,
            price: parseFloat(price),
            seller: {
                name: user?.displayName,
                image: user?.photoURL,
                email: user?.email,
            }
        }

        addProduct(productData)
            .then(data => {
                console.log(data)
                window.alert('Products Added Successfully.')
            })
            .catch(err => console.log(err))

            
        form.reset()
        console.log(productData);

    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-8 text-center">Add A Product</h2>

                <div className="mb-4">
                    <label htmlFor="productName" className="block mb-2 font-medium">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="productName"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="sellerName" className="block mb-2 font-medium">
                        Seller Name
                    </label>
                    <input
                        type="text"
                        id="sellerName"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 bg-gray-100"
                        value={user?.displayName}
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="sellerEmail" className="block mb-2 font-medium">
                        Seller Email
                    </label>
                    <input
                        type="email"
                        id="sellerEmail"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 bg-gray-100"
                        value={user?.email}
                        readOnly
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="availableProduct" className="block mb-2 font-medium">
                        Available Product
                    </label>
                    <input
                        type="number"
                        id="availableProduct"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block mb-2 font-medium">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-gray-800 hover:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
