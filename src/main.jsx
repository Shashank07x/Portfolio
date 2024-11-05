import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About/About.jsx';
import Resume from './pages/Resume/Resume.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Certificates from './pages/Certificates/Certificates.jsx';
import Contact from './pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <About/>
      },
      {
        path: "/resume",
        element: <Resume/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path:"/Certificates",
        element: <Certificates/>
      },
      {
        path:"/Contact",
        element: <Contact/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
