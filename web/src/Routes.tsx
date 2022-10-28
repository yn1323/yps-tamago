import { Router, Route, Private } from '@redwoodjs/router'

import { RouteWrapper } from 'src/components/Template/RouteWrapper'
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
  return (
    <Router>
      <RouteWrapper>
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
      </RouteWrapper>
    </Router>
  )
}

export default Routes
