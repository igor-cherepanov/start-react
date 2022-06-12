import React, {useState} from 'react';

const Counter = function () {
    const [count, setCount] = useState(0)

    function incrementLikes() {
        setCount(count + 1)
        console.log('test 1' + count)
    }

    function incrementLikes2() {
        setCount(count + 1)
        console.log('test 2' + count)
    }

    function test(){
        incrementLikes()
        incrementLikes2()
    }

    function decrementLikes() {
        setCount(count - 1)
        console.log(count)
    }

    console.log(count)

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={incrementLikes}> increment</button>
            <button onClick={test}> increment</button>
            <button onClick={decrementLikes}> decrement</button>
        </div>
    )
}

export default Counter;