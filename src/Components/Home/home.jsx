// import react from 'react'
import "../Home/home.css"
import Cake from "../assets/vegan-bread.png"
import Cookies from "../assets/cookies.jpg"

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
        <div id="contact-form">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3" id="colll">
                <div className="well well-sm" id="well">
                  <form className="form-horizontal" action="" method="post">
                    <fieldset>
                      <legend className="text-center">Contact us</legend>

                      <div className="form-group">
                        <label className="col-md-3 control-label" for="name">
                          Name
                        </label>
                        <div className="col-md-9">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="col-md-3 control-label" for="email">
                          Your E-mail
                        </label>
                        <div className="col-md-9">
                          <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Your email"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="col-md-3 control-label" for="message">
                          Your message
                        </label>
                        <div className="col-md-9">
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Please enter your message here..."
                            rows="5"
                          ></textarea>
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="col-md-12 text-right">
                          <button type="submit" className="btn btn-primary btn-lg">
                            Submit
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home