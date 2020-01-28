import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
    <Contact 
    avatar ='https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_1280.png'
    name = "Jenny" 
    isLoggedIn = {false}
    />
    <Contact 
    avatar ='https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png'
    name = "Tom" 
    isLoggedIn = {true}
    />
    <Contact 
    avatar ='https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png'
    name = "Sarah" 
    isLoggedIn = {false}
    />
    
    </div>
  );
}

export default App;