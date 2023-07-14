import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page404 from "./pages/404Page";
import HomePage from './pages/homePage';
import LuxuriesPage from './pages/luxuries';
import JourneysPage from './pages/journeys';
import TastemakerPage from './pages/tastemaker';
import BalancePage from './pages/balance';
import MomentsPage from './pages/moments';
import DelightsPage from './pages/delights';
import RewardsPage from './pages/rewards';
import DedicationPage from './pages/dedication';
import TermsAndConditionsPage from './pages/termsandconditions';

/**
 * Routes component containing routes for the whole application
 * @returns {JSX}
 */

const AppRoutes = () => (
    <Routes basename={'/hk'}>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/luxuries' element={<LuxuriesPage />} />
        <Route exact path='/journeys' element={<JourneysPage />} />
        <Route exact path='/tastemakers' element={<TastemakerPage />} />
        <Route exact path='/balance' element={<BalancePage />} />
        <Route exact path='/moments' element={<MomentsPage />} />
        <Route exact path='/delights' element={<DelightsPage />} />
        <Route exact path='/rewards' element={<RewardsPage />} />
        <Route exact path='/dedication' element={<DedicationPage />} />
        <Route exact path='/terms-and-conditions' element={<TermsAndConditionsPage />} />
        <Route path="*"  component={<Page404 />} />
    </Routes>
);

export default AppRoutes;