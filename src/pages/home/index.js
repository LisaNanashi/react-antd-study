import React from "react";
import { Button, Input, List } from 'antd'
import store from '../../store'
import { _getlistAction, changeInputAction, addItemAction, deleteItemAction } from "../../store/actionCreator"

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
        const action = _getlistAction()
        store.dispatch(action)
    }
    shouldComponentUpdate(nextprops,nextstate){
        //if(nextprops.)
        return false;
    }
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
