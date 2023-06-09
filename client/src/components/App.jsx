import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from './Auth0/Loading.jsx'
import { useAuth0 } from "@auth0/auth0-react";
import { AuthenticationGuard } from "./Auth0/authentication-guard.js";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import LandingPage from './pages/LandingPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<AuthenticationGuard component={HomePage} />} />
        <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
};

export default App
