import { useLoaderData } from "react-router-dom"

const Show = (props) => {
    const product = useLoaderData()

    return(
        <div>
            <h4>{product.type}</h4>
        </div>
        

    )
}

export default Show