const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/louis-hansel-mVZ_gjm_TOk-unsplash.jpg" />
                    <div>
                       Photo by <a href="https://unsplash.com/@louishansel">Louis Hansel</a> on <a href="https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80&w=2958&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">Unsplash</a>
                    </div>
                </div>
                 <a href="/places">
                 <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )}

module.exports = home