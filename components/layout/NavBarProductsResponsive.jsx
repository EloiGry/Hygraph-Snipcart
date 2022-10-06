import Link from "next/link";

const NavBarProductsResponsive = ({navBar}) => {
    return (
        <>
        <p className="text-lg font-semibold cursor-pointer"> Produits </p>
        <div className="flex justify-evenly">
        <div>
            <h3 className="font-bold underline p-2"> Catégories</h3>
            {navBar.categories.map(e => {
                return (
                    <div className="flex flex-col justify-start items-center p-1 hover:text-blue" key={e.id}>
                      <Link href={`/categories/${e.slug}`}><a>{e.name}</a></Link>  
                    </div>
                )
            })}
        </div>
        <div>
            <h3 className="font-bold underline p-2"> Marques </h3>
            {navBar.brands.map(e => {
                return (
                    <div className="flex flex-col justify-start items-center p-1 hover:text-blue" key={e.id}>
                      <Link href={`/brands/${e.slug}`}><a>{e.name}</a></Link>  
                    </div>
                )
            })}
        </div>
        </div>
        </>
    );
};

export default NavBarProductsResponsive;