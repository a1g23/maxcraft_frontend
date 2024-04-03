import { useLoaderData, Link } from "react-router-dom"

const Index = (props) => {
    const allProducts = useLoaderData()


    return(
        <div>
            <h1>All Products</h1>
            {allProducts.map(v => {
                
                return (
                    
                    <div key={v._id} className="product">
                        
                        <Link to={v?.url.split("/")[4]}>
                            <h4>{v.type}</h4>
                        </Link>
                             
                        
                    </div>            
                )
            })}
        </div>
        
    )
}

export default Index