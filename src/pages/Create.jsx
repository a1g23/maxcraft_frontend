import { Form } from 'react-router-dom'

const Create = (props) => {
    return(
        <div>

        
            <h1>add a new product..</h1>
            <Form action={`/new/`} method="POST">
                    <input type="text" id="type" name="type" placeholder="type"/>
                    <input type="text" id="image" name="image" placeholder="image"/>
                    <input type="text" id="size" name="size" placeholder="size"/>
                    <input type="number" id="price" name="price" placeholder="price"/>
                    <button>New</button>
            </Form>

        </div>

    )
}

export default Create