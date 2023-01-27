import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Pages/Routes/Routes';

function App() {
  return (
    <div className="App">
       <RouterProvider router={routes} ></RouterProvider>
    </div>
  );
}

export default App;
