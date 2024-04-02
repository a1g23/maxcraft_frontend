const URL = import.meta.env.VITE_BASE_URL 

// Index Loader
export const indexLoader = async () => {
    const response = await fetch(`${URL}`)
    const allProducts = await response.json()
    return allProducts
}

// Show Loader
export const showLoader = async ({ params }) => {
    const response = await fetch(`${URL}${params.id}/`)
    const product = await response.json()
    return product
}