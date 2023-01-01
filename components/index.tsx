import useNotes from "../hooks/useNote"
import { createContext } from "react"
import NoteList from "./NoteList"
import Navbar from "./NoteNavbar"
import Modal from "./Modal"
import Overlay from "./Overlay"
export const ProviderNotes = createContext({
    dataNotes:[],
    removeNotes:(e:string) => {},
    onSearch:(e:string) => {},
    search:"",
    modal:false,
    handleModal:() => {},
    addNotes:() => {},
    handleNotification:() => {},
    notification:false,
    handleForm:(e:any) => {}
})

const Index = () => {
    const useDataNotes = useNotes()
    return (
        <ProviderNotes.Provider value={useDataNotes}>
            <Navbar/>
            <NoteList/>
            <Modal/>
            <Overlay/>
        </ProviderNotes.Provider>
    )
}

export default Index;


