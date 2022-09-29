import { Route , Navigate ,Outlet} from 'react-router-dom';
import AuthenticationService from './AuthenticationService';


export default function AuthenticatedRoute(props) {

  const auth = AuthenticationService.isUserLoggedIn();
  return auth ? <Outlet /> : <Navigate to="/" />;

}
