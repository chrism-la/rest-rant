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
            </main>
        </Def>
    );
}

module.exports = show;
