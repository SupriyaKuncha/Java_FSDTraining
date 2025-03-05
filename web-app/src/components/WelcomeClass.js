import React, {Component} from 'react';
 
class WelcomeClass extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    incrementCount=()=>{
        this.setState({count:this.state.count+1});
    }
    render() {
        return (
            <div>
                 <h1>Welcome to React class component, {this.props.name}</h1>
                 <button onClick={this.incrementCount}>Increment</button>
                 <h1>Count: {this.state.count}</h1>
            </div>
           

        );  
    }
}
 
export default WelcomeClass;