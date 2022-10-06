const Button = ({children}) => {
    return (
        <button className="bg-black m-1 px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform rounded hover:bg-lightBlack dark:hover:bg-lightBlack focus:bg-lightBlack dark:focus:bg-lightBlack focus:outline-none flex items-center justify-center">
            {children}
        </button>
    );
};

export default Button;