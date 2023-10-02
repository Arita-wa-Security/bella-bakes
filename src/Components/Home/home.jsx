// import react from 'react'
import "../Home/home.css"
import Cake from "../assets/vegan-bread.png"

function Home() {

    return (
      <>
        <div className="container-fluid" id="home">
          <div id="paragraph">
            <h4>Welcome to Bella Bakes</h4>
            <h3>
              Your home of <br></br>
              <span className="wavify">
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
      </>
    );
}

export default Home