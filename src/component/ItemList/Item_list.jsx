import Item from "../Item/Item"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading";

export default function ItemList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) =>{
            setProducts(data)
            setLoading(false)
        });
    }, []);


    return(
        <>
            {loading ?(
                <div className="flex flex-wrap justify-center items-center w-full">
                    <Loading />
                </div>
            ):(
                <div className="flex flex-wrap justify-center items-center w-full">
                    {products.map((prod) =>(
                        <Item {...prod} key={prod.id}/>
                    ))}
                </div>
            )}

        </>
    )
}
