import {Navbar, Container} from 'react-bootstrap';
import {globalName} from '../pages/Login';

function NavBar(props){
    console.log(globalName);
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Hello, {globalName}
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <div className='Profile-icon'>
                <div className='Profile-icon-text'>
                    {globalName.charAt(0)}
                </div>
            </div>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;