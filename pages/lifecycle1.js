import Link from 'next/link';
import style from 'styled-components'
import ExampleContainer from '../component/ExampleContainer'
import { Component } from 'react';
import { render } from 'react-dom';

let a = '';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            status: ''
        }
        //console.log('init constructor');
    }

    componentWillMount() {
        //console.log('componentWillMount');
        this.setState({status: 'hello'});
    }

    componentDidMount() {
        //console.log('componentDidMount')
        this.setState({status: 'hello there '});
    }

    componentWillUnmount() {
        this.setState({state: null})
    }

    render() {
        return (
            <div>
                <ExampleContainer test={this.state.status}/>
            </div>
        )
    }


}


export default Index;