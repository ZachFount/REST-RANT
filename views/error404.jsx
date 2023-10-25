const React = require('react')
const Def = require('./default')

function error404 () {}

module.exports = error404

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  
  const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                /* BOOTSTRAP CDN LINK (long) */
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
