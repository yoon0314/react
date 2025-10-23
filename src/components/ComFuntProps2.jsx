import React, { Component } from 'react'

export default class ComFuntProps2 extends Component {
  render() {
    return (
      <div>
        <h2>컴포넌트 속성값-클래스</h2>
        <p>{this.props.city}도시는 아직 갈려면 {this.props.hours}시간 남았습니다</p>

      </div>
    )
  }
}
