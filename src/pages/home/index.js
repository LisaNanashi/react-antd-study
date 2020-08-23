import React from "react";
import { Button, Input, List } from 'antd'
import store from '../../store'
import { getItemAction, changeInputAction, addItemAction, deleteItemAction } from "../../store/actionCreator"
import axios from 'axios'

export default class Test extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeVal = this.changeVal.bind(this)
        this.submit = this.submit.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }
    componentDidMount() {
        axios.get('https://www.easy-mock.com/mock/5f424d3a37dd743fd5db5dcb/reduxStudy/list')
            .then((res) => {
                console.log(res.data.data.list)
                const action = getItemAction(res.data.data.list)
                store.dispatch(action)
            })
            .catch((error) => {
                console.log('axios 获取数据失败' + error)
            })
    }
    // shouldComponentUpdate(){
    //     return false;
    // }
    changeVal(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    submit() {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    render() {
        return (
            <div>
                <Input placeholder="请输入" style={{ width: 200 }} onChange={this.changeVal} />
                <Button type="primary" className="ml_10" onClick={this.submit}>增加</Button>
                <div className="mt_10">
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(i, index) => (<List.Item className="pointer" onClick={() => this.deleteItem(index)}>{i}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
}
