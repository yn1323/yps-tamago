import { Box } from '@chakra-ui/react'
import type { {{ inputs.query | pascal }}, {{ inputs.query | pascal }}Variables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const beforeQuery = ({ word }: { word: string }) => {
  return {
    variables: { magicWord: word }
   }
}

export const QUERY = gql`
  query {{ inputs.query | pascal }}($input: {{ inputs.query | pascal }}Input!) {
    {{ inputs.query | camel }}(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<{{ inputs.component | pascal }}Variables>) => (
  <Box>Error: {error.message}</Box>
)

export const Success = ({
  {{ inputs.query | camel }},
}: CellSuccessProps<{{ inputs.query | pascal }}, {{ inputs.query | pascal }}Variables>) => {
  return <Box>{JSON.stringify({{ inputs.query | camel }})}</Box>
}
