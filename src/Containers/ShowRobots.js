import React, { Component } from 'react'
import Card from '../Components/Card';
// import robots from './robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import './ShowRobots.css'

export class ShowRobots extends Component {

    constructor(props) {
        super(props)

        this.state = {
            robots: [],
            searchField: '',
            Loading: true
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ robots: data, Loading: false })
            })
            .catch((error) => {
                console.log(error);
                this.setState({ Loading: true, robots: [] });
            })
    }

    onInputChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { searchField, robots, Loading } = this.state;
        console.log(robots);
        let filteredRobots;
        if (Array.isArray(robots)) {
            filteredRobots = robots.filter((robo) => robo.name.toLowerCase().slice(0, 10).includes(searchField.toLowerCase()))
        }

        return (
            <div className='tc'>

                <h1 className='display-4'>Robo Friends</h1>
                <SearchBox
                    onInputChange={this.onInputChange}
                />
                <h4>Showing {Array.isArray(filteredRobots) ? filteredRobots.length : 0} Robots</h4>

                {Loading ? <h1>Loading</h1> : <Scroll>
                    <div className='allRobots'>
                        {filteredRobots && filteredRobots.map((robot) => <Card robot={robot} key={robot.id} />)}
                    </div>
                </Scroll>
                }

            </div>
        )
    }
}

export default ShowRobots