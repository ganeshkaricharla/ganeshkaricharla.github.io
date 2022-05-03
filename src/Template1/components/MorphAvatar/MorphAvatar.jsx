import './MorphAvatar.css';

import MyPic from './../../assets/myimg.jpeg';

function MorphAvatar() {
    return (
        <div
            className="home-avatar-image"
            style={{
                backgroundImage: `url("${MyPic}")`,
            }}
        ></div>
    );
}

export default MorphAvatar;
