const React = require('react');
const Def = require('./default');

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
                <div>
                    <img className="foodbowls" src="/CSS/images/food-bowls.jpg" alt="food-bowl"></img>
                </div>
            </main>
        </Def>
    );
}

module.exports = home;
