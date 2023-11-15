// import react from 'react'
import "../Home/home.css"
import Cake from "../assets/British-Bakels.png"
import Cookies from "../assets/cookies.jpg"
import Footer from "./footer";
import Contact from "../Contact/contact.jsx"

function Home() {

    return (
      <>
        <div classNameName="container-fluid" id="home">
          <div id="paragraph">
            <h4>Welcome to Bella Bakes</h4>
            <h3>
              Your home of <br></br>
              <span classNameName="wavify">
                <h1>
                  <span>V</span>
                  <span>e</span>
                  <span>g</span>
                  <span>a</span>
                  <span>n</span>
                  <span> </span>
                  <span>B</span>
                  <span>a</span>
                  <span>k</span>
                  <span>i</span>
                  <span>n</span>
                  <span>g</span>
                </h1>
              </span>
            </h3>
          </div>
          <div id="veg-cake">
            <img src={Cake} alt="bunnies" />
          </div>
        </div>
        <div className="container-fluid" id="propaganda">
          <div id="veg-cookie">
            <img src={Cookies} alt="cookies" />
          </div>
          <div id="write-up">
            <p>
              Welcome to Bella Bakes, your delightful escape into the world of
              guilt-free indulgence. We are a passionate team of bakers and food
              enthusiasts who believe that scrumptious treats can be both kind
              to your taste buds and the planet. Nestled in the heart of
              Ndenderu, our vegan bakery is a labor of love, where we craft
              mouthwatering confections that not only satisfy your cravings but
              also celebrate a compassionate, sustainable lifestyle.
            </p>
          </div>
        </div>
        <Contact />
        <Footer />
      </>
    );
}

export default Home