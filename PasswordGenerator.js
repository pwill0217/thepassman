import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faCog, faCopy } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar'; // Import the Navbar component

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  const generatePassword = () => {
    let charset = '';
    let newPassword = '';

    if (useSymbols) charset += '!@#$%^&*()';
    if (useNumbers) charset += '0123456789';
    if (useLowerCase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useUpperCase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setSuccessMessage('Password copied!');
    setTimeout(() => setSuccessMessage(''), 2000);
  };

  return (
    <Container className="mt-5" style={{ backgroundColor: '#80391e', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px 0px grey' }}>
         <>
      <Navbar /> {/* Use the Navbar component */}
    
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="text-center" style={{ color: '#eab676' }}>The_Pass_Man</h1>
          <h3 className="text-center" style={{ color: '#eab676' }}>Random Password Generator</h3>
          <Form>
            <Form.Group as={Row} controlId="passwordLength">
              <Form.Label column sm="4" style={{ color: '#eab676' }}>
                Password Length:
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="number"
                  min="8"
                  max="32"
                  value={passwordLength}
                  onChange={(e) => setPasswordLength(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="passwordOptions">
              <Form.Label column sm="4" style={{ color: '#eab676' }}>
                Password Options:
              </Form.Label>
              <Col sm="8">
                <Form.Check
                  type="checkbox"
                  label="Symbols"
                  checked={useSymbols}
                  onChange={() => setUseSymbols(!useSymbols)}
                  style={{ color: '#eab676' }}
                />
                <Form.Check
                  type="checkbox"
                  label="Numbers"
                  checked={useNumbers}
                  onChange={() => setUseNumbers(!useNumbers)}
                  style={{ color: '#eab676' }}
                />
                <Form.Check
                  type="checkbox"
                  label="Lowercase"
                  checked={useLowerCase}
                  onChange={() => setUseLowerCase(!useLowerCase)}
                  style={{ color: '#eab676' }}
                />
                <Form.Check
                  type="checkbox"
                  label="Uppercase"
                  checked={useUpperCase}
                  onChange={() => setUseUpperCase(!useUpperCase)}
                  style={{ color: '#eab676' }}
                />
              </Col>
            </Form.Group>

            <Button variant="primary" onClick={generatePassword} style={{ backgroundColor: '#eab676', border: 'none' }}>
              <FontAwesomeIcon icon={faCog} /> Generate Password
            </Button>
          </Form>

          {password && (
            <Row className="mt-3">
              <Col>
                <Alert variant="success" style={{ backgroundColor: '#eab676', color: '#80391e' }}>
                  <span className="mr-2">{password}</span>
                  <Button variant="outline-primary" onClick={copyToClipboard} style={{ color: '#eab676' }}>
                    <FontAwesomeIcon icon={faCopy} /> Copy
                  </Button>
                </Alert>
              </Col>
            </Row>
          )}

          {successMessage && (
            <p className="text-center" style={{ color: '#eab676' }}>{successMessage}</p>
          )}
        </Col>
      </Row>
      </>
    </Container>
  );
};

export default PasswordGenerator;
