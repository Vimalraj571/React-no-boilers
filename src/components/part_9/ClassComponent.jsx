import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, React!',
            date: new Date()
        };
    }

    componentDidMount() {
        // This method is called after the component is mounted in the DOM.
        // It's a good place to fetch data or set up subscriptions.
        console.log('ClassComponent - Component is now mounted');
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        // This method is called after a component's state or props have changed.
        // You can compare the current props and state with the previous ones.
        if(prevState.message !== this.state.message){

        }
        console.log('ClassComponent - Component updated. Previous message:', prevState.message);
    }

    componentWillUnmount() {
        // This method is called just before the component is unmounted from the DOM.
        // It's used for cleanup tasks like removing event listeners or subscriptions.
        console.log('ClassComponent - Component will unmount');
        clearInterval(this.timerID);

    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    changeMessage = () => {
        this.setState({ message: 'Updated message' });
    }

    render() {
        console.log('this.state.message', this.state.message)
        return (
            <div>
                <h1>Class Component Simple Example:</h1>
                <p>{this.state.message}</p>
                <button onClick={this.changeMessage}>Change Message</button>
                <div>It is {this.state.date.toLocaleTimeString()}.</div>
            </div>
        );
    }
}

export default ClassComponent;
