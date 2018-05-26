import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        backgroundClass: 'blue',
    };

    componentDidMount(){
        window.addEventListener('resize', () => ){
            window.innerWidth > 1000 ? this.setState({})
        }
    };

    handleClickChange = () => {
        this.setState({
            backgroundClass: this.state.backgroundClass === 'blue' ? 'red' : 'blue',
        });
    };

    render() {
        return (
            <div className="App">
                <div className={this.state.backgroundClass}>TEST</div>
                <button onClick={this.handleClickChange}>zmien tło</button>
            </div>
        );
    }
}

export default App;