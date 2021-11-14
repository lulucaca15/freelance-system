import './App.css';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';


const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  // const openSideBar = () =>{
  //   setSidebarOpen(true);
  // }

  const closeSideBar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="container">
      <Sidebar sidebarOpen={sidebarOpen} closeSideBar={closeSideBar}/>
    </div>
  );
}

export default App;
