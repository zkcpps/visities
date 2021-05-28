import React, { useState, useCallback, memo } from 'react';

const HYButton = memo((props) => {
    console.log("HYButton重新渲染: " + props.title);
    return <button onClick={props.increment}>HYButton +1</button>
});

export default function () {

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    const increment1 = () => {
        setCount((count) => count + 1)
    }

    const increment2 = useCallback(()=>{
        setCount((count) => count + 1)
    },[])

    return (
        <div>
            <h2>Home当前计数: {count}</h2>
            <HYButton title="btn1" increment={increment1}/>
            <HYButton title="btn2" increment={increment2}/>
            <button onClick={e => setShow(!show)}>show切换</button>
        </div>
    )
}
