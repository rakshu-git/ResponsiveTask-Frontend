import '../style/style.css'
import page1 from '../images/Page-1.png'
const Nav = () =>{

    return(
        <nav className="navigation">
            <ul>
                <li><img alt="logo" src={page1}/></li>
                <li>About Us</li>
                <li>Our Products</li>
                <li>Contact Us</li>
            </ul>
            <ul>
                <li>Sign up</li>
                <li>Login</li>
                <li id="nav-button">Request a Demo</li>
                <li>Diplomats</li>
            </ul>
        </nav>
    )
}
export default Nav