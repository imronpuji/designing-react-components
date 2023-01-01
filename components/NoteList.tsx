import { useContext } from "react"
import { ProviderNotes } from "./index"
import NoteCard from "./NoteCard"
const NoteList = () => {
    const {dataNotes} = useContext(ProviderNotes)
    return (
        <div>
            <div className="container mx-auto mt-20 grid grid-cols-4 gap-8">{
                dataNotes?.map(({title, id, description}:any) => {
                    return (
                        <NoteCard key={id} id={id} title={title} description={description}/>
                    )
                })
                }
            </div>
        </div>
    )
}

export default NoteList