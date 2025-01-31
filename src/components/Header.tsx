import { Link } from 'react-router-dom';
import React, { CSSProperties } from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <Link to="/" style={styles.link}>
        <h1 style={styles.title}>My App</h1>
      </Link>
    </header>
  );
};

const styles: { [key: string]: CSSProperties } = {
  header: {
    backgroundColor: '#282c34',
    padding: '1rem',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  },
};

export default Header;