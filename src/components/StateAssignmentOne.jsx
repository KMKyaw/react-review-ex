import React, { useState } from 'react';

function StateAssignmentOne(){

    const [state, setState] = useState(1);
    const increase = () => {
        setState(state + 1);
      };

    return (
        <div className="StateAssignmentOne">
            <section>
                <input onClick={increase} type={'button'} value={state}/>
            </section>
        </div>
    )
  }

export default StateAssignmentOne