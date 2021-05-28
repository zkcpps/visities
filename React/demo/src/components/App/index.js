import React from 'react'
import Footer from '../Footer'
import AddTodo from '../../pages/AddTodo'
import SearchTodo from '../../pages/SearchTodo'
import VisibleTodoList from '../../pages/VisibleTodoList'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <SearchTodo />
    </div>
)

export default App