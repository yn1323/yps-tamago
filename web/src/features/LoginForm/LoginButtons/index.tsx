import { FC } from 'react'

import { Button, VStack } from '@chakra-ui/react'
import { FaTwitter, FaUserAlt } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export const LoginButtons: FC = () => {
  // const router = useRouter()
  // const {
  //   query: { shopId = '' },
  // } = router
  // const { signIn, isLoading } = useLogIn()

  // const handleSignIn = async (
  //   type: Parameters<typeof signIn>[0],
  //   options?: Parameters<typeof signIn>[1]
  // ) => {
  //   const result = await signIn(type, options)
  //   if (result) {
  //     if (shopId) {
  //       router.push({ pathname: '/register', query: { shopId } })
  //     } else {
  //       router.push('/register')
  //     }
  //   }
  // }

  const props = {
    button: {
      w: 300,
      fontSize: 'sm',
      isLoading: false,
    },
    icon: {
      fontSize: 18,
    },
  }
  return (
    <VStack data-testid="buttonlogin" spacing={4}>
      <Button
        {...props.button}
        leftIcon={<FcGoogle {...props.icon} />}
        // onClick={() => handleSignIn('google')}
      >
        Googleでログイン
      </Button>
      <Button
        {...props.button}
        leftIcon={<FaTwitter {...props.icon} />}
        colorScheme="twitter"
        // onClick={() => handleSignIn('twitter')}
      >
        Twitterでログイン
      </Button>
      <Button
        {...props.button}
        leftIcon={<FaUserAlt {...props.icon} />}
        colorScheme="green"
        // onClick={() => handleSignIn('anonymously')}
      >
        ゲストでログイン
      </Button>
    </VStack>
  )
}
