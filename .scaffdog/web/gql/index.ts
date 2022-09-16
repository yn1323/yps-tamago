import { useMemo } from 'react'

import {
  {{ inputs.gqlName | pascal }},
  {{ inputs.gqlName | pascal }}Variables,
} from 'types/graphql'

import { use{{ inputs.gqlType | pascal }} } from '@redwoodjs/web'

const {{ inputs.file | constant }} = gql`
  mutation {{ inputs.gqlName | pascal }}($input: __GQL_INPUT!) {
    _GQL_NAME(input: $input) {
      user {
        userId
      }
      shopUserBelonging {
        shopId
      }
    }
  }
`

export const use{{ inputs.file | pascal }}{{ inputs.gqlType | pascal }} = () => {
  const [{{ inputs.file | camel }}, { loading, error, data }] = use{{ inputs.gqlType | pascal }}<
    {{ inputs.gqlName | pascal }},
    {{ inputs.gqlName | pascal }}Variables
  >({{ inputs.file | constant }})

  const isError = useMemo(() => {
    if (loading) return false
    return !!error
  }, [loading, error])

  const errorMessage = useMemo(() => {
    if (loading) return ''
    return error?.message ?? ''
  }, [loading, error])

  const isSuccess = useMemo(() => {
    if (loading) return false
    return !!data
  }, [loading, data])

  return {
    {{ inputs.file | camel }},
    loading,
    isError,
    errorMessage,
    isSuccess,
    data,
  }
}
