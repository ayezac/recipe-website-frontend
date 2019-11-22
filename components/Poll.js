import React, {useState} from 'react';
import axios from 'axios';

const Poll = (props) => {
    const [choiceChosen, setChoiceChosen] = useState("")

    const handleInputChange =(e) => {
      setChoiceChosen(e.target.value)
    }
    return (
    <div>
        <h1>Recipe Poll</h1>
    <form>
        <ul>
          {props.polls.map(poll => 
            <li className="questions" key={poll.id}>{poll.question_text}
            <div>
            {poll.choices.map(choice =>
            <div className="choices">
            <label>
             <input
                type="radio"
                name="choices"
                value={choice.id}
                onChange={handleInputChange}/> 
            
                {choice.choice_text}
            </label>
            </div>
                )}
            </div>
            </li>
            )}
          
        </ul>
        <button>Submit</button>
    </form>

    <style jsx>{`
    h1 {
        background-color: #3C5580;
        color: white;
        font-size: 1.8rem;
        text-align: center;
        padding: 20px;
    }
    form{
        

    }
    .questions{
        list-style: none;
        text-align: left;
        font-size: 1.5rem;
        margin-bottom: 30px;
        border-bottom: 2px solid #3C5580;
        padding-bottom: 40px;

    }
    .choices{
        position: relative;
        left: 30px;
        font-size: 1.3rem;
    }
    input[type="radio"] {
        width: 1.5rem;
        height: 1.5rem;
        position: relative;
        top:3px;
        right: 15px;
      }
      button{
          width: 20%;;
          height: 40px;
          text-align: center;
          position: relative;
          left: 40%;
          color: white;
          background-color: #3C5580;
      }

    `}</style>
    </div>
)

}

export default Poll;