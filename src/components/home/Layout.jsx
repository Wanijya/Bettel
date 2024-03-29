import React from 'react'
import styles from "./layout.module.css";
import Nav from '../nav/Nav';
import Home from './Home';
import Tournament from '../tournaments/Tournament';
import Upcoming from '../upcoming/Upcoming';
import Community from '../community/Community';

const Layout = () => {
    
  return (
    <div className={styles.main}>
        <Nav />
        <Home />
        <Tournament />
        <Upcoming />
        <Community />
    </div>
  )
}

export default Layout