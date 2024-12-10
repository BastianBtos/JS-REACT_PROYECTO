import ItemList from "../ItemList/ItemList.jsx";
import {useEffect} from "react";
export default function Products() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div className="container mx-auto mt-10">
            <ItemList/>
        </div>
    )
}