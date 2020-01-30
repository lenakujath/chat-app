import React from 'react'
import Contact from './Contact'


const List = [
    {
        name : 'Tom',
        avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
        isLoggedIn : false
    },
    {
        name : 'Jeremy',
        avatar: 'https://randomuser.me/api/portraits/men/70.jpg',
        isLoggedIn : false
    },
    {
        name : 'Paula',
        avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
        isLoggedIn : true
    },
    {
        name : 'Sarah',
        avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
        isLoggedIn : false
    },
    
    {
        name : 'Matt',
        avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
        isLoggedIn : true
    }
];

const ContactList = () => (
    <div>
    {List.map(
        
        
      (item,i) =>  <Contact key={i} name={item.name} avatar={item.avatar} isLoggedIn={item.isLoggedIn} />
        
        )
        }
    </div>
    )

    
    export default ContactList;