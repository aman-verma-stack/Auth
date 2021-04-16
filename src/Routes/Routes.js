import { Switch, Redirect } from "react-router-dom";
import { Home } from '../Components/Home';
import { About } from '../Components/About';
import { SignIn } from '../Components/SignIn';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

function Routes() {

    return (
        <Switch>
            <PublicRoute exact path="/" component={SignIn} />
            <PublicRoute exact path="/signin" component={SignIn} />
            <PrivateRoute exact path="/Dashboard" component={Home} />
            <PrivateRoute exact path="/About" component={About} />
            <Redirect to="/"></Redirect>
        </Switch>
    )
}

export default Routes;