import { Link } from 'react-router-dom'

const Hamburger = () => {

    return(
        <div className="">
            <div>
                <Link to={''}>
                    <h3>All Product</h3>
                </Link>
                <Link to={'/new/'}>
                    <h3>Add a Product</h3>
                </Link>
                <Link>
                    <h3>Logout</h3>
                </Link>
                
            </div>
        </div>
    )
}

export default Hamburger