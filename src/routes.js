import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SpotifyComp from './components/SpotifyComp.js';
import Home from './views/Home.js';
import Artist from './views/Artist.js';
import ArtistSearch from './views/ArtistSearch.js';

const AppRoutes = () =>
    <SpotifyComp>
        <Switch>
            <Route path='/artist' component={Artist} />
            <Route path='/artistsearch' component={ArtistSearch} />
            <Route path='/' component={Home} />
        </Switch>
    </SpotifyComp>

export default AppRoutes;