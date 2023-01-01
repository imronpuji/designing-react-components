import { useContext } from "react"
import { ProviderNotes } from "./index"
import { PlusCircleIcon, BellAlertIcon, ArchiveBoxArrowDownIcon } from '@heroicons/react/24/solid'
import NotifCard from "./NotifCard"

const Navbar = () => {
const {onSearch, handleModal, notification, handleNotification} = useContext(ProviderNotes)

    return (
        <div className=" border-gray-400 rounded-md w-full container mx-auto mt-8 grid grid-cols-10 gap-4">
            <button className="col-span-1 bg-blue-100 text-blue-700 p-2 rounded flex items-center gap-2 justify-center" onClick={handleModal}><PlusCircleIcon height={20}/> <p>Add Card</p> </button>
            <input className="col-span-5 px-4 rounded w-full border" placeholder="search anything you want" onChange={(e) => onSearch(e.target.value)}/>
            <div className="col-span-1"/>
            <div className="flex gap-4 justify-end col-span-3 relative">
                <NotifCard/>
                <button className="col-span-3 bg-green-100 text-green-700 p-2 rounded flex items-center gap-2 justify-center" onClick={handleNotification}><BellAlertIcon height={20}/> </button>
                <button className="col-span-3 bg-indigo-100 text-indigo-700 p-2 rounded flex items-center gap-2 justify-center" onClick={handleModal}><ArchiveBoxArrowDownIcon height={20}/> </button>
            </div>
        </div>

    )
    
}

export default Navbar