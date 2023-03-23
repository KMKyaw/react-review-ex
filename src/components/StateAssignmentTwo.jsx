import React, { useState } from 'react';

function StateAssignmentTwo(){

    const [arr, setArr] = useState([]);
    function add() {
        setArr([...arr, Math.floor(Math.random() * 10)]);
        console.log(arr);
      }
    const listItems = arr.map(item =>
        <li>{item}</li>
      );
    return (
        <div className="StateAssignmentTwo">
            <section>
                <input onClick={add} type={'button'} value="Click me!"/>
                <ul>{listItems}</ul>
            </section>
        </div>
    )
  }

export default StateAssignmentTwo