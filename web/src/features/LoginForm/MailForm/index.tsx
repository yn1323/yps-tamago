import { FC } from 'react'

import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FiMail } from 'react-icons/fi'
import { RiLockPasswordLine } from 'react-icons/ri'

import { Link } from '@redwoodjs/router'

export const SUBMIT_LABELS = {
  login: 'ログイン',
  reset: 'パスワードリセット',
  signUp: '登録する',
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
  // const {
  //   query: { shopId },
  // } = useRouter()
  const shopId = 'hoge'
  const { handleSubmit, register } = useForm<FormTypes>()
  // const { emailLogin, emailSignUp, emailReset, isLoading } = useEmailLogin()
  const isSignUp = mailFormType === 'signUp'
  const isLogin = mailFormType === 'login'
  const isReset = mailFormType === 'reset'
  const mailOptionButtons = [
    {
      label: '新規登録',
      url: `/login/register${shopId ? `?shopId=${shopId}` : ``}`,
      show: isLogin,
    },
    {
      label: 'パスワードを忘れた方',
      url: '/login/reset',
      show: isLogin || isSignUp,
    },
    { label: 'ログイン画面に戻る', url: '/login', show: isSignUp || isReset },
  ]
  const submitLabel = SUBMIT_LABELS[mailFormType]

  const onSubmit: SubmitHandler<
    FormTypes
  > = async (/*{ email, password }*/) => {
    // if (isSignUp && password) {
    //   await emailSignUp({ email, password })
    // } else if (isLogin && password) {
    //   await emailLogin({ email, password })
    // } else if (isReset) {
    //   await emailReset({ email })
    // }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} w="300px">
        <InputGroup>
          <InputLeftElement color="gray.300" pointerEvents="none">
            <FiMail />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="Eメールアドレス"
            maxLength={64}
            required
            {...register('email', {
              required: true,
            })}
          />
        </InputGroup>
        {!isReset && (
          <InputGroup>
            <InputLeftElement color="gray.300" pointerEvents="none">
              <RiLockPasswordLine />
            </InputLeftElement>
            <Input
              type="password"
              placeholder="パスワード"
              maxLength={64}
              required
              {...register('password', {
                required: true,
              })}
            />
          </InputGroup>
        )}
        <Box pt={2} w="100%">
          <Button
            colorScheme="primary"
            w="100%"
            type="submit"
            // isLoading={isLoading}
          >
            {submitLabel}
          </Button>
        </Box>
        <VStack alignItems="flex-end">
          {mailOptionButtons
            .filter(({ show }) => show)
            .map(({ label, url }, i) => (
              <Button as={Link} to={url} key={i} variant="ghost" size="sm">
                <Text as="u">{label}</Text>
              </Button>
            ))}
        </VStack>
      </Stack>
    </form>
  )
}
