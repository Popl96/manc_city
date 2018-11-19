import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';

import Home from './Components/home';
import SignIn from './Components/signin';
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';
import NotFound from './Components/ui/not_found';

import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/addEditMatch';
import AdminPlayers from './Components/admin/players';
import AddEditPlayers from './Components/admin/players/addEditPlayers';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} exact path="/admin_players/add_players" component={AddEditPlayers}/>
        <PrivateRoute {...props} exact path="/admin_players/add_players/:id" component={AddEditPlayers}/>
        <PrivateRoute {...props} exact path="/admin_players" component={AdminPlayers}/>
        <PrivateRoute {...props} exact path="/admin_matches/edit_match" component={AddEditMatch}/>
        <PrivateRoute {...props} exact path="/admin_matches/edit_match/:id" component={AddEditMatch}/>
        <PrivateRoute {...props} exact path="/admin_matches" component={AdminMatches}/>
        <PrivateRoute {...props} exact path="/dashboard" component={Dashboard}/>
        <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
        <PublicRoute {...props} restricted={false} path="/the_matches" exact component={TheMatches}/>
        <PublicRoute {...props} restricted={false} path="/the_team" exact component={TheTeam}/>
        <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
        <PublicRoute {...props} restricted={false} component={NotFound}/>
      </Switch>
    </Layout>
  )
}

export default Routes;
