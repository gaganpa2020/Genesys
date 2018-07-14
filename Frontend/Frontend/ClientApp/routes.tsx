import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import DonarRegistration from './components/DonarRegistration';
import Wishlist from './components/Wishlist';
import SaveALife from './components/SaveALife';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={Counter} />
    <Route path='/donarregistration' component={DonarRegistration} />
    <Route path='/wishlist' component={Wishlist} />
    <Route path='/savealife'component={SaveALife} />
    <Route path='/fetchdata/:startDateIndex?' component={ FetchData } />
</Layout>;