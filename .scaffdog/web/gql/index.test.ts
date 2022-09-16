import { act } from 'react-dom/test-utils'

import { renderHook } from '@redwoodjs/testing/web'

import { use{{ inputs.file | pascal }}{{ inputs.gqlType | pascal }} } from 'src/hooks/gql/{{ inputs.gqlType }}/{{ inputs.file | pascal }}'

describe('{{ inputs.gqlType }}/{{ inputs.file | pascal }}', () => {
  it('Success', async () => {
    mockGraphQLMutation('{{ inputs.gqlName | pascal }}', _ => {
      return {
        createMemberUser: {
          user: {
            userId: 'userId',
          },
          shopUserBelonging: {
            shopId: 'shopId',
          },
        },
      }
    })
    const { result } = renderHook(() => use{{ inputs.file | pascal }}{{ inputs.gqlType | pascal }}())
    expect(result.current.isError).toBeFalsy()
    expect(result.current.isSuccess).toBeFalsy()
    expect(result.current.errorMessage).toEqual('')
    expect(result.current.loading).toBeFalsy()
    await act(async () => {
      await result.current.{{ inputs.file | camel }}({
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
    mockGraphQLMutation(
      '{{ inputs.gqlName | pascal }}',
      (_, { ctx }) => {
        ctx.errors([{ message: 'Error' }])
      }
    )
    const { result } = renderHook(() => use{{ inputs.file | pascal }}{{ inputs.gqlType | pascal }}())
    expect(result.current.isSuccess).toBeFalsy()
    await act(async () => {
      await result.current.{{ inputs.file | camel }}().catch(() => {
        expect(result.current.errorMessage).toBe('Error')
        expect(result.current.isError).toBeTruthy()
        expect(result.current.isSuccess).toBeFalsy()
      })
    })
  })
})
