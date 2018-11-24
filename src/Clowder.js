import React, { Component } from 'react'
import Cat from './Cat'

class Clowder extends Component {
  render() {
    return (
      <div>
        <main>
          <Cat
            image="https://octodex.github.com/images/homercat.png"
            number="#82"
            name="Homercat"
            createrImage="https://github.com/nickh.png"
          />
          <Cat
            image="https://octodex.github.com/images/octobiwan.jpg"
            number="#3"
            name="Octobi Wan Catnobi"
            createrImage="https://github.com/cameronmcefee.png"
          />
          <Cat
            image="https://octodex.github.com/images/ironcat.jpg"
            number="#25"
            name="IronCat"
            createrImage="https://github.com/cameronmcefee.png"
          />
          <Cat
            image="https://octodex.github.com/images/total-eclipse-of-the-octocat.jpg"
            number="#30"
            name="Total Eclipse"
            createrImage="https://github.com/cameronmcefee.png"
          />
          <Cat
            image="https://octodex.github.com/images/spectrocat.png"
            number="#45"
            name="Spectrocat"
            createrImage="https://avatars1.githubusercontent.com/u/20049049?s=460&v=4"
          />
          <Cat
            image="https://octodex.github.com/images/grim-repo.jpg"
            number="#55"
            name="Grim Repo"
            createrImage="https://avatars1.githubusercontent.com/u/20049049?s=460&v=4"
          />
          <Cat
            image="https://octodex.github.com/images/plumber.jpg"
            number="#59"
            name="lumber"
            createrImage="https://avatars1.githubusercontent.com/u/20049049?s=460&v=4"
          />{' '}
          <Cat
            image="https://octodex.github.com/images/linktocat.jpg"
            number="#60"
            name="Linktocat"
            createrImage="https://avatars1.githubusercontent.com/u/20049049?s=460&v=4"
          />
          <Cat
            image="https://octodex.github.com/images/megacat.jpg"
            number="#61"
            name="Megacat"
            createrImage="https://github.com/jasoncostello.png"
          />
          <Cat
            image="https://octodex.github.com/images/adventure-cat.png"
            number="#69"
            name="Adventure Cat"
            createrImage="https://github.com/jonrohan.png"
          />
          <Cat
            image="https://octodex.github.com/images/stormtroopocat.png"
            number="#86"
            name="Stormtroopocat"
            createrImage="https://github.com/jeejkang.png"
          />
          <Cat
            image="https://octodex.github.com/images/gangnamtocat.png"
            number="#91"
            name="Gangnamtocat"
            createrImage="https://github.com/jeejkang.png"
          />
        </main>
      </div>
    )
  }
}

export default Clowder
