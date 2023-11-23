import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import logo from '../you-rpath'; // Replace with the actual path to your logo

const LandingPage = () => {
  return (
    <Container className="mt-5">
      <div className="text-center">
        <Image src={logo} alt="Logo" fluid style={{ maxWidth: '100px', marginBottom: '20px' }} />
        <h1 className="display-4" style={{ color: '#eab676' }}>
          Welcome to The_Pass_Man
        </h1>
        <p className="lead" style={{ color: '#eab676' }}>
          Your Favorite Password Generator and Password Manager.
        </p>
        <p>
          <Button variant="primary" href="/password-generator" style={{ backgroundColor: '#80391e', border: 'none' }}>
            Generate Password
          </Button>
        </p>
        <p>
          <Button variant="primary" href="/password-manager" style={{ backgroundColor: '#80391e', border: 'none' }}>
            Store Your Passwords
          </Button>
        </p>
      </div>
    </Container>
  );
};

export default LandingPage;
