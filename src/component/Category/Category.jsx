import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList.jsx";
import Loading from "../Loading/Loading";

export default function ProductsCategory(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect (() => {
        setLoading(true);
        getProductByCategory(categoryId)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return(
        <div className="container mx-auto mt-10">
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                <ItemList products={products}/>
            )}
        </div>
    )
};