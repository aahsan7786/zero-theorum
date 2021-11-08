import React, { Component } from 'react';
import './hero-charts.scss';

class HeroCharts extends Component{

    themeInterval = 0;

    state = {
      theme: 0
    };

    componentDidMount() {
        this.themeInterval = setInterval(() => this.update(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.themeInterval);
    }

    getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

    update() {
        this.setState({
            theme: this.getRandomInt(1, 3)
        });
    }

    render() {
        const { theme } = this.state;
        return(
            <div className="folder-charts">
                <div className={`chart __1 __blue theme-${theme}`}>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                        <div className="chart-item-dot" />
                    </div>
                </div>
                <div className={`chart __2 __yellow theme-${theme}`}>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                        <div className="chart-item-dot" />
                    </div>
                </div>
                <div className={`chart __3 __blue theme-${theme}`}>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                        <div className="chart-item-dot" />
                    </div>
                </div>
                <div className={`chart __4 __yellow theme-${theme}`}>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                    </div>
                    <div className="chart-item">
                        <div className="chart-item-dot" />
                        <div className="chart-item-dot" />
                    </div>
                </div>
            </div>
        )
    }
}

export default HeroCharts;