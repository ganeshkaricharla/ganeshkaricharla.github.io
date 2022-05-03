import './SingleEducation.css';

function SingleEducation({ data }) {
    return (
        <div className="singleeducation-container">
            <div className="singleeducation-top">
                <div className="singleeducation-college">
                    <div
                        className="singleeducation-logo"
                        style={{
                            backgroundImage: `url(${data.logo})`,
                        }}
                    ></div>
                    <div className="singleeducation-name-time">
                        <span className="singleeducation-name">{data.school}</span>
                        <span className="singleeducation-time">{data.time}</span>
                    </div>
                </div>
            </div>
            <div className="singleeducation-middle">
                <div className="singleeducation-description">{data.description}</div>
            </div>
        </div>
    );
}

export default SingleEducation;
