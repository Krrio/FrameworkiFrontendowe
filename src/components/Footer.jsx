import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <Container>
        <img
          src="/logos/logo.png" 
          alt="University Logo"
          width="100"
          className="mb-2"
        />
        <p>Created by Kacper Jóźwik| Email: kacper.jozwik@microsoft.wsei.edu.pl</p>
      </Container>
    </footer>
  );
};

export default Footer;
