import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ApiContext } from '../../api/context/ApiContext';
import { useContext } from 'react';
import { ApiService } from '../../api/api';

interface CustomNavbarProps {
  username: string | null;
}

function CustomNavbar({ username }: CustomNavbarProps) {
  const api: ApiService = useContext(ApiContext);
  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    api.logout();
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Notes Agg</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={username} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
