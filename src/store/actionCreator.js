import * as actionType from "./actionType"

// 获取item
const getItemAction = (value) => ({
    type: actionType.GET_ITEM,
    value
})
// 修改input值
const changeInputAction = (value) => ({
    type: actionType.CHANGE_INPUT,
    value
})

// 增加item
const addItemAction = () => ({
    type: actionType.ADD_ITEM,
})

// 删除item
const deleteItemAction = (index) => ({
    type: actionType.DELETE_ITEM,
    index
})
export {
    getItemAction,
    changeInputAction,
    addItemAction,
    deleteItemAction,
}