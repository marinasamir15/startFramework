import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import MasterLayout from './components/MasterLayout/MasterLayout';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

const router=createBrowserRouter([{
  path:'',element:<MasterLayout/>,children:[
    {path:'',element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<NotFound/>}
  ]
}])
function App() {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
