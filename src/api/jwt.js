const generateJwt = (email) => {
    fetch(`${import.meta.env.VITE_API_URL}/generate-jwt`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(email)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

export default generateJwt;