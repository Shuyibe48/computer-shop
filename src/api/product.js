// Add a product
export const addProduct = async productData => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(productData),
    })

    const data = await response.json()
    return data
}


// Get all products
export const getAllProducts = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`)
    const data = await response.json()
    return data
}
