
const TextOne = ({Titulo, Parrafo}) => {
    return(
        <>
            <div className="p-4 rounded p-1 text-center ">
                <h2 className="text-white text-2xl font-bold text-[40px]">{Titulo}</h2>
            </div>
            <div className="text-white mt-2 m-10 text-[24px]">
                <p>{Parrafo}</p>
            </div>
        </>
    )
}

export default TextOne
