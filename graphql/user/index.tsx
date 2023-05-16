import { gql } from "@apollo/client"

export const USER_QUERY_SUBSCRIPTION = gql`
  subscription UserSubscription {
    users: users_users {
      first_name
      full_name
      last_name
    }
  }
`

export interface UserQuerySubscription {
  users: Array<{
    first_name: string
    full_name: string
    last_name: string
  }>
}
