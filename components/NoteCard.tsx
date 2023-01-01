import NoteAction from "./NoteAction"
const NoteCard = ({title, description, id}:any) => {
    return (
        <div className="shadow p-4">
            <h1 className="text-gray-500 text-sm font-medium">{id}</h1>
            <h1 className="text-xl font-semibold text-gray-700">{title}</h1>
            <p className="font-medium text-gray-700 text-sm">{description}</p>
            <NoteAction id={id}/>
        </div>
    )
}

export default NoteCard;