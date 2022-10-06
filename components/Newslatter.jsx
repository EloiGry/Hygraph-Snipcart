const Newslatter = ({image}) => {
    return (
        <div className='relative px-8 md:px-[72px] bg-white'>
            <img src={image} className='hidden md:inline-flex'/>
            <div className='flex flex-col items-center justify-center md:absolute md:top-16 md:right-20'>
                <h5 className='uppercase text-black font-bold text-sm md:text-md lg:text-lg md:mb-4 mb-2'> 
                    INSCRIS-TOI POUR RECEVOIR TOUTES LES OFFRES ET NOUVEAUTÉS !
                </h5>
                <div className='flex md:mt-4 my-2'> 
                    <input placeholder='Email...' type='email' className='rounded-l-full border border-black h-[25px] md:h-[30px] px-2 py-1 text-black'/>
                    <button className='bg-black border border-black h-[25px] md:h-[30px] px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform hover:bg-lightBlack dark:hover:bg-lightBlack focus:bg-lightBlack dark:focus:bg-lightBlack focus:outline-none flex items-center justify-center rounded-r-full'> Rejoins nous</button>
                </div>
            </div>

        </div>
    );
};

export default Newslatter;