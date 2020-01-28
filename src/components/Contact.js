import React from 'react';
import './Contact.css'

function Contact(props) {

    return (
    
      <figure className="Contact">
     <img className="avatar" src={props.avatar}></img>
      <figcaption>
      <p className="name"> {props.name}
      </p>
     <div className="status"> 
     {props.isLoggedIn ? <div><div className="status-online"></div> <span className="status-text">Online</span>
     </div>
     :
     <div> <div className="status-offline"></div>
     <span className="status-text">Offline</span>
     </div>
     }
     </div> 
       </figcaption>
        </figure>     
    );
  }

export default Contact;
