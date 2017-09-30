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
            status: 0
        }
        // setTimeout(() => {
        //     this.setState({
        //         status: 1
        //     })
        // }, 3000);
        console.log('init constructor');
    }

    render() {
        return (
            <div>
                <h1>{this.state.status}</h1>
                  <ExampleContainer status={this.state.status}/>  
            </div>
        )
    }
}


export default Index;