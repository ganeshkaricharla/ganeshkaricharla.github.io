import "./Home.css";
import React from 'react';
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
// import Modal from '../Modal/Modal'
// import Loading from '../Loading/Loading';
import homegif from '../../assets/home.jpg';



class Home extends React.Component {

    state = {joke1:""};
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({ showModal: true });
        // }, 1400);
        fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Christmas?type=single").then((res) =>
        {if(!res.ok){
            this.setState({
                joke1: "",
            });
            throw new Error(`HTTP error! status: ${res.status}`);
            
        }
        else 
        {
            return res.json();
        }
    })
        .then((json) => {
            this.setState({
                joke1: json.joke,
            });
        }).catch(e => {
            console.log('There has been a problem with your fetch operation: ' + e.message);
          });

    }

    closeModal = () => {
        this.setState({ showModal: false });
    };
    
    render() {
        if(this.state.joke1==="")
        {
            return(
                <div className='spinner'>
            <div className='rect1'></div>
            <div className='rect2'></div>
            <div className='rect3'></div>
            <div className='rect4'></div>
            <div className='rect5'></div>
        </div>
            )
        }
        return (

            <div className="home-container">
                {/* {this.state.showModal && <Modal closeModal={this.closeModal} />} */}
                <div className="heading">

                    <h1>Vighnesh Kanakala
                        </h1>
                    
                    <h4>
                        <Typewriter
                            options={{
                                strings: ['Cyber Security Enthusiast', 'Python Developer', 'Cloud Operations Intern @ Zscaler'],
                                autoStart: true,
                                loop: true,
                                delay: 30,
                                deleteSpeed: 30,
                            }}
                        />
                    </h4>
                    
                </div>
                
                <div className="column">
                    
                <div className="image">
        <img src={homegif} alt="Error Loading avatar" className="profpic"/>
    </div>
    <center>
                    <div className="head-btns">
                        <Link to="/about" className="btn btn-white">
                            <p className="btn-text">Know more about me</p>

                        </Link>
                        <Link to="/contacts" className="btn btn-trans">
                            <p className="btn-text">Contact me</p>

                        </Link>

                    </div>
                </center>
                    <div className="image2">
                        <article className="article">
                        <blockquote>
                        <p className="headings">Joke Of the Day</p>
                            <p>{this.state.joke1}</p>
                        </blockquote>
                        </article>
                        {/* <h1 style={{color:"rgb(207, 207, 207)"}}>Joke of the day</h1>
                            <h1>{this.state.joke1+" ...PS:Ignore if not Funny :-)"}</h1> */}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Home;
