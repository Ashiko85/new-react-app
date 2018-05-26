import React, { PureComponent } from 'react';

class Count extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    render() {
        return (
            <div className="App">
                licznik: {this.state.count}
                <div/>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }}
                >
                    zwieksz
                </button>
            </div>
        );
    }
}
export default Count;