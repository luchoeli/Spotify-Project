import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SpotifyComp from './components/SpotifyComp.js';
import Home from './views/Home';
import Artist from './views/Artist';
import ArtistSearch from './views/ArtistSearch';

const AppRoutes = () =>
    <SpotifyComp>
        <Switch>
            <Route path='/artist' component={ Artist } />
            <Route path='/artistsearch/:q?' component={ ArtistSearch } />
            <Route path='/' component={ Home } />
        </Switch>
    </SpotifyComp>

export default AppRoutes;