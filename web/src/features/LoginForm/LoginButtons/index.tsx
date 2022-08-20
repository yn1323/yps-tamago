import { FC } from 'react'

import { Button, VStack } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'

import { navigate, routes } from '@redwoodjs/router'

import { supabase } from 'src/config/supabase'

export const LoginButtons: FC = () => {
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

  const login = async () => {
    const { error } = await supabase.auth.signIn(
      {
        provider: 'google',
      },
      {
        redirectTo: `${window.location.origin}/dashboard`,
      }
    )
    if (error) {
      navigate(routes.login())
    }
  }

  return (
    <VStack data-testid="buttonlogin" spacing={4}>
      <Button
        {...props.button}
        leftIcon={<FcGoogle {...props.icon} />}
        onClick={login}
      >
        Googleでログイン
      </Button>
      {/* <Button
        {...props.button}
        leftIcon={<FaTwitter {...props.icon} />}
        colorScheme="twitter"
        // onClick={() => handleSignIn('twitter')}
      >
        Twitterでログイン
      </Button> */}
    </VStack>
  )
}
