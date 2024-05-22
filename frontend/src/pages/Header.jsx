import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container-header">
            <div className="titulo-header">
                <h1>Alto Santo</h1>
            </div>
            <div className="links-header">
                <Link to='/'><span>HOME</span></Link>
                <Link to='/Create'><span>CREATE</span></Link>
                <Link to='/Read'><span>READ</span></Link>
                <Link to='/Update'><span>UPDATE</span></Link>
                <Link to='/Delete'><span>DELETE</span></Link>
            </div>
        </div>
    );
}

export default Header;
