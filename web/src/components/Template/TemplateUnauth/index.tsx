import { FC } from 'react'

import {
  Box,
  Button,
  HStack,
  Spacer,
  Text,
  useTheme,
  VStack,
} from '@chakra-ui/react'

import { Link, useParams } from '@redwoodjs/router'

import { useScreenSize } from 'src/hooks/useScreenSize'

type PropTypes = {
  children: JSX.Element | JSX.Element[]
  showLoginButton?: boolean
  showLogoutButton?: boolean
}

export const TemplateUnauth: FC<PropTypes> = ({
  children,
  showLoginButton = true,
  showLogoutButton = false,
}) => {
  const { shopId } = useParams()
  if (showLoginButton && showLogoutButton) {
    throw 'ログインボタンとログアウトボタンは同時に使用できません'
  }
  const { isPC } = useScreenSize()
  const { breakpoints } = useTheme()
  // useOnAuthStateChanged()

  const styles = {
    header: {
      height: isPC ? '56px' : '52px',
      width: isPC ? breakpoints.lg : '100%',
    },
    loginButon: {
      size: isPC ? 'md' : 'sm',
    },
    content: {
      width: isPC ? breakpoints.lg : '100%',
    },
  }

  return (
    <Box>
      <VStack p={2} role="navigation">
        <HStack w={styles.header.width} h={styles.header.height}>
          <Box>
            <HStack as={Link} to="/">
              <div>IMG...</div>
              <Text fontSize="2xl" as="h1">
                YPS
              </Text>
            </HStack>
          </Box>
          <Spacer />
          <Box>
            {showLoginButton && (
              <Button
                variant="outline"
                colorScheme="primary"
                size={styles.loginButon.size}
                as={Link}
                to={`/login${shopId ? `?shopId=${shopId}` : ''}`}
              >
                ログイン
              </Button>
            )}
            {showLogoutButton && (
              <Button
                variant="outline"
                colorScheme="primary"
                size={styles.loginButon.size}
                as={Link}
                to="/logout"
              >
                ログアウト
              </Button>
            )}
          </Box>
        </HStack>
      </VStack>
      <HStack justifyContent="center">
        <Box w={styles.header.width} p={2} as="main">
          {children}
        </Box>
      </HStack>
    </Box>
  )
}
