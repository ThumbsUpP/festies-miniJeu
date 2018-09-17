import React, { Component } from 'react';
import './App.css';
import GuitardHero from './GuitardHeroContainer/GH';

class App extends Component {
    state = {
        guitardHero: {
            onScreen: true,
            stepNumber: 60
        },

    }

    onRandomPathDemand() {
        const path = new Array(this.state.guitardHero.stepNumber)
        let acc = 0

        for (let i = 0; i < this.state.guitardHero.stepNumber; i++) {
            const ran = Math.random();
            let angle = 0

            // Setting step angle randomly
            if (ran < 0.25) {
                angle = 90;
            } else if (ran < 0.5) {
                angle = 180;
            } else if (ran < 0.75) {
                angle = -90
            }

            // Setting step timing
            if (i < (path.length / 2)) {
                acc += 0.6;
            } else if (i < (path.length / 4 + path.length / 2)) {
                acc += 0.5;
            } else {
                acc += 0.4
            }
            path[i] = [acc, angle];
        }
        return path
    }

    render() {

        return (
            <div className="Background">
                <GuitardHero
                    paths={this.onRandomPathDemand()} />
            </div>
        );
    }
}

export default App;
