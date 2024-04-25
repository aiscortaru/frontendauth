import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaSignInAlt, FaUserAstronaut, FaSignOutAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../slices/userApiSlice.js';
import { clearCredentials } from '../../slices/authSlice.js';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(clearCredentials());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  console.log(userInfo)

  return (
    <header>
      <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>ING Auth</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>

              {
                userInfo ? (
                  <>
                    <LinkContainer to='/profile'>
                      <Nav.Link>
                        <Button variant="link"><FaUserAstronaut /> Profile</Button>
                      </Nav.Link>
                    </LinkContainer>
                    { }
                    <Button variant="link" onClick={logoutHandler}><FaSignOutAlt /> Sign out</Button>
                  </>
                ) : (
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      {
                        !window.location.href.includes('login') ?
                          <Button variant="link" onClick={logoutHandler}><FaSignInAlt /> Sign in</Button>
                          : null
                      }
                    </Nav.Link>
                  </LinkContainer>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;