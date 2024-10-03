import { Link } from "react-router-dom"
import "../Styles/Headerr.css"
export default function Header() {
    return (
        <div>
            <nav className="nav">
            <svg id="logo-38" width="6%" height="6%" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg>                <div>
                    <ul id="navbar">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/Auth">Authentification</Link></li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}