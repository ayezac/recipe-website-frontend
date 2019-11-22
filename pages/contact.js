import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
    return (
        <Layout>
            <header>
                <h1>Contact us</h1>
            </header>
            <main>
                <form id="form">
                    <input type="text" id="name" placeholder="Your Name" required />
                    <input type="email" id="email" placeholder="Email Address" required />
                    <label for="country">Country:</label>
                    <select name="country" id="country">
                        <option value="Sweden">Sweden</option>
                        <option value="Norway">Norway</option>
                        <option value="Norway">Finland</option>
                        <option value="Norway">Denmark</option>
                    </select>
                    <div class="gender-container">
                        <p>Gender:</p>
                        <br />
                        <div class="checkbox-container">
                            <input type="checkbox" name="gender" value="female" id="female" /><label class="checkbox-label" for="female">Female</label>
                        </div>
                        <br />
                        <div class="checkbox-container">
                            <input type="checkbox" name="gender" value="male" id="male" /><label class="checkbox-label" for="male">Male</label>
                        </div>
                    </div>

                    <textarea id="message" placeholder="Type your message here" rows="10"></textarea>
                    <fieldset>
                        <legend>Would you like to receive our newsletter?</legend>
                        <input type="radio" name="newsletter" value="Yes" id="yes" /><label for="yes">Yes</label><br />
                        <input type="radio" name="newsletter" value="No" id="no" /><label for="no">No</label><br />
                    </fieldset>
                    <button type="submit" value="submit">Submit</button>
        </form>
        </main>
        <style jsx>{`
#form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 10px;
    width: 750px;
    margin: auto;
    padding: 20px;
    font-family: 'Noto Sans JP', sans-serif;
    background-color:#3C5580;
    color: white;
}
header h1{
    color: #3C5580;
    font-size: 2.3rem;
    text-align: center;
}

form input {
    width: 600px;
    padding: 15px;
    margin: 20px;
    font-size: 16px;
}
form label{
    position: relative;
    left: 20px;
}
form select{
    font-size: 16px;
    background-color: #fff;
    width: 400px;
    height: 40px;
    margin: 20px;
}
.gender-container p{
    position: relative;
    left: 20px;
}
.checkbox-container{
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    align-items: center;
    width: 120px;
}

form textarea{
    font-size: 16px;
    width: 630px;
    margin: 20px;
}
form fieldset{
    width: 400px;
}

button{
    background-color: #c4ccd8;
    height: 50px;
    width: 300px;
    border-radius: 10px;
    margin: 30px;
    font-size: 16px;
    color: black;
    position: relative;
    left: 12vw;
    right:11vw;
}

/* checkbox */
input[type="checkbox"] {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px)
  }
  
  input[type="checkbox"] +label{
    display: flex;
    font-size: 1rem;
    align-items: center;
    position: relative;
    margin-bottom: 0;
  }
  
  input[type="checkbox"] + label:before {
    content: "";
    background-color: white;
    border: solid 1px #a5a5a5;
    border-radius: 0.123rem;
    position: relative;
    display: inline-block;
    margin-right: 0.75rem;
    width: 1.125rem;
    height: 1.125rem;
  }
  
  input[type="checkbox"]:checked +label:before {
    background-color: #3b88fd;
    border-color: #3b88fd;
  }
  
  input[type="checkbox"]:checked +label:after {
    background-color: transparent;
    content: "";
    position: absolute;
    top: 0.25rem;
    left: 0.2rem;
    border-left: 0.16rem solid white;
    border-bottom: 0.16rem solid white;
    height: 0.35rem;
    width: 0.6rem;
    transform: rotate(-45deg);
  }
  
  
  input[type="checkbox"]:hover +label:before {
    border-color: #3b88fd;
  }
  
  input[type="checkbox"]:checked:hover + label:before {
    background-color:#086afd;
    border-color: #086afd;
  }
  
  input[type="checkbox"]:active + label:before {
    border-color: #3b88fd;
  }
  
  input[type="checkbox"]:focus + label:before {
    box-shadow: 0 0 0 0.125rem;
  }
/* radio */
  input[type="radio"] {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px)
  }

  input[type="radio"] +label {
    display: flex;
    font-size: 1rem;
    align-items: center;
    position: relative;
    margin-bottom: 0;
  }

  input[type="radio"] + label:before {
    content: "";
    background-color: white;
    border: solid 1px #a5a5a5;
    border-radius: 50%;
    position: relative;
    display: inline-block;
    margin-right: 0.75rem;
    width: 1.35rem;
    height: 1.35rem;
  }
  input[type="radio"]:checked +label:before {
    background-color: black;
    border-color: black;
  }

  input[type="radio"]:checked +label:after {
    background-color: white;
    content: "";
    position: absolute;
    top: 0.55rem;
    left: 0.5rem;
    border: 2px solid white;
    border-radius: 50%;
    height: 0.2rem;
    width: 0.2rem;
    transform: rotate(-45deg);
  }

  input[type="radio"]:hover +label:before {
    border-color: white;
  }
  
  input[type="radio"]:checked:hover + label:before {
    background-color: black;
    border-color: white;
  }
  
  input[type="radio"]:active + label:before {
    border-color: #3b88fd;
  }
  
  input[type="radio"]:focus + label:before {
    box-shadow: 0 0 0 0.125rem;
  }`}</style>
    </Layout>

            )
}

export default Contact;