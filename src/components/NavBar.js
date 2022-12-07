import {Navbar, Container} from 'react-bootstrap';
import {useContext} from "react";
import { NameContext } from '../App';


//Nav bar at top of page, uses react-bootstrap, reads global context for name
function NavBar(props){
    const {name} = useContext(NameContext);
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Hello, {name}
          </Navbar.Brand>
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