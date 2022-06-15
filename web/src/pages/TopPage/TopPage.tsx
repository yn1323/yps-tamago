import { Button } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TopPage = () => {
  console.log(process.env.MOGMOG)
  return (
    <>
      <MetaTags title="Top" description="Top page" />
      <h1>TopPage</h1>
      <Button>aaaa</Button>
      <p>
        Find me in <code>./web/src/pages/TopPage/TopPage.tsx</code>
      </p>
      <p>
        My default route is named <code>top</code>, link to me with `
        <Link to={routes.top()}>Top</Link>`
      </p>
    </>
  )
}

export default TopPage
