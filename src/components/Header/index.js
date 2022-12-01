import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import '../../index.css';
import cart from '../../assets/cart.svg';

const Header = () => {
    const [btnMenu, setBtnMenu] = useState('drop-down-remove');
    
    function dropDown() {

        if (btnMenu === 'drop-down-remove') {
            setBtnMenu(style => style = 'drop-down-styling');
        } else {
            setBtnMenu(style => style = 'drop-down-remove');
        }

    }

    return ( 
        <div className='bg-slate-100 h-custom-90px flex items-center'>
            {/* Mobile display */}
            <div className='container px-1 sm:hidden'>
                <div className='flex items-end justify-between relative'>
                    <h1 className='text-xl font-extrabold'>Easy Shop</h1>
                    <button onClick={ dropDown }>
                        <FontAwesomeIcon icon={faBars}  className='text-xl'/>
                    </button>
                    <div className={`text-red-500 absolute top-7 right-0 w-32 text-center bg-gray-100 ${btnMenu}`}>
                        <h2>Cart</h2>
                        <h2>Login</h2>
                    </div>
                </div>
                <div className=''>
                    <form className='flex'>
                        <span className='flex items-center justify-center bg-red-400 w-14  rounded-l'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='rotate-90 text-xl text-white'/>
                        </span>
                        <input type='text' placeholder='Search....' className='w-full leading-10 text-base rounded-r outline-none px-2' />
                    </form>
                </div>
            </div>
            {/* tablet and larger screen display */}
            <div className='container hidden md:flex items-end mx-auto px-4'>
                <div className='text-xl font-extrabold flex-none w-32'>
                    <h1>Easy Shop</h1>
                </div>
                <div className='w-3/5 mx-auto'>
                    <form className='flex'>
                        <span className='flex items-center justify-center bg-red-400 w-14  rounded-l'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='rotate-90 text-xl text-white'/>
                        </span>
                        <input type='text' placeholder='Search....' className='w-full leading-10 text-base rounded-r outline-none px-2'/>
                    </form>
                </div>
                <div className='relative flex justify-center w-28'>
                    <img src={cart} alt='cart icon' />
                    <span className='order-qty'>10</span>
                </div>
                <div className='font-bold flex w-32 justify-center'>
                    <h2>Login</h2>
                </div>
            </div>
        </div> );
}

export default Header;