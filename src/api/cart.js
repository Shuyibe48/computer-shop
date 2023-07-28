// save product on db 
const saveProductsOnDb = (product, email) => {
    delete product._id
    product.buyer = email

    const response = fetch(`${import.meta.env.VITE_API_URL}/save-cart`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    return response
}


export default saveProductsOnDb



// get my selected products on cart
export const getCartProduct = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/save-cart/${email}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
    })
    const data = await response.json()
    return data
}