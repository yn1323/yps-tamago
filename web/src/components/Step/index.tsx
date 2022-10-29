import { Dispatch, FC, SetStateAction } from 'react'

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react'

import { useScreenSize } from 'src/hooks/useScreenSize'

type PropTypes = {
  labels: string[]
  tabIndex: number
  setTabIndex: Dispatch<SetStateAction<number>>
  children: JSX.Element[]
}

export const Step: FC<PropTypes> = ({
  labels,
  tabIndex,
  setTabIndex,
  children,
}) => {
  const { isPC } = useScreenSize()
  const buttonProp = {
    size: isPC ? 'md' : 'sm',
  }

  return (
    <Tabs index={tabIndex} onChange={setTabIndex}>
      <TabList>
        {labels.map((label, i) => (
          <Tab key={i}>
            <VStack spacing={0} alignItems="flex-start">
              {!isPC && <Text fontSize="xs">STEP</Text>}
              <HStack>
                <Button
                  as="div"
                  aria-label={label}
                  {...buttonProp}
                  rounded="full"
                  colorScheme={tabIndex === i ? 'primary' : undefined}
                >
                  {i + 1}
                </Button>
                <div aria-hidden>{label}</div>
              </HStack>
            </VStack>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {children.map((child, i) => (
          <TabPanel key={i}>{child}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
