import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar'; // Import the Navbar component

const PasswordManagerApp = () => {
  const [passwords, setPasswords] = useState([]);
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCopyPassword = (pass) => {
    navigator.clipboard.writeText(pass);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
  };

  const handleDeletePassword = (website) => {
    const updatedPasswords = passwords.filter((e) => e.website !== website);
    setPasswords(updatedPasswords);
    alert(`Successfully deleted ${website}'s password`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { website, username, password } = e.target;

    // Check if all fields are filled
    if (!website.value || !username.value || !password.value) {
      alert('Please fill in all fields.');
      return;
    }

    // If editing, replace the old entry with the updated one
    if (editing && editIndex !== null) {
      const updatedPasswords = [...passwords];
      updatedPasswords[editIndex] = {
        website: website.value,
        username: username.value,
        password: password.value,
      };
      setPasswords(updatedPasswords);
      setEditing(false);
      setEditIndex(null);
      setWebsite('');
      setUsername('');
      setPassword('');
    } else {
      // If adding a new password, create a new entry and add it to the passwords array
      const newPassword = {
        website: website.value,
        username: username.value,
        password: password.value,
      };
      setPasswords([...passwords, newPassword]);
      setWebsite('');
      setUsername('');
      setPassword('');
    }
  };

  const handleEditPassword = (index) => {
    setEditing(true);
    setEditIndex(index);
    setWebsite(passwords[index].website);
    setUsername(passwords[index].username);
    setPassword(passwords[index].password);
  };
  

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderPasswordListEntries = () => {
    return passwords.map((item, index) => (
      <tr key={index}>
        <td>{item.website}</td>
        <td>{item.username}</td>
        <td>
          <span className={showPassword ? 'password-visible' : 'password-masked'}>
            {item.password}
          </span>
        </td>
        <td>
          <Button onClick={() => handleCopyPassword(item.password)} variant="info">
            <FontAwesomeIcon icon={faClipboard} />
          </Button>
          <Button onClick={() => handleEditPassword(index)} variant="warning">
            <FontAwesomeIcon icon={faEdit} />
          </Button>
          <Button onClick={() => handleDeletePassword(item.website)} variant="danger">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    
    <Container>
         <>
      <Navbar /> {/* Use the Navbar component */}
    
      <Row>
        <Col md={6} style={{ backgroundColor: '#eab676', padding: '20px', borderRadius: '8px' }}>
          <h1 style={{ color: '#80391e' }}>Password Manager</h1>
          {alertVisible && <Alert variant="success">Password copied!</Alert>}
          {passwords.length === 0 ? (
            <p className="noData" style={{ color: '#80391e' }}>No data to show.</p>
          ) : (
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Website</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{renderPasswordListEntries()}</tbody>
              </table>
            </div>
          )}
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <h2 style={{ color: '#80391e' }}>{editing ? 'Edit Password' : 'Add a Password'}</h2>
            <Form.Group className="mb-3" controlId="website">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="showPasswordCheckbox">
              <Form.Check
                type="checkbox"
                label="Show Password"
                checked={showPassword}
                onChange={handleTogglePasswordVisibility}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {editing ? 'Update Password' : 'Add Password'}
            </Button>
          </Form>
        </Col>
      </Row>
      </>
    </Container>
    
  );
};

export default PasswordManagerApp;
