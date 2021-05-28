const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action
        case 'SHOW_SEARCH':
            return action
        default:
            return state
    }
}
export default visibilityFilter