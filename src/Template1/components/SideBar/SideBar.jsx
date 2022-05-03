import './SideBar.css';
import { Link } from 'react-router-dom';

function SideBar({ close }) {
    return (
        <div className="sidebar-container">
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <Link
                        to="/"
                        onClick={() => {
                            close(false);
                        }}
                    >
                        Home
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link
                        to="/about"
                        onClick={() => {
                            close(false);
                        }}
                    >
                        About
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link
                        to="/projects"
                        onClick={() => {
                            close(false);
                        }}
                    >
                        Projects
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <Link
                        to="/contact"
                        onClick={() => {
                            close(false);
                        }}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;
