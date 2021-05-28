import React from 'react'
import { connect } from 'react-redux'
import { searchTodo } from '../actions'

const SearchTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(searchTodo(input.value))
                    input.value = ''
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default connect()(SearchTodo)