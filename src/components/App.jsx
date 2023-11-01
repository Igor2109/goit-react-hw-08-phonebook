import { StyledAppContainer, StyledNavLink } from 'App.styled';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/contacts', element: <ContactsPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
];
export const App = () => {
  return (
    // <div className={css.container}>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactsList />
    // </div>
    <StyledAppContainer>
      <header>
        <nav>
          <StyledNavLink className="header-link" to="/">
            Home
          </StyledNavLink>
          <StyledNavLink className="header-link" to="/contacts">
            Contacts
          </StyledNavLink>
          <StyledNavLink className="header-link" to="/login">
            Login
          </StyledNavLink>
          <StyledNavLink className="header-link" to="/register">
            Register
          </StyledNavLink>
        </nav>
      </header>

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
