import { Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header/Header"


function App() {
  return (
    <>
      <Header />
      <Container className='my-2'>
        <ToastContainer />
        <Outlet />
      </Container>
    </>
  )
}

export default App