import { useLoaderData, Form, Link } from "react-router-dom"

const Show = (props) => {
    const product = useLoaderData()
    const id = product?.url.split("/")[4]

    return(
        <div>
            <h4>{product.type}</h4>
            
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