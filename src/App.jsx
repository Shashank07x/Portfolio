
import './App.css'
import { Outlet } from 'react-router-dom';
import Aside from './components/Aside';
import Nabvar from './components/Nabvar';

function App() {


  return (
    <>
      <Aside/>
      <div className="main-content">
        <Nabvar/>
        <section style={{scrollBehavior: "smooth"}}>
          <Outlet/>   
        </section>
      </div>
    </>
  )
}

export default App
