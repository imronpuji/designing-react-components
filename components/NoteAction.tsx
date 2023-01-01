import {useContext} from "react"
import { ProviderNotes } from "."
import { TrashIcon , PencilIcon, ClockIcon } from '@heroicons/react/24/solid'

const NoteAction = ({id}:any) => {

    const {removeNotes, search} = useContext(ProviderNotes)

    return (
        <div >
            <button className="p-2 mt-4 bg-red-100 rounded-md text-red-700" onClick={() => removeNotes(id)}><TrashIcon height={16}/></button>
            <button className="p-2 mt-4 bg-blue-100 rounded-md text-blue-700 ml-2" onClick={() => removeNotes(id)}><PencilIcon height={16}/></button>
            <button className="p-2 mt-4 bg-pink-100 rounded-md text-pink-700 ml-2" onClick={() => removeNotes(id)}><ClockIcon height={16}/></button>
        </div>
    )
}

export default NoteAction;