import React, {useState} from 'react';

function Counter(props){

    //count stays same setCount tells count to increment or decrement
    //
    //we can't do count = newValue; react won't know the state has changed.
    let [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);


    return(
        <>
            <div className="container">
                <h2 className='count'>{count}</h2>
                <button className="increment" onClick={increment} >Increase</button>
                <button className="reset" onClick={reset} >reset</button>
                <button className="decrement" onClick={decrement} >Decrease</button>
            </div>
        </>
    )    
}

export default Counter;