import React from 'react'
import Logo from '../assets/logo.png'
const Header = ()=>{
     return(
            <div>
                    <div className='flex mx-8 w-auto'> 
                
                        <img className='w-20 h-20' src={Logo} alt="logo" />
                        <p className='mt-6'>Keeper</p>

                        <ul className='justify-end'>
                        <li>Sign up</li>
                        <li>Log in</li>
                    </ul>
                    </div>
                  
            </div>
           )
}
export default Header;