
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rootlayout from './layouts/Rootlayout';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import ContactLayout from './layouts/ContactLayout';
import Mail from './screens/Mail';
import Phone from './screens/Phone';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Rootlayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<ContactLayout/>}>
              <Route path='mail' element={<Mail/>}/>
              <Route path='phone' element={<Phone/>}/>
          </Route>
      </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
