import React from 'react';

export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>About</h1>

                <p>This application uses the following technologies:-</p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>jspm</li>
                    <li>Bootstrap</li>
                </ul>

            </div>
        );
    }
}
