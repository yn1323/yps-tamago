import { FC } from 'react'

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import {
  FaHome,
  FaCalendarAlt,
  FaFolderOpen,
  FaClock,
  FaEllipsisV,
  FaWrench,
  FaQuestionCircle,
  FaSignOutAlt,
} from 'react-icons/fa'

import { Link } from '@redwoodjs/router'

import { MENU } from 'src/constants/ui/menu'

const HEIGHTS = {
  HEADER: 10,
  FOOTER: 3,
} as const
const NAVBAR_BUTTONS = [
  { ...MENU.TOP, icon: FaHome },
  { ...MENU.SHIFT, icon: FaCalendarAlt },
  { ...MENU.ATTENDANCE, icon: FaFolderOpen },
  { ...MENU.TIMECARD, icon: FaClock, label: '打刻' },
] as const
const DRAWER_BUTTONS = [
  { ...MENU.CONFIG, icon: <FaWrench /> },
  { ...MENU.HOWTO, icon: <FaQuestionCircle /> },
  {
    ...MENU.LOGOUT,
    icon: <FaSignOutAlt />,
  },
] as const

type PropTypes = {
  children: JSX.Element | JSX.Element[]
}

export const MenuAuthSp: FC<PropTypes> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const uiProps = {
    icon: {
      color: useColorModeValue('gray.600', 'gray.300'),
    },
  }

  return (
    <Box height="100vh" position="relative">
      <HStack
        as="nav"
        borderBottom="1px"
        borderColor={useColorModeValue('gray.200', 'gray.600')}
        h={HEIGHTS.HEADER}
        w="100%"
        px={3}
        background={useColorModeValue('gray.50', undefined)}
      >
        <Text as="h1" fontSize="xl">
          Screen Title
        </Text>
        <Spacer />
      </HStack>
      <Box
        height={`calc(100vh - ${HEIGHTS.HEADER / 4}rem - ${HEIGHTS.FOOTER}rem)`}
        overflow="scroll"
        role="main"
      >
        {children}
      </Box>
      <Box
        position="absolute"
        top={`calc(100vh - ${HEIGHTS.FOOTER}rem - 1px)`}
        width="100vw"
        borderTop="1px"
        borderColor={useColorModeValue('gray.200', 'gray.600')}
      >
        <HStack h="100%" justifyContent="space-between">
          {NAVBAR_BUTTONS.map(({ icon, label, link }, i) => (
            <Button
              key={i}
              aria-label={label}
              h={`${HEIGHTS.FOOTER}rem`}
              variant="ghost"
              as={Link}
              to={link}
            >
              <Flex
                h={`${HEIGHTS.FOOTER}rem`}
                flexDirection="column"
                alignItems={'center'}
              >
                <Icon
                  mt={1.5}
                  w={6}
                  h={6}
                  as={icon}
                  color={uiProps.icon.color}
                />
                <Text fontSize="10px" color={uiProps.icon.color}>
                  {label}
                </Text>
              </Flex>
            </Button>
          ))}

          <Button
            h={`${HEIGHTS.FOOTER}rem`}
            w={4}
            variant="ghost"
            color={uiProps.icon.color}
            onClick={onOpen}
            aria-label="メニューを開く"
            aria-controls="menuDrawer"
            aria-haspopup="menu"
          >
            <Icon mt={1} w={4} h={4} as={FaEllipsisV} />
          </Button>
        </HStack>
      </Box>
      <Drawer
        placement={'bottom'}
        onClose={onClose}
        isOpen={isOpen}
        id="menuDrawer"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack>
              {DRAWER_BUTTONS.map(({ icon, label, link }, i) => (
                <Button
                  key={i}
                  as={Link}
                  to={link}
                  leftIcon={icon}
                  variant="ghost"
                  w="100%"
                  justifyContent={'flex-start'}
                >
                  {label}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
