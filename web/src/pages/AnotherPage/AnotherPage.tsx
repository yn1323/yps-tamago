import { FC } from 'react'

import { Button } from '@chakra-ui/react'
import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

import { Animation } from 'src/components/Template/Animation'
import ContactsCell from 'src/features/test/ContactsCell'

type PropTypes = {
  show: boolean
  hoge?: '11' | '22'
}

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const AnotherPage: FC<PropTypes> = ({ show }) => {
  const [create] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT)

  const clickHandler = () => {
    create({
      variables: { input: { name: 'hogehogeman', message: 'this is message' } },
    })
  }

  return (
    <Animation>
      <MetaTags title="Top" description="Top page" />
      <h1>TopPage</h1>
      {show && <Button data-testid="close">aaaa</Button>}
      {!show && (
        <Button data-testid="close" onClick={clickHandler}>
          not Show
        </Button>
      )}
      <p>
        Find me in <code>./web/src/pages/TopPage/TopPage.tsx</code>
      </p>
      <ContactsCell />
      <p>
        My default route is named <code>top</code>, link to me with `
        <Link to={routes.sample()}>Top</Link>`
      </p>
    </Animation>
  )
}

export default AnotherPage
