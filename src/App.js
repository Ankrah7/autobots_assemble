import React, {Component} from 'react';
import CardArray from './CardArray';
//import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary';
import './app.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            //robots: robots,
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => {
            return Response.json();})
        .then(users =>{
            (this.setState({robots: users}))});
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }else {
            return(
                <div className = 'tc'>
                    <h1 className='f1'>Autobots</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                        <CardArray robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;