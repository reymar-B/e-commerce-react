import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import cart from '../../assets/cart.svg';

const Header = () => {
    return ( 
        <div className='bg-slate-100'>
            <div className='container flex items-center mx-auto px-4 h-custom-90px'>
                <div className='text-xl font-extrabold flex-none w-32'>
                    <h1>Easy Shop</h1>
                </div>
                <div className='flex-auto'>
                    <form className='flex w-4/5 mx-auto'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-red-500 rotate-90'/>
                        <input type='text' placeholder='Type here' className='w-full h-32' />
                    </form>
                </div>
                <div className='relative flex justify-center w-28'>
                    <img src={ cart } alt='cart icon' />
                    <span className='order-qty'>10</span>
                </div>
                <div className='font-bold flex w-32 justify-center'>
                    <h2>Login</h2>
                </div>
            </div>
        </div> );
}

export default Header;