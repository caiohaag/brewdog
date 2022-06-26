import './pag404.scss';
import { Link } from "react-router-dom";

function Pag404() {

    return ( 
        <section className="page__404">
            <Link to="/">
                <img src="brewdog-logo.png" alt="BrewDog" className="brewdog__logo" />
            </Link>
            <span className='error__msg'>404 Error - Page not found</span>            
        </section>
     );
}

export default Pag404;