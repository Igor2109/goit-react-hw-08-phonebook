import { StyledAppContainer } from 'App.styled';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import Navigation from './Navigation';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/authReducer';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestrictedRoute>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/register',
    element: (
      <RestrictedRoute>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
];
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    // <div className={css.container}>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactsList />
    // </div>
    <StyledAppContainer>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}{' '}
        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
};
