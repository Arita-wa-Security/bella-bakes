import "../Contact/contact.css"

function Contact(){
    return (
      <div>
        
        <form action="https://formsubmit.co/yourmail@email.com" method="POST">
        <h1>Contact us</h1>
        <div className="txt_field">
          <input type="text" name="name" id="name" required/>
          <span></span>
          <label>Full Name</label>
        </div>

        <div className="txt_field">
            <input type="text" name="email" id="email" required/>
            <span></span>
            <label>Email</label>
        </div>

        <div className="txt_field">
          <input type="text" name="message" id="message" required/>
          <span></span>
          <label>Message</label>
        </div>

        {/* <div className="pass">
            <input className="pass" type="reset" value="Reset"/>
        </div> */}

        <input type="submit" value="Submit"/>
        <input type="hidden" name="_template" value="table"/>

        {/* <div className="homePage_link">
        <a href="#">Back to Home page</a>
        </div> */}

      </form>

      </div>
    );
}

export default Contact