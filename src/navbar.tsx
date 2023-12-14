import Logo from '../assets/Tarazu1.svg';
import Logo1 from '../assets/Tarazu2.svg';
function Navbar(){
    return<nav className="nav">
        <a href="/" className="site-title">
            <div>
                <img src={Logo1} alt="Logo1" />
            </div><div>
                <img src={Logo} alt="Logo" />
            </div>
        </a>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contactus">Contact Us</a></li>
        </ul>
    </nav>
}
export default Navbar;
