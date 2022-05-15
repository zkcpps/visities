import React, { useEffect, useRef } from 'react';

import  './index.css';

let position = 0;
export default (props) => {

    const { dataList, timer }  = props;

    const divRef = useRef();

    let position = 0;

    useEffect(() => {

        divRef.current.addEventListener("dragstart", event => event.preventDefault())
        setTimeout(()=> {
            //action()
        }, timer)
    },[])

    const action = () => {
        console.log(divRef);

        let div = divRef.current;
        let nextPosition = (position + 1) % dataList.length;

        let current = div.childNodes[position];
        let next = div.childNodes[nextPosition];

        current.style.transition = 'ease 0s';
        next.style.transition = 'ease 0s';

        current.style.transform = `translateX(${ -100 * position}%)`;
        next.style.transform = `translateX(${100 -100 * nextPosition}%)`;

        setTimeout(()=> {
            current.style.transition = '';
            next.style.transition = '';

            current.style.transform = `translateX(${ -100 -100 * position}%)`;
            next.style.transform = `translateX(${-100 * nextPosition}%)`;
            position = nextPosition;
        },16);

        //setTimeout(action, 3000);
    }

    const mouseDown = () => {
        let div = divRef.current;

        const len = dataList.length;  //长度

        let lastPosition = (position - 1 + len) % len;
        let nextPosition = (position + 1) % len;

        let current = div.childNodes[position];
        let next = div.childNodes[nextPosition];
        let last = div.childNodes[lastPosition];

        current.style.transition = "ease 0s";
        next.style.transition = "ease 0s";
        last.style.transition = "ease 0s";

        current.style.transform = `translateX(${ - 500 * position }px)`;
        next.style.transform = `translateX(${ 500 - 500 * nextPosition }px)`;
        last.style.transform = `translateX(${ - 500 - 500 * lastPosition }px)`;

    }

    const mouseMove = (event) => {
        console.log("mouseMove");
        let startX = event.clientX;
        let div = divRef.current;

        const len = dataList.length;  //长度

        let lastPosition = (position - 1 + len) % len;
        let nextPosition = (position + 1) % len;

        let current = div.childNodes[position];
        let next = div.childNodes[nextPosition];
        let last = div.childNodes[lastPosition];

        current.style.transform = `translateX(${ event.clientX - startX  - 500 * position }px)`;
        next.style.transform = `translateX(${ event.clientX - startX + 500 - 500 * nextPosition }px)`;
        last.style.transform = `translateX(${ event.clientX - startX - 500 - 500 * lastPosition }px)`;
    }

    const mouseUp = (event) => {
        console.log("mouseUp");
        let div = divRef.current;
        let startX = event.clientX;
        const len = dataList.length;  //长度

        let lastPosition = (position - 1 + len) % len;
        let nextPosition = (position + 1) % len;

        let current = div.childNodes[position];
        let next = div.childNodes[nextPosition];
        let last = div.childNodes[lastPosition];


        let offset = 0;

        let distant = event.clientX - startX; //偏移量

        if (distant > 250) {
            offset = 1;
        } else if(distant < -250) {
            offset = -1;
        }

        current.style.transition = "";
        next.style.transition = "";
        last.style.transition = "";

        current.style.transform = `translateX(${ offset * 500 - 500 * position }px)`;
        next.style.transform = `translateX(${ offset * 500 + 500 - 500 * nextPosition }px)`;
        last.style.transform = `translateX(${offset * 500 - 500 - 500 * lastPosition }px)`;

        position = (position - offset + dataList.length ) % dataList.length;
    }


    return (
        <div
            className="container"
            ref={divRef}
            onMouseDown={ mouseDown }
            // onMouseMove={ mouseMove }
            // onMouseUp={ mouseUp }
        >
            {
                dataList.map( item => {
                    return <img
                        id={item.id}
                        src={item.src}
                        draggable={false}
                    />
                })
            }
        </div>
    )
}