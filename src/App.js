import './App.css';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';


const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openSideBar = () =>{
    setSidebarOpen(true);
  }

  const closeSideBar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSideBar}/>
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSideBar={closeSideBar}/>
    </div>
  );
}

export default App;
