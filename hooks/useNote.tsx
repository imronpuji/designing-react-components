import { useEffect, useState } from "react"
import notes from "../data/notes.json"

const useNotes = () => {
    const [dataNotes, setDataNotes] = useState<any>([])
    const [search, setSearch] = useState<any>("")
    const [notification, setNotification] = useState<boolean>(false)
    const [title, setNewTitle] = useState<any>("")
    const [id, setNewId] = useState<any>("")
    const [description, setNewDesc] = useState<any>("")
    const [modal, setModal] = useState<boolean>(false)

    useEffect(() => {
        setDataNotes(notes)
    }, [])
    function handleForm({value, type}:any){
        if(type ==="title"){
            setNewTitle(value)
        }
        if(type ==="id"){
            setNewId(value)
        }
        if(type ==="description"){
            setNewDesc(value)
        }

    }
    function onSearch(value:string){
        if(value){
            setDataNotes(dataNotes.filter((data:any) => {
                if(data?.title.includes(value)){
                    return data
                }
            }))
        } 
        else {
            setDataNotes(notes)
        }
  
        
    }
    function removeNotes(idRemove:string){
        setDataNotes(dataNotes.filter(({id}:any) => id !== idRemove))
    }
    function addNotes(){
       setDataNotes([...dataNotes, {title, id, description}])
       setModal(!modal)
    }
    function handleModal(){
        setModal(!modal)
    }
    function handleNotification(){
        setNotification(!notification)
    }
    return {dataNotes,handleNotification, notification, removeNotes, onSearch, search, handleModal, modal, addNotes, handleForm}
}
export default useNotes