import { useLoaderData, Form } from "react-router-dom"
import Header from "../components/Header"

const Update = (props) => {
    const product = useLoaderData()
    const id = product?.url.split("/")[4]

    return(
        <div>
            <Header />
            <h1>Update {product.type}..</h1>
            
            <Form action={`/update/${id}/`} method="POST">
                <input type="text" id="type" name="type" defaultValue={product.type}/>
                <input type="text" id="image" name="image" defaultValue={product.image}/>
                <input type="text" id="size" name="size" defaultValue={product.size}/>
                <input type="number" id="price" name="price" defaultValue={product.price}/>
                <button>Update</button>
            </Form>
            
        </div>
        

    )
}

export default Update