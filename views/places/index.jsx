const React = require('react');
const Def = require('../default');

function Index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-4" key={place.id}>
                <h2>
                    <a href={`/places/${Index}`}>{place.name}</a>
                </h2>
                <p className="text-center">{place.cuisine}</p>
                <img src={place.pic} alt={place.name}></img>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        );
    });

    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">{placesFormatted}</div>
            </main>
        </Def>
    );
}

module.exports = Index;
