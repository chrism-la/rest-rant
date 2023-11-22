const React = require('react');
const Def = require('../default');

function show(data) {
    return (
        <Def>
            <main>
                <div>
                    <img src={data.place.pic} alt={data.place.name}></img>
                </div>
                <div>
                    <h2>{data.place.name}</h2>
                    <p className="text-center">{data.place.cuisine}</p>
                    <p className="text-center">
                        Located in {data.place.city}, {data.place.state}
                    </p>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>

                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    );
}

module.exports = show;
