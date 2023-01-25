import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Pages/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <RouterProvider router={router} >
        <Toaster></Toaster>
      </RouterProvider>
    </div>
  );
}

export default App;
