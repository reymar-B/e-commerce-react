import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ImageLoader from '../ImageLoader/index.jsx';
import Banner from '../Banner.js/index.js';
import { useState } from 'react';
import { useEffect } from 'react';


const ProductGrid = () => {
    const [ products, setProducts ] = useState( [] );

    useEffect( () => {
        fetch( 'https://fakestoreapi.com/products' )
        .then( res => res.json() )
        .then( json => setProducts( json ) )
    }, [] );
    
    return ( 
        <div className="flex">
            <div className="mt-24 container mx-auto bg-slate-100">
                <Banner />
                { 
                    products.map( ( product ) => ( 
                        <div key={ product.id } className='leading-2 bg-white box-border inline-block align-top border-4 w-1/2 md:w-1/6'>
                            <a href="/">
                                <div className='h-[10rem] md:h-[8rem] lg:h-[12rem]'>
                                    <ImageLoader imgSource={ product.image } altName={ product.title } />
                                </div>
                                <p className='text-base font-medium mt-2 mx-2 truncate'>{ product.title }</p>
                                <p className='text-sm font-medium mx-2 truncate'>{ product.description }</p>
                                <p className='text-sm font-medium text-red-500 mx-2'>₱{ product.price }</p>
                                <p className='text-sm text-slate-300 mx-2 line-through'>₱100.00</p>
                                <div className='mx-2'>
                                    <FontAwesomeIcon icon={faBars}  className='text-xs pr-1'/>
                                    <FontAwesomeIcon icon={faBars}  className='text-xs pr-1'/>
                                    <FontAwesomeIcon icon={faBars}  className='text-xs pr-1'/>
                                    <FontAwesomeIcon icon={faBars}  className='text-xs pr-1'/>
                                    <FontAwesomeIcon icon={faBars}  className='text-xs pr-1'/>
                                </div>
                            </a>
                        </div>
                    ) )
                }
            </div> 
        </div> 
    );
}

export default ProductGrid;