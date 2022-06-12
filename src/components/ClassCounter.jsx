import React, {useState} from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incrementLikes = this.incrementLikes.bind(this)
        this.decrementLikes = this.decrementLikes.bind(this)
    }

    incrementLikes() {
        this.setState({count: this.state.count + 1})
    }

    decrementLikes() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>

                <button onClick={this.incrementLikes}> increment</button>
                <button onClick={this.decrementLikes}> decrement</button>
            </div>
        )
    }
}

export default ClassCounter;