import {HiShoppingCart} from 'react-icons/hi'
import { buildImage } from '../lib/cloudinary'

const CardProduct = ({product}) => {
    return (
        <div className="flex flex-col md:flex-row justify-around items-start pt-[110px] pb-[40px] px-[72px]">
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-2" key={product.id}>
                <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: `url(${buildImage(product.image.public_id).toURL()})`}}></div>
                <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-black">
                    <h3 className="py-2 font-bold tracking-wide text-center text-black uppercase dark:text-black">{product.name}</h3>

                    <div className="flex items-center px-3 py-2 bg-gray dark:bg-gray-700">
                        <span className="font-bold text-black dark:text-gray-200">{product.price.toFixed(2)}€</span>
                            <button 
                                className="snipcart-add-item bg-black m-1 px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform rounded hover:bg-lightBlack focus:bg-lightBlack focus:outline-none flex items-center justify-center"
                                data-item-id={product.id}
                                data-item-price={product.price}
                                data-item-description={product.description.text}
                                data-item-image={product.image.url}
                                data-item-name={product.name}
                                data-item-url={`/products/${product.slug}`}>
                            Ajouter au panier 
                            <HiShoppingCart size={15}/>
                            </button>
                        
                    </div>
                </div>
            </div>  
            <div className="mx-2 flex flex-col md:h-64 justify-between">
                <div>
                    <p className="font-bold mb-2"> Détails: </p>
                    <p> {product.description.text} </p>
                </div>
                <button 
                        className="snipcart-add-item bg-black m-1 px-2 py-1 text-sm font-semibold text-white uppercase transition-colors duration-300 transform rounded hover:border-2 hover:border-white hover:bg-lightBlack focus:bg-lightBlack focus:border-2 focus:border-white flex items-center justify-center"
                        data-item-id={product.id}
                        data-item-price={product.price}
                        data-item-description={product.description.text}
                        data-item-image={product.image.url}
                        data-item-name={product.name}
                        data-item-url={`/products/${product.slug}`}>
                        Ajouter au panier 
                        <HiShoppingCart size={25}/>
                </button>
            </div>
        </div>
    );
};

export default CardProduct;

