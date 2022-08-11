import { Box } from '@chakra-ui/react'
import type { Find{{ inputs.component | pascal }}Query, Find{{ inputs.component | pascal }}QueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query Find{{ inputs.component | pascal }}Query($id: Int!) {
    {{ inputs.component | camel }}: {{ inputs.component | camel }}(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<Find{{ inputs.component | pascal }}QueryVariables>) => (
  <Box>Error: {error.message}</Box>
)

export const Success = ({
  {{ inputs.component | camel }},
}: CellSuccessProps<Find{{ inputs.component | pascal }}Query, Find{{ inputs.component | pascal }}QueryVariables>) => {
  return <Box>{JSON.stringify({{ inputs.component | camel }})}</Box>
}
