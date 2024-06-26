import { useLoaderData, Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Index = (props) => {
    const allProducts = useLoaderData()


    return(
        <div>
            <div className="header-container">
                <h1>all products..</h1>
                <Header />
            </div>
            <div className="container">
                {allProducts.map(v => {
                    return (
                        <div key={v._id} className="product">
                            <Link to={v?.url.split("/")[4]}>
                                <h4>{v.type}</h4>
                                <img src={v.image} width="300" ></img>
                            </Link>
                        </div>            
                    )
                })}
            </div>
            <Footer />
        </div>
        
    )
}

export default Index