const React = require('react');
const Def = require('../default');

function show(data) {
    return (
        <Def>
            <main>
                <h2>{data.place.name}</h2>
                <p className="text-center">{data.place.cuisine}</p>
                <img src={data.place.pic} alt={data.place.name}></img>
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
            </main>
        </Def>
    );
}

module.exports = show;
