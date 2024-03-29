import React, { useState } from 'react'
import "./Nav.css";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogin } from "react-icons/ai";

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <a href="/"><img src="/logo.png" width={50} height={50} alt="" /></a>
      <ul className="links">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/tournaments">Tournaments</a>
        </li>
        <li>
          <a href="/blog">Blogs</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
      </ul>
      <div animate={isOpen ? "open" : "closed"} variants={variants} className="navicon">
        <motion.a whileHover={{ scale: 1.2 }} onClick={() => setIsOpen((isOpen) => !isOpen)} href="#" className="profile">
          <CgProfile />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="login">
          <AiOutlineLogin />
        </motion.a>
      </div>
      {/* <div className={styles.buttons}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          Login
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          Signup
        </motion.button>
      </div> */}
    </nav>
  )
}

export default Nav