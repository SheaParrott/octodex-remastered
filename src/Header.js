import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <div class="menuparent">
          <img
            class="sitelogoimg"
            src="https://octodex.github.com/ui/logo.png"
            alt="Github logo bar"
          />
          <nav class="menu">
            <a href="#">RSS</a>
            <a href="#">FAQ</a>
            <a href="#">Back to Github</a>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
