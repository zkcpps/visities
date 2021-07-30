import React from 'react'
// import Footer from '../Footer'
// import AddTodo from '../../pages/AddTodo'
// import SearchTodo from '../../pages/SearchTodo'
// import VisibleTodoList from '../../pages/VisibleTodoList'
// import Carousel from '../../components/Carousel';

import MyCarousel from '../../components/MyCarousel';

import  image1 from '../../asset/images/carousel/1.png';
import  image2 from '../../asset/images/carousel/2.png';
import  image3 from '../../asset/images/carousel/3.png';
import  image4 from '../../asset/images/carousel/4.png';
import  image5 from '../../asset/images/carousel/5.png';

const imgList = [
    {
        id: 1,
        src : image1
    },
    {
        id: 2,
        src : image2
    },
    {
        id: 3,
        src : image3
    },
    {
        id: 4,
        src : image4
    },
    {
        id: 5,
        src : image5
    }
 ]

const App = () => {

    return (
        <div>
            {/*<AddTodo />*/}
            {/*<VisibleTodoList />*/}
            {/*<Footer />*/}
            {/*<SearchTodo />*/}
            {/* <Carousel dataList={imgList} timer={3000}/> */}
            <MyCarousel dataSource={imgList} />
        </div>
    )
} 

export default App