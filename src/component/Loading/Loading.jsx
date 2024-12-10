import {PuffLoader} from 'react-spinners'
export default function Loading(){
    return(
        <div className="container mx-auto flex justify-center items-center h-[87vh]">
            <PuffLoader color="#ffffff" size="100px" />
        </div>
    )
}