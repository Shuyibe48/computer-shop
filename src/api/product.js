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


// Get user posted products
export const getUserPostedProducts = async email => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${email}`)
    const products = await response.json()
    return products
}


// Delete product
export const deleteProduct = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    })
    const result = await response.json()
    return result
}
