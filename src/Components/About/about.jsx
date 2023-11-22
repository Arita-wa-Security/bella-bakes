import "../About/about.css"
import Footer from "../Home/footer";
function About(){
    return (
      <>
        <div className="container-fluid">
          <div className="container-fluid" id="heading">
            <h1>Our Products</h1>
          </div>
          <div className="container">
            <div class="card">
              <img
                class="card-img-top"
                src="img_avatar1.png"
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">Some example text.</p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default About