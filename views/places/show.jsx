const React = require('react');
const Def = require('../default');

function show(props) {
    console.log(props);
    let comments = <h3 className="inactive">No comments yet!</h3>;
    if (props.place.comments.length) {
        comments = props.place.comments.map((c) => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            );
        });
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img id="show-image" src={props.place.pic} alt={props.place.name} />
                    </div>
                    <div className="col-sm-6">
                        <h1>{props.place.name}</h1>
                        <h2>Rated</h2>
                        <p>Not Rated</p>
                        <h2>Description</h2>
                        <h2>{props.place.showEstablished()}</h2>

                        <h3>Serving {props.place.cuisines}</h3>
                    </div>
                    <hr />
                    <h2>Comments</h2>
                    {comments}
                </div>
                <h2>Got Your Own Rant or Rave?</h2>
                <form action={`/places/${props.place.id}/comment`} method="POST">
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <label htmlFor="content">Content</label>
                            <textarea id="content" name="content" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="author">Author</label>
                            <input id="author" name="author" className="form-control" />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="stars">Star Rating</label>
                            <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                        </div>
                        <div className="form-group col-sm-2">
                            <label htmlFor="rant">Rant?</label>
                            <input type="checkbox" id="rant" name="rant" className="form-control" />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Add Comment" />
                </form>
            </main>
        </Def>
    );
}

module.exports = show;
