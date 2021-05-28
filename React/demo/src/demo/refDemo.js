import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'

export default function () {
    const [count, setCount] = useState(0);

    const numRef = useRef(count);

    useEffect(() => {
        console.log("count-----", count)
        numRef.current = count;
    }, [count])

    useLayoutEffect(() => {
       console.log(count)
    }, [count]);

    return (
        <div>
            {/* <h2>numRef中的值: {numRef.current}</h2>
      <h2>count中的值: {count}</h2> */}
            <h2>count上一次的值: {numRef.current}</h2>
            <h2>count这一次的值: {count}</h2>
            <button onClick={e => setCount(count + 10)}>+10</button>
        </div>
    )
}
