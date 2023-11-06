import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './HomePage.module.css';
import Image from 'images/phone-book.png';
const HomePage = () => {
  return (
    <>
      <NavLink to={'/login'}>
        <h1 className={css.header}>
          Home Page <br />
          Phone Book
        </h1>
        <img
          className={css.phoneBook}
          src={Image}
          alt="phonebook"
          width={200}
        />
      </NavLink>
    </>
  );
};

export default HomePage;
