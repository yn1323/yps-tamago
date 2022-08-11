import { Box } from '@chakra-ui/react'
import { FindContactsQuery, FindContactsQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindContactsQuery {
    contacts {
      id
      message
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<FindContactsQuery>) => (
  <Box>Error: {error.message}</Box>
)

export const Success = ({
  contacts,
}: CellSuccessProps<FindContactsQuery, FindContactsQueryVariables>) => {
  return <Box>{JSON.stringify(contacts)}</Box>
}
