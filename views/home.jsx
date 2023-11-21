const React = require('react');
const Def = require('./default');

function home() {
    return (
        <Def>
            <main>
                <a href="/places">
                    <button type="button" className="btn btn-primary">
                        Places Page
                    </button>
                </a>
                <div className="home_img--wrapper">
                    <img className="foodbowls" src="/images/food-bowls.jpg" alt="food-bowl"></img>
                </div>
            </main>
        </Def>
    );
}

module.exports = home;
