import React, { Component } from 'react'

export default class ComCondition1Class extends Component {
    //변수선언, 메서드선언, 붙일내용(DOM구조)
    constructor(props) {
        super(props)
        this.state = {
            name: "홍길동",
            isToggle: false
        }
        this.toggle=this.toggle.bind(this)
    }

    toggle() {
        // isToggle=false
        console.log("호출되었습니다")
        //   this.setState(이전자료=>{
        //         상태변수:이전자료변수
        //     })

        this.setState((state) => ({
            isToggle: !state.isToggle
        }))
    }


render() {
    return (
        <div>
            <p>버튼을 클릭해보세요</p>
            <p>button은 isToggle 값이 true면 "ON" false면 "OFF"</p>
            <button onClick={this.toggle}>{this.state.isToggle ? "ON" : "OFF"}</button>
        </div>
    )
}
}
