import { FC } from 'react'

import { Box, Button, Stack, Text, VStack } from '@chakra-ui/react'

import { SubmitHandler, useForm, FormProvider } from '@redwoodjs/forms'
import { Link, useParams } from '@redwoodjs/router'

import { FormEmail } from 'src/components/Form/FormEmail'
import { FormPassword } from 'src/components/Form/FormPassword'
import { useSubmit } from 'src/features/LoginForm/MailForm/script'

export const SUBMIT_LABELS = {
  signIn: 'メールアドレスでログイン',
  resetPassword: 'パスワードリセット',
  signUp: '登録する',
  setPassword: 'パスワードを再設定',
} as const

type MailFormType = keyof typeof SUBMIT_LABELS

type PropTypes = {
  mailFormType: MailFormType
}
type FormTypes = {
  email: string
  password?: string
}

export const MailForm: FC<PropTypes> = ({ mailFormType }) => {
  const { shopId } = useParams()
  const methods = useForm<FormTypes>()
  const show = {
    emailInput: ['signUp', 'signIn', 'resetPassword'].includes(mailFormType),
    passwordInput: ['signUp', 'signIn', 'setPassword'].includes(mailFormType),
  }
  const mailOptionButtons = [
    {
      label: '新規登録',
      url: `/login/register${shopId ? `?shopId=${shopId}` : ``}`,
      show: mailFormType === 'signIn',
    },
    {
      label: 'パスワードを忘れた方',
      url: `/login/reset${shopId ? `?shopId=${shopId}` : ``}`,
      show: ['signUp', 'signIn'].includes(mailFormType),
    },
    {
      label: 'ログイン画面に戻る',
      url: `/login${shopId ? `?shopId=${shopId}` : ``}`,
      show: ['signUp', 'resetPassword', 'setPassword'].includes(mailFormType),
    },
  ]
  const submitLabel = SUBMIT_LABELS[mailFormType]

  const { onSubmit, isLoading } = useSubmit()

  const exec: SubmitHandler<FormTypes> = async ({ email, password }) => {
    onSubmit(mailFormType, { email, password })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(exec)}>
        <Stack spacing={4} w="300px" role="form">
          {show.emailInput && <FormEmail />}
          {show.passwordInput && <FormPassword />}
          <Box pt={2} w="100%">
            <Button
              colorScheme="primary"
              w="100%"
              type="submit"
              isLoading={isLoading}
            >
              {submitLabel}
            </Button>
          </Box>
          <VStack alignItems="flex-end">
            {mailOptionButtons
              .filter(({ show }) => show)
              .map(({ label, url }, i) => (
                <Text as="u" key={i}>
                  <Button as={Link} to={url} variant="ghost" size="sm">
                    {label}
                  </Button>
                </Text>
              ))}
          </VStack>
        </Stack>
      </form>
    </FormProvider>
  )
}
