import { Box } from '@chakra-ui/react'
import type { FindUserQuery, FindUserQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const beforeQuery = ({ userId }: { userId: string }) => {
  return {
    variables: { input: { userId } },
  }
}

export const QUERY = gql`
  query FindUserQuery($input: FindUserInput!) {
    findUser(input: $input) {
      user {
        id
        userId
        userName
        avatar
        role
        email
        isDeleted
        createdAt
      }
      belongs {
        shop {
          id
          shopName
          openTime
          closeTime
          timeUnit
          submitFrequency
          avatar
          useTimeCard
        }
        organization {
          id
          organizationName
        }
      }
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserQueryVariables>) => (
  <Box>Error: {error.message}</Box>
)

export const Success = ({
  findUser,
}: CellSuccessProps<FindUserQuery, FindUserQueryVariables>) => {
  return <Box>{JSON.stringify(findUser)}</Box>
}
