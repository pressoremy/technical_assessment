import {Navbar, Container, Nav} from 'react-bootstrap';
import {useContext} from "react";
import { NameContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { EmailContext } from '../App';


//Nav bar at top of page, uses react-bootstrap, reads global context for name
function NavBar(props){
  const navigate = useNavigate()
    const {name} = useContext(NameContext);
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
            Hello, {name}
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('/welcome')}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate('/Dashboard')}>Dashboard</Nav.Link>
            </Nav>
        </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            {/* creates the google style icon in the right */}
            <div className='Profile-icon'>
                <div className='Profile-icon-text'>
                    {name.charAt(0)}
                </div>
            </div>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;