import { Form } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Create = (props) => {
    return(
        <div>
            <div className="header-container">
                <Header />
            </div>
            <h1>add a new product..</h1>
            <Form action={`/create/`} method="POST">
                    <input type="text" id="type" name="type" placeholder="type"/>
                    <input type="text" id="image" name="image" placeholder="image"/>
                    <input type="text" id="size" name="size" placeholder="size"/>
                    <input type="number" id="price" name="price" placeholder="price"/>
                    <button>Add to Inventory</button>
            </Form>
            <Footer />

        </div>

    )
}

export default Create