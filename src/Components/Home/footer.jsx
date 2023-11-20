import "../Home/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer(){

    return (
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row" id="footer-flex">
              <div class="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 item text">
                <h3>Company Name</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div class="col item social">
                <a href="#">
                  {/* <i class="icon ion-social-facebook"></i> */}
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                </a>
                <a href="#">
                  {/* <i class="icon ion-social-twitter"></i> */}
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                </a>
                <a href="#">
                  {/* <i class="icon ion-social-snapchat"></i> */}
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                </a>
                <a href="#">
                  {/* <i class="icon ion-social-instagram"></i> */}
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                </a>
              </div>
            </div>
            <p class="copyright">Company Name © 2018</p>
          </div>
        </footer>
      </div>
    );
}

export default Footer