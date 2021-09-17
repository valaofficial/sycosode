import './Home.css';
import Sycosode from "../../includes/img/sycosodeemblem.png";

function Home() {
  return (
    <div>
      <Intro/>
      <OurWorkSection/>
    </div>
  );
}

export default Home;

function Intro() {
  return (
    <section id="introSection">
        <div className="overlay">
           <div className="BrandLogo">
            <div className="introImgDiv">
              <img src={Sycosode} alt="Sycosode Logo" className="introImg"/>
            </div>
           </div>

           <div className="introInfo">
              <h1>
                A company built <br/>
                for your growth.
              </h1>
              <p>
                We can help you create & communicate values in a perfectly <br/> relatable and compelling manner that speaksto the heart <br/> of your target
              </p>
              <div className="selectBtn">
                <a href="#">Select Service</a>
              </div>
           </div>
        </div>
    </section>
  );
}

function OurWorkSection() {
  return (
    <section id="ourWorkSection">
        <div className="ourWorkSectionTxt">
          <h1>Our <span>Works</span></h1>
          <p>
            Take a look at some of our<br/>
            previous works
          </p>
        </div>

        <div className="ourWorkCardDiv">
          <div className="ourWorkCard"></div>

          <div className="ourWorkCard"></div>

          <div className="ourWorkCard"></div>

          <div className="ourWorkCard"></div>

          <div className="ourWorkCard"></div>

          <div className="ourWorkCard"></div>
        </div>
        
    </section>
  );
}