import { FC } from 'react'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
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
  login: 'メールアドレスでログイン',
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
      <Stack spacing={4} w="300px" role="form">
        <FormControl id="email">
          <FormLabel aria-hidden>メールアドレス</FormLabel>
          <InputGroup>
            <InputLeftElement color="gray.300" pointerEvents="none">
              <FiMail />
            </InputLeftElement>
            <Input
              data-testid="email"
              role="textbox"
              type="email"
              maxLength={64}
              required
              {...register('email', {
                required: true,
              })}
            />
          </InputGroup>
        </FormControl>
        {
          <FormControl id="password" isDisabled={isReset}>
            <FormLabel>パスワード</FormLabel>
            <InputGroup>
              <InputLeftElement color="gray.300" pointerEvents="none">
                <RiLockPasswordLine />
              </InputLeftElement>
              <Input
                data-testid="password"
                role="textbox"
                type="password"
                maxLength={16}
                required
                {...register('password', {
                  required: true,
                })}
              />
            </InputGroup>
          </FormControl>
        }
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
              <Text as="u" key={i}>
                <Button as={Link} to={url} variant="ghost" size="sm">
                  {label}
                </Button>
              </Text>
            ))}
        </VStack>
      </Stack>
    </form>
  )
}
