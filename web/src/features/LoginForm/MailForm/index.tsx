import { FC } from 'react'

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
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
  const shopId = 'hoge'
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormTypes>()
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
      url: '/login/reset',
      show: ['signUp', 'signIn'].includes(mailFormType),
    },
    {
      label: 'ログイン画面に戻る',
      url: '/login',
      show: ['signUp', 'resetPassword', 'setPassword'].includes(mailFormType),
    },
  ]
  const submitLabel = SUBMIT_LABELS[mailFormType]

  const { onSubmit, isLoading } = useSubmit()

  const exec: SubmitHandler<FormTypes> = async ({ email, password }) => {
    onSubmit(mailFormType, { email, password })
  }

  return (
    <form onSubmit={handleSubmit(exec)}>
      <Stack spacing={4} w="300px" role="form">
        {show.emailInput && (
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
        )}
        {show.passwordInput && (
          <FormControl id="password" isInvalid={!!errors.password}>
            <FormLabel>パスワード</FormLabel>
            <InputGroup>
              <InputLeftElement color="gray.300" pointerEvents="none">
                <RiLockPasswordLine />
              </InputLeftElement>
              <Input
                data-testid="password"
                role="textbox"
                type="password"
                autoComplete="current-password"
                maxLength={16}
                required
                {...register('password', {
                  required: true,
                  minLength: 8,
                })}
              />
            </InputGroup>
            <FormHelperText color={errors.password ? 'crimson' : undefined}>
              8文字以上16文字以内で入力してください
            </FormHelperText>
          </FormControl>
        )}
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
  )
}
