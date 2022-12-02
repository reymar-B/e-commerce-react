import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="bg-slate-100 flex justify-center mt-16">
            <div className="container md:flex md:justify-between py-10 text-center font-semibold text-sm">
                <div className="md:w-3/12">
                    <p>Follow us</p>
                    <div>
                        <FontAwesomeIcon icon={faBars}  className='text-l p-2'/>
                        <FontAwesomeIcon icon={faBars}  className='text-l p-2'/>
                        <FontAwesomeIcon icon={faBars}  className='text-l p-2'/>
                        <FontAwesomeIcon icon={faBars}  className='text-l p-2'/>
                        <FontAwesomeIcon icon={faBars}  className='text-l p-2'/>
                    </div>
                </div>
                <div className="md:w-3/12">
                    <p>Contact Us</p>
                    <p>+123 456 789 </p>
                </div>
                <div className="md:w-3/12">
                    <p>Copyright My E-commerce 2022-2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;