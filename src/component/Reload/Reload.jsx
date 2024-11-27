
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const RefreshButton = () => {
    const navigate = useNavigate();

    const handleRefresh = () => {
        navigate(-1);

    };

    return (

        <div className="absolute top-30 left-1 w-10 h-10 object-cover border-4 border-black rounded-full shadow-xl bg-white">
            <button className="ml-2 mt-2" onClick={handleRefresh}><FaArrowLeft/></button>
        </div>

    );
};

export default RefreshButton;