import { FC } from 'react'

import { Box, Button, HStack } from '@chakra-ui/react'

import { Step } from 'src/components/Step'

type PropTypes = {
  labels: string[]
  children: JSX.Element[]
  tabIndex: typeof Step.defaultProps.tabIndex
  setTabIndex: typeof Step.defaultProps.setTabIndex
  onSubmit: () => void
  isLoading: boolean
}

export const FormStep: FC<PropTypes> = ({
  labels,
  tabIndex,
  setTabIndex,
  children,
  onSubmit,
  isLoading,
}) => {
  const back = () => setTabIndex(tabIndex - 1)
  const next = () => setTabIndex(tabIndex + 1)

  return (
    <Step labels={labels} tabIndex={tabIndex} setTabIndex={setTabIndex}>
      {children.map((child, i) => (
        <Box key={i}>
          {child}
          <HStack justifyContent={'space-between'}>
            <Button onClick={back} visibility={i > 0 ? 'visible' : 'hidden'}>
              戻る
            </Button>
            {i === children.length - 1 ? (
              <Button
                colorScheme="primary"
                isLoading={isLoading}
                onClick={onSubmit}
              >
                登録する
              </Button>
            ) : (
              <Button
                colorScheme="primary"
                onClick={next}
                isLoading={isLoading}
              >
                次へ
              </Button>
            )}
          </HStack>
        </Box>
      ))}
    </Step>
  )
}
