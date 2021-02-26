import React, {Component} from 'react'

class Lap extends Component{
    constructor(props){
        super(props);
        this.state = {
            lap: 0
        };
    };

    render(){

        return(

            <div>
                <h2>Number of Laps Ran: {this.state.lap}</h2>
                <button onClick={() => this.setState({lap: this.state.lap + 1})}>Lap</button>
                <button onClick={() => this.setState({lap: 0})}>Reset Counter</button>

            </div>
        );

    }
}
export default Lap;