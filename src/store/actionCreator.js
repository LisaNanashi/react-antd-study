import * as actionType from "./actionType"
import axios from 'axios'

// 请求数据
const _getlistAction = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5f424d3a37dd743fd5db5dcb/reduxStudy/list')
            .then((res) => {
                const action = getItemAction(res.data.data.list)
                dispatch(action)
            })
            .catch((error) => {
                console.log('axios 获取数据失败' + error)
            })
    }
}
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
    _getlistAction,
    getItemAction,
    changeInputAction,
    addItemAction,
    deleteItemAction,
}