import { useMemo } from 'react'

import {
  {{ inputs.gqlName | pascal }},
  {{ inputs.gqlName | pascal }}Variables,
} from 'types/graphql'

import { use{{ inputs.gqlType | pascal }} } from '@redwoodjs/web'

// NOTE: Variableでエラーとなるときは、一度該当箇所を消して型を手動で作成すること

const {{ inputs.gqlName | constant }} = gql`
  mutation {{ inputs.gqlName | pascal }}($input: {{ inputs.gqlName | pascal }}Input!) {
    {{ inputs.gqlName | camel }}(input: $input) {
      user {
        userId
      }
      shopUserBelonging {
        shopId
      }
    }
  }
`

export const use{{ inputs.gqlName | pascal }}{{ inputs.gqlType | pascal }} = () => {
  const [{{ inputs.gqlName | camel }}, { loading, error, data }] = use{{ inputs.gqlType | pascal }}<
    {{ inputs.gqlName | pascal }},
    {{ inputs.gqlName | pascal }}Variables
  >({{ inputs.gqlName | constant }})

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
    {{ inputs.gqlName | camel }},
    loading,
    isError,
    errorMessage,
    isSuccess,
    data,
  }
}
