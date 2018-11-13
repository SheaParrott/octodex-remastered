import React, { Component } from 'react'

class Cat extends Component {
  render() {
    return (
      <section>
        <div>
          <img class="OctocatImage" src={this.props.image} />
        </div>
        <div class="triangle" />
        <div class="octocatInfoLine">
          <p class="octocatNumber">{this.props.number}</p>
          <div class="octocatMadeBy">
            <p class="drkgrey">
              the <strong class="OctocatInfoBlack">{this.props.name}</strong> by
            </p>
            <img
              class="octocatMadeByImage"
              src={this.props.createrImage}
              alt="creater of ocotocat above"
            />
          </div>
        </div>
      </section>
    )
  }
}

export default Cat
