const React = require('react')
const Def = require('./default')

function error404 () {
    return(
    <Def>
        <main>
            <h1> 404: Page not foud</h1>
            <p>Oops, we have encountered an error and cannot find the page you are looking for. </p>
            <img src="https://http.cat/images/404.jpg"/>
        </main>
    </Def>
    )
}

module.exports = error404