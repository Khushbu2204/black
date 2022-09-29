import { Route, Navigate, Outlet } from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

export default function AdminAuthorizedRoute(props) {
  const authenticate = AuthenticationService.isUserLoggedIn()
  const authorize = AuthenticationService.getUserRole()
  return authenticate && authorize === 'ROLE_ADMIN' ? (
    <Outlet />
  ) : (
    <Navigate to='/error' />
  )
}
