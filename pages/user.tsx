import Link from "next/link"
import subscribe from "../libs/subscribe"
import { UserQuerySubscription, USER_QUERY_SUBSCRIPTION } from "../graphql/user"
import useSWR from "swr"

const USER_SUBSCRIPTION = `
  subscription {
    users_users(where:{id:{_eq:2}}) {
      first_name
      full_name
    }
  }
`
const subscribeData = async (...args: any) => {

  return subscribe(USER_SUBSCRIPTION)
}

export default function Subscription() {
  const { data } = useSWR(, subscribeData)
  console.log(data)
  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Subscribed to Latest 10 users from the database</h1>
      <div>
        {data.users_users.map((user, index) => (
          <div key={index}>
            <p>:::::: {user.full_name} ::::::</p>
          </div>
        ))}
      </div>
    </div>
  )
}
