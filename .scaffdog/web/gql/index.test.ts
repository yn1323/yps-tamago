import { act } from 'react-dom/test-utils'

import { renderHook } from '@redwoodjs/testing/web'

import { use{{ inputs.gqlName | pascal }}{{ inputs.gqlType | pascal }} } from 'src/hooks/gql/{{ inputs.gqlType }}/{{ inputs.gqlName | pascal }}'
import { {{ inputs.gqlName | pascal }}Mock } from 'src/hooks/gql/{{ inputs.gqlType | came; }}/{{ inputs.gqlName | pascal }}/index.mock'

describe('{{ inputs.gqlType }}/{{ inputs.gqlName | pascal }}', () => {
  it('Success', async () => {
    {{ inputs.gqlName | pascal }}Mock.success()
    const { result } = renderHook(() => use{{ inputs.gqlName | pascal }}{{ inputs.gqlType | pascal }}())
    expect(result.current.isError).toBeFalsy()
    expect(result.current.isSuccess).toBeFalsy()
    expect(result.current.errorMessage).toEqual('')
    expect(result.current.loading).toBeFalsy()
    await act(async () => {
      await result.current.{{ inputs.gqlName | camel }}({
        variables: {
          input: {
            userInput: {
              userId: 'userId',
              avatar: '',
              email: '',
              role: 'member',
              userName: '',
              isDeleted: false,
            },
            shopUserBelongingInput: {
              shopId: 'shopId',
              userId: 'userId',
              isDeleted: false,
            },
          },
        },
      })
      expect(result.current.isSuccess).toBeTruthy()
    })
  })
  it('Failure', async () => {
    {{ inputs.gqlName | pascal }}Mock.failure()
    const { result } = renderHook(() => use{{ inputs.gqlName | pascal }}{{ inputs.gqlType | pascal }}())
    expect(result.current.isSuccess).toBeFalsy()
    await act(async () => {
      await result.current.{{ inputs.gqlName | camel }}().catch(() => {
        expect(result.current.errorMessage).toBe('Error')
        expect(result.current.isError).toBeTruthy()
        expect(result.current.isSuccess).toBeFalsy()
      })
    })
  })
})
