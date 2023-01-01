import { useContext } from "react"
import { ProviderNotes } from "./index"
const Modal = () => {
    const {modal, handleModal, handleForm, addNotes} = useContext(ProviderNotes)
    return (
        <div className={`${modal ? "flex" : "hidden"} p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-white -translate-y-1/2 gap-4 flex-col border w-96 z-40`}>
            <input type="text"  placeholder="title" className="w-full p-4 rounded bg-gray-200" onChange={(e) => handleForm({
                value:e.target.value,
                type:"title"
            })}/>
            <input type="text"  placeholder="id" className="w-full p-4 rounded bg-gray-200" onChange={(e) => handleForm({
                value:e.target.value,
                type:"id"
            })}/>
            <input type="text"  placeholder="description" className="w-full p-4 rounded bg-gray-200" onChange={(e) => handleForm({
                value:e.target.value,
                type:"description"
            })}/>
            <div className="flex gap-4">
            <button className="p-2 mt-4 w-28 bg-blue-100 rounded-md text-blue-700" onClick={addNotes}>Add Card</button>
            <button className="p-2 mt-4 w-28 bg-red-100 rounded-md text-red-700" onClick={handleModal}>Cancel</button>
            </div>

        </div>
    )
}

export default Modal