import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MogmogPage = () => {
  return (
    <>
      <MetaTags title="Mogmog" description="Mogmog page" />
      <h1>MogmogPag</h1>
      <p>
        Find me in <code>./web/src/pages/MogmogPage/MogmogPage.tsx</code>
      </p>
      <p>
        My default route is named <code>mogmog</code>, link to me with `
        <Link to={routes.mogmog()}>Mogmog</Link>`
      </p>
    </>
  )
}

export default MogmogPage
