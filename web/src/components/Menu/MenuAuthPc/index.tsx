import { FC } from 'react'

import {
  Box,
  Button,
  Divider,
  Spacer,
  useColorModeValue,
  VStack,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FcNext, FcPrevious } from 'react-icons/fc'

import { Link } from '@redwoodjs/router'

import { useExpandButton } from 'src/components/Menu/MenuAuthPc/script'
import { MENU } from 'src/constants/ui/menu'

type PropTypes = {
  children: JSX.Element | JSX.Element[]
}

export const MenuAuthPc: FC<PropTypes> = ({ children }) => {
  const tasks = [MENU.TOP, MENU.SHIFT, MENU.ATTENDANCE, MENU.TIMECARD]
  const commons = [MENU.CONFIG, MENU.HOWTO, MENU.LOGOUT]
  const { isExpand, setIsExpand } = useExpandButton()

  const buttonHoverColor = useColorModeValue('gray.100', 'gray.700')

  const buttonProps = ({ isExpand }: { isExpand: boolean }) => ({
    variant: 'ghost',
    w: isExpand ? '100%' : '100%',
    justifyContent: 'flex-start',
    _hover: { bg: buttonHoverColor },
    rounded: 0,
  })

  const drawerAnimation = {
    width: isExpand ? '200px' : '50px',
  }

  return (
    <HStack>
      <motion.div
        initial={drawerAnimation}
        animate={drawerAnimation}
        role="navigation"
      >
        <VStack
          alignItems="flex-start"
          borderRight="1px"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
          h="100vh"
          w="100%"
          background={useColorModeValue('gray.50', undefined)}
        >
          {isExpand && (
            <Button
              onClick={() => setIsExpand(false)}
              leftIcon={<FcPrevious />}
              {...buttonProps({ isExpand })}
              aria-label="ナビゲーションのラベルを非表示"
              display={{ base: 'none', md: 'flex' }}
            />
          )}
          {!isExpand && (
            <Button
              onClick={() => setIsExpand(true)}
              leftIcon={<FcNext />}
              {...buttonProps({ isExpand })}
              aria-label="ナビゲーションのラベルを表示"
              data-testid="openButton"
              display={{ base: 'none', md: 'flex' }}
            />
          )}
          <Divider display={{ base: 'none', md: 'flex' }} />
          {tasks.map(({ icon, label, link }, i) => (
            <Button
              key={i}
              leftIcon={icon}
              {...buttonProps({ isExpand })}
              as={Link}
              to={link}
              aria-label={label}
            >
              {isExpand ? label : ''}
            </Button>
          ))}
          <Spacer />
          <Divider />
          {commons.map(({ icon, label, link }, i) => (
            <Button
              key={i}
              leftIcon={icon}
              {...buttonProps({ isExpand })}
              as={Link}
              to={link}
              aria-label={label}
            >
              {isExpand ? label : ''}
            </Button>
          ))}
        </VStack>
      </motion.div>
      <Box
        w={`calc(100vw - ${drawerAnimation.width})`}
        h="100vh"
        p={4}
        m={0}
        role="main"
      >
        {children}
      </Box>
    </HStack>
  )
}
