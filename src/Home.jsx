import './Home.css'
import homeImg from '/image-hero-desktop.png'
import homeImg2 from '/image-hero-mobile.png'
import databiz from '/client-databiz.svg'
import audiophile from '/client-audiophile.svg'
import meet from '/client-meet.svg'
import maker from '/client-maker.svg'

const Home = () => {
    return (
        <div className="original-container">
            <div className="home-container">
            <div className="left-side">
            <div className="up">
            <div>
            <h1 className='heading'>
                Make <br />
            remote work
            </h1>
            </div>
            <div>
                Get your team in sync, no matter your location. <br />
                Streamline processes, create team rituals, and <br />
                watch productivity soar.
            </div>
            <div className="btn">
                Learn more
            </div>
            </div>

            <div className="sponsors">
                <img src={databiz} alt="" />
                <img src={audiophile} alt="" />
                <img src={meet} alt="" />
                <img src={maker} alt="" />
            </div>
            </div>
            <div className="right-side">
                <img src={homeImg} alt="" />
            </div>
        </div>

        <div className="second-home-container">
            <div className="right-side">
                <img src={homeImg2} alt="" />
            </div>

        <div className="left-side">
            <div className="up">
            <div>
            <h1 className='heading'>
                Make remote work
            </h1>
            </div>
            <div>
                Get your team in sync, no matter your location. <br />
                Streamline processes, create team rituals, and <br />
                watch productivity soar.
            </div>
            <div className="btn">
                Learn more
            </div>
            </div>

            <div className="sponsors">
                <img src={databiz} alt="" />
                <img src={audiophile} alt="" />
                <img src={meet} alt="" />
                <img src={maker} alt="" />
            </div>
            </div>
        </div>
        </div>
    );
}
 
export default Home;