import { Route, Navigate, Outlet } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

export default function CustomerAuthorizedRoute(props) {
  const authenticate = AuthenticationService.isUserLoggedIn()
  const authorize = AuthenticationService.getUserRole()
  return authenticate && authorize === 'ROLE_EMPLOYEE' ? (
    <Outlet />
  ) : (
    <Navigate to='/error' />
  )
}
