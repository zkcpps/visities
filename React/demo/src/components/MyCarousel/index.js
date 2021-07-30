import React from 'react';
import {Carousel, Image} from 'antd';

const MyCarousel = (props) => {
   const {dataSource} = props;
   return (
       <div>
         <Carousel>
           {
             dataSource.map(item=> {
               return <div><Image id={item.id} src={item.src} width={300}/></div>
             })
           }
         </Carousel>
       </div>
   )
 }
export default MyCarousel;