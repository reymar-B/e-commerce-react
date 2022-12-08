import foodpic_2 from '../../assets/foodpic_2.jpg';
import ImageLoader from '../ImageLoader';


const Banner = () => {

    return (
        <div className='p-2 relative lg:h-[26rem] h-[18rem]'>
            <ImageLoader imgSource={ foodpic_2 } altName={ 'food picture' }/> 
            <div className='text-base text-red-500 absolute'> X X X X X </div>
        </div>
    );
}

export default Banner;