import {Link} from 'react-router-dom';
export default function Item({id, name, price, img}){

    return(
        <div className="flex flex-col items-center m-1 p-2">
            <Link to={`/products/${id}`} className="rounded hover:scale-105 transition-all duration-500 cursor-pointer h-45"><img className="rounded w-[260px] h-[260px]" src={img} alt="Imagen Productos" /></Link>
            <Link to={`/products/${id}`} className="pt-[14px] text-[16px] font-bold my-[15px] uppercase text-[white] hover:text-[red] hover:scale-105 transition-all duration-500 cursor-pointer">{name}</Link>
            <h4 className="text-[17px] font-bold mb-[20px] uppercase text-[lightblue] hover:text-[red] scale-105 transition-all duration-500 cursor-pointer">${price} USD</h4>
        </div>
    )
}