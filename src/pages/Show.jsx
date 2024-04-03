import { useLoaderData, Form, Link } from "react-router-dom"
import Header from "../components/Header"

const Show = (props) => {
    const product = useLoaderData()
    const id = product?.url.split("/")[4]

    return(
        <div>
            <Header />
            <h4>{product.type}</h4>
            <img src={product.image} alt="product image"></img>

            {/* we want this to truly delete */}
            <Form action={`/delete/${id}/`} method="POST">
                <button>Delete</button>
            </Form>
            
            {/* we want this to got to the update page */}
            <Link to={`/edit/${id}/`}>
                <button>Update</button>
            </Link>
        </div>
        

    )
}

export default Show