
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rootlayout from './layouts/Rootlayout';
import Home from './screens/Home';
import About from './screens/About';
import ContactLayout from './layouts/ContactLayout';
import Mail from './screens/Mail';
import Phone from './screens/Phone';
import PageNotFound from './screens/PageNotFound';
import CareersLayout from './layouts/CareersLayout';
import Careers from './screens/Careers';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Rootlayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<ContactLayout/>}>
              <Route path='mail' element={<Mail/>}/>
              <Route path='phone' element={<Phone/>}/>
          </Route>
          <Route path='careers' element={<CareersLayout/>}>
            <Route index element={<Careers/>}/>
          </Route>
          <Route path='*' element={<PageNotFound/>}/>
      </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
