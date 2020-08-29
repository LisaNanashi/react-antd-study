import React from "react";
import { Button, Input } from 'antd'
let str = ""
export default function () {
    function changeVal(e) {
        str = e.target.value
    }
    function test() {
        let arr_ = new Set(str.split(''))
        arr_ = [...arr_]
        arr_.map((c, i) => {
            console.log(`${c}_${str.split(c).length - 1}`)
        })
    }
    return (
        <div>
            <Input placeholder="请输入" style={{ width: 200 }} onChange={changeVal} />
            <Button type="primary" onClick={test}>测试11</Button>
        </div>
    )
}
