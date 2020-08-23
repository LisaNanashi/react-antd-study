const datas = {
    inputVal: '',
    list: []
}
export default (state = datas, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'getItem':
            newState.list = action.value
            return newState
        case 'changeInput':
            console.log('changeInput')
            newState.inputVal = action.value
            return newState
        case 'addItem':
            console.log('addItem')
            newState.list.push(newState.inputVal)
            return newState
        case 'deleteItem':
            console.log('deleteItem')
            newState.list.splice(action.index, 1)
            return newState
        default:
            console.log('default')
    }
    return state
}