
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { router } from './Shere/Route/Route';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'

function App() {
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    </div>
  );
}

export default App;
