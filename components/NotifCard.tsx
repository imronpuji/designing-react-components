import { useContext } from "react"
import { ProviderNotes } from "./index"

const NotifCard = () => {
const {notification} = useContext(ProviderNotes)

    return (
        <div className={`shadow p-4 absolute top-12 right-14 ${notification ? "block" : "hidden"}`}>
            <p className="font-medium text-gray-700 text-sm">Notification</p>
        </div>
    )
}

export default NotifCard;