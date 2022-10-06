
import {IoIosArrowDropright} from 'react-icons/io'
import Button from './Button';
import Link from 'next/link';
import { buildImage } from '../lib/cloudinary'

const ProductsList = ({products}) => {
    return (
        <div className={styled.grid}>
            {products?.map(product => {
                return (
                        <div className={styled.card} key={product.id}>  
                                    <img src={buildImage(product.image.public_id).toURL()} width='306px' height='250px' className='rounded-t-lg' alt='' />
                                    <div className='bg-white flex flex-col items-center justify-center rounded-b-lg'> 
                                    <h4 className={styled.bold}> {product.name} </h4>
                                    <h5 className={styled.s_bold}> {product.category} </h5>
                                    <span> {product.price.toFixed(2)}€ </span>
                            <Button ><Link href={`/products/${product.slug}`}><a className='flex items-center justify-center'><p> Découvrir </p> <IoIosArrowDropright size={25}/></a></Link></Button>
                            </div>
                        </div>
                    
                )
            })}
        </div>
    );
};

const styled = {
    grid : 'flex flex-wrap justify-center items-center w-full px-[72px]',
    card : 'item w-[306px] text-black m-8',
    bold : 'font-bold',
    s_bold: 'font-semibold'
}

export default ProductsList;