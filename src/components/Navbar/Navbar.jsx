import logo from "../../images/LogoND.png";
import "./Navbar.css";

export function Navbar() {

    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i className="bi bi-search"> {/*tag de icone*/}
                    </i>
                    <input type="text" />

                </div>

                <img src={logo} alt="Logo News Daily" />

                <button>Entrar</button>
            </nav>
        </>
    )
}