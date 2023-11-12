const React = require('react')
const Def = require('../default')

function Show (data) {
    let comments = (
        <h3 className = "inactive">
            No Rants Or Raves Yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive"> Not Yet Rated!</h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = sumRatings / data.place.comments.length
        
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h3 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h3>
                    <h4>{c.content}</h4>
                    <h5>
                    <stong>- {c.author}</stong>
                    </h5>
                    <h6>Rating: {c.stars}</h6>
                </div>
            )
        })
    }

    return (
        <Def title={data.place.name}>
            <main>
            <div >
            <div className="row">
            <div className="col-sm-6"> 
                <img className="col-sm-10 img-fluid" src={data.place.pic} alt={data.place.name}/>
                <p className="text-center">Located in: {data.place.city}, {data.place.state}</p>
                </div>
            <div className="col-sm-5">
                <h1> {data.place.name} </h1>
                <h2 className="text-center">Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <p className="text-center">Serves: {data.place.cuisines} </p>
                <h2>Ratings</h2>
                {rating}
            </div>
        </div>
        <div>
            <h2 className="text-center">Rants Or Raves</h2>
            <p className="text-center">
                {comments}
            </p>
            
        </div>

            <form method="POST" action={`/places/${data.place.id}/comment`} className="border">
                    <div className="row ">
                        <div className="form-group col-sm-4">
                            <label htmlFor="content" key="content">Comment</label>
                            <input type="text" className="form-control" id="content" name="content" defaultValue="Want To Rant Or Rave? Tell Us Here!"/>
                        </div>
                        <div className="form-group col-sm-4">
                            <label input="text" htmlFor="author" key="author">Author</label>
                            <input className="form-control" id="author" name="author" />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="stars" key="stars">Star Rating </label><br/>
                            <input type="range" min="1" max="5" defaultValue="3" step=".5" list="number"  id="stars" name="stars" className="container-fluid"/>
                            <div >
                            <datalist id="number" key="stars" className="container-fluid">
                                <option value="1" label="1" >1</option>
                                <option value="2" label="2" >2</option>
                                <option value="3" label="3" >3</option>
                                <option value="4" label="4" >4</option>
                                <option value="5" label="5" >5</option>
                            </datalist>
                            
                        </div>
                        </div>

                        <label htmlFor="rant" key="rant">Rant?</label>
                        <input
                            type="checkbox"
                            name="rant"
                            id="rant"
                        />
                        <br/>
                    </div>
                    <br/>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                    <br/>
                    <br/>
            </form>
            <br />
            <div>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning col-sm-3"> 
                    Edit
                </a>  
                <br/>
                <br/>
                <form action={`/places/${data.place.id}?_method=DELETE`} method="POST"> 
                    <input type="submit" value="DELETE" className="btn btn-danger col-sm-3" />
                </form>
            </div>
        </div>
            </main>
        </Def>
    )
}

module.exports = Show