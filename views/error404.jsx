const React = require('react');
const Def = require('./default');

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>

                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/puggy.jpg" alt="pug"></img>
                    <div>
                        Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">charlesdeluvio</a> on{' '}
                        <a href="https://unsplash.com/photos/black-pug-with-gray-knit-scarf-Mv9hjnEUHR4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    );
}

module.exports = error404;
