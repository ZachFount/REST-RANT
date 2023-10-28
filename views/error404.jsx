const React = require('react')
const Def = require('./default')

function error404 () {}

function error404 () {
  return (
    <Def>
        <main>
        <link rel="stylesheet" href="/css/style.css"/>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <div>
    <img src="/images/404-cat.jpeg" alt="cat photo" />
    <div>
      Photo by <a href="https://placekitten.com/">placekitten</a> on <a href="https://placekitten.com">placekitten</a>
    </div>
  </div>
        </main>
    </Def>
  )
}

module.exports = error404
