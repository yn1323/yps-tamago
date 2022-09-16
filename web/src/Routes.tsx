import { useAuth } from '@redwoodjs/auth'
import { Router, Route, Private, navigate, routes, useParams } from '@redwoodjs/router'

import { TemplateAuth } from 'src/components/Template/TemplateAuth'
import { TemplateUnauth } from 'src/components/Template/TemplateUnauth'
import { Dashboard } from 'src/pages/Dashboard'
import { Login } from 'src/pages/Login'
import { LoginRegister } from 'src/pages/Login/LoginRegister'
import { LoginReset } from 'src/pages/Login/LoginReset'
import { SetPassword } from 'src/pages/Login/SetPassword'
import { Logout } from 'src/pages/Logout'
import { New } from 'src/pages/New'
import { Top } from 'src/pages/Top'

const Routes = () => {
  const { isAuthenticated, hasRole } = useAuth()
  const urlParams = new URLSearchParams(window.location.search)
  const shopId = urlParams.get('shopId')

  const isInitialLogin = isAuthenticated && hasRole('new')
  if (isInitialLogin) {
    navigate(routes.new(shopId ? { shopId } : {}))
  }

  const isRegistered = isAuthenticated && !hasRole('new')
  if (isRegistered) {
    navigate(routes.dashboard())
  }

  return (
    <Router>
      <TemplateUnauth>
        <Route path="/" page={Top} name="top" />
        <Route path="/login" page={Login} name="login" />
        <Route path="/login/register" page={LoginRegister} name="loginRegister" />
        <Route path="/login/reset" page={LoginReset} name="loginReset" />
        <Route path="/login/setPassword" page={SetPassword} name="setPassword" />
        <Route path="/logout" page={Logout} name="logout" />
      </TemplateUnauth>

      <Private unauthenticated="login">
        <TemplateUnauth showLoginButton={false}>
          <Route path="/new" page={New} name="new" />
        </TemplateUnauth>

        <TemplateAuth>
          <Route path="/dashboard" page={Dashboard} name="dashboard" />
        </TemplateAuth>
      </Private>

      {/* <Route notfound page={NotFoundPage} /> */}
    </Router>
  )
}

export default Routes
