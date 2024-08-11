import classes from "./Navbar.module.css";
import { AppKitProvider } from "../components/AppKitProv";
const Navbar = () => {

    return(
        <div className={classes.navbar}>
            <button>Inicio</button> <button>Partidos</button> <button>Contactanos</button> <AppKitProvider className="wallet"/>
        </div>
    );
}

export default Navbar;