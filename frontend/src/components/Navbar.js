import {Link} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useState} from 'react';

import SideBar from './SideBar';



import {FaBars} from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";


const Navbar =() =>{ 

    const [isMenuExtend, setIsMenuExtend] = useState(false)

    const{user} = useAuthContext();

    const handleClick = () =>{
        setIsMenuExtend(!isMenuExtend);
    }
    
   const handleSideBar = () =>{
    setIsMenuExtend(!isMenuExtend);
   }
    return (
        <header>
            <div className="container">
               <a href="#" className='mobileMenu-toggle' onClick={handleClick}>
               <FaBars />
               </a>
                <nav className={`navPages  ${isMenuExtend? 'menu-extend': ''}`}>
                    <div className='closeButton' onClick={handleSideBar}>
                        <IoIosClose />
                    </div>
                    {isMenuExtend && 
                      <SideBar onClose={handleSideBar}/>
                    }
                    {!isMenuExtend && 
                      <>
                        <div><Link to="/about">ABOUT US</Link></div>
                        <div><Link to="/contact">CONTACT US</Link></div>
                      </>
                    }
                   
                  
                </nav>
                <Link to="/"><h2 className="logo">CERAMIX</h2></Link>
                <nav className='navUser'>
                   {user && (
                    <>
                    <div><Link to="/myaccount" className='btn'>{user.username.split(" ")[0].toUpperCase() }</Link></div>
                    <div><Link to="/mycart">YOUR CART</Link></div>
                    </>
                   )}

                   {!user && (
                    <>
                    <div><Link to="/myaccount">MY ACCOUNT</Link></div>
                    <div><Link to="/mycart">MY CART</Link></div>
                    </>
                   )}
                   
                </nav>
            </div>
        </header>
    )
}

export default Navbar;