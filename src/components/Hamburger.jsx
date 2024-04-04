import { Link } from 'react-router-dom'

const Hamburger = () => {

    return(
        <div className="hamburger-content">
            <div>
                <Link to={'/'}>
                    <h4>all products</h4>
                </Link>
                <Link to={'/new/'}>
                    <h4>add a product</h4>
                </Link>
                {/* this will link to the login page */}
                <Link to={'/'}>
                    <h4>logout</h4>
                </Link>
                
            </div>
        </div>
    )
}

export default Hamburger