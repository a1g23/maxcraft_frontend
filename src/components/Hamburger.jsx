import { Link } from 'react-router-dom'

const Hamburger = () => {

    return(
        <div className="">
            <div>
                <Link to={'/'}>
                    <h3>all products</h3>
                </Link>
                <Link to={'/new/'}>
                    <h3>add a product</h3>
                </Link>
                {/* this will link to the login page */}
                <Link to={'/'}>
                    <h3>logout</h3>
                </Link>
                
            </div>
        </div>
    )
}

export default Hamburger