import React, {Component} from 'react'

class Squat extends Component{
    constructor(props){
        super(props);
        this.state = {
            squat: 0
        };
    };

    render(){

        return(

            <div>
                <h2>Number of Squats: {this.state.squat}</h2>
                <button onClick={() => this.setState({squat: this.state.squat + 1})}>Lap</button>
                <button onClick={() => this.setState({squat: 0})}>Reset Counter</button>

            </div>
        );

    }
}
export default Squat;