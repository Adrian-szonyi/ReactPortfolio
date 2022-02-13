import React from 'react'

const Contact = () => {
    return (
  <div>
    <h2 className="contacttitle">Get in touch...</h2>
    <form className="form">
    <label for="fname">First Name</label>
    <input type="text" className="inputfield" id="fname" name="firstname" placeholder="Your name.."></input>

    <label for="lname">Last Name</label>
    <input type="text" className="inputfield" id="lname" name="lastname" placeholder="Your last name.."></input>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea  className="inputfield" id="subject" name="subject" placeholder="Write something.."></textarea>

    <input type="submit" value="Submit"></input>
      </form>
</div>

    );
};

export default Contact;