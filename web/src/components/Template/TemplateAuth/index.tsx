import { FC, Fragment } from 'react'

import { MenuAuthPc } from 'src/components/Menu/MenuAuthPc'
import { MenuAuthSp } from 'src/components/Menu/MenuAuthSp'
import { useScreenSize } from 'src/hooks/useScreenSize'

type PropTypes = {
  children: JSX.Element | JSX.Element[]
}

export const TemplateAuth: FC<PropTypes> = ({ children }) => {
  const showElement = Array.isArray(children) ? children : [children]
  const { isPC } = useScreenSize()

  return (
    <Fragment>
      {isPC ? (
        <MenuAuthPc>{showElement}</MenuAuthPc>
      ) : (
        <MenuAuthSp>{showElement}</MenuAuthSp>
      )}
    </Fragment>
  )
}
