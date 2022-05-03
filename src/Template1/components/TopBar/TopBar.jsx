import './TopBar.css';

function TopBar({ show, showSideBar }) {
    return (
        <div className="topbar-container">
            <h1 className="topbar-content">SWAMY</h1>
            <div className="topbar-burger" onClick={showSideBar}>
                {show ? (
                    <i className="fa-solid fa-forward"></i>
                ) : (
                    <i className="fa-solid fa-backward"></i>
                )}
            </div>
        </div>
    );
}

export default TopBar;
