import { Component } from 'react';

class ExampleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMounted: false,
            name: 'react'
        }
        console.log(props);
        this.test.bind();
    }

    componentWillMount() {

        // setTimeout(() => {
        //     this.setState({name: 'react1'});
        // }, 4000)
        //console.log('componentWillMount');
    }

    test() {
        console.log('test');
        //this.setState({name: 'react'});
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({name: 'react1'});
        }, 10000)
        this.test();
        //console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        //console.log('componentWillReceiveProps', nextProps);
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log('should component update', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        //console.log('component will update', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log('component did update', prevProps, prevState);
    }

    componentWillUnmount() {
        //console.log('component will unmount');
    }

    render() {
        return (
            <div ref="myRef">
            <h1> Component </h1>
            <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default ExampleContainer;