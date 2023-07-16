import { useEffect, useState } from "react";
import Card from "./Card";
import { getAllProducts } from "../../api/product";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
            .then(data => setProducts(data))
    }, [])

    console.log(products);

    return (
        <div className="flex flex-wrap justify-center">
            {products.map(card => (
                <Card key={card._id} card={card} />
            ))}
        </div>
    )
}

export default Products;