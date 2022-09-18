import { act } from 'react-dom/test-utils'

import { renderHook } from '@redwoodjs/testing/web'

import { use{{ inputs.file | pascal }}{{ inputs.gqlType | pascal }} } from 'src/hooks/gql/{{ inputs.gqlType }}/{{ inputs.file | pascal }}'

import { success, failure } from './index.mock'

describe('{{ inputs.gqlType }}/{{ inputs.file | pascal }}', () => {
  it('Success', async () => {
    success()
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
    failure()
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
