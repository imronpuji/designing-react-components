import { useContext } from "react"
import { ProviderNotes } from "./index"
const Overlay = () => {
    const {modal,handleModal} = useContext(ProviderNotes)
    return (
        <div onClick={handleModal} className={`${modal ? "flex" : "hidden"} fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen w-screen bg-gray-800 opacity-40 z-20`}/>

    )
}

export default Overlay