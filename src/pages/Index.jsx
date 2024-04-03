import { useLoaderData, Link } from "react-router-dom"
import Header from "../components/Header"

const Index = (props) => {
    const allProducts = useLoaderData()


    return(
        <div>
            <Header />
            <h1>All Products</h1>
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
        
    )
}

export default Index