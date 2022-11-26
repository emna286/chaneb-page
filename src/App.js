import logo from './logo.svg';
import './App.css';
import Address from './Address';
import ProfilePhoto from './ProfilePhoto';
import chaneb from './photos/chaneb4.jpg';
import FullName from './FullName';
import { useEffect, useState } from 'react';





function App() {
  const [showComponent, setShowComponent]=useState(false);
  useEffect(()=>{
    setInterval(()=>{
    setShowComponent(!showComponent);
  },4000);
},[]);
  return (
    

    <div className="App" >
      <section id="sect">
      <Address/>
      {showComponent && <FullName/>}
      </section>
      <ProfilePhoto name="chaneb" photo={chaneb}/>
      
    </div>
    
  );
}

export default App;
