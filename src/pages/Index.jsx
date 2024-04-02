import { useLoaderData } from "react-router-dom"

const Index = (props) => {
    const allProducts = useLoaderData()

    return(
        <div>
            <h1>All Products</h1>
            {allProducts.map(v => {
                return (
                    <div key={v._id} className="product">
                        
                            <h4>{v.type}</h4>
                        
                        
                    </div>            
                )
            })}
        </div>
        
    )
}

export default Index