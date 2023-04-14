import React, { Component } from "react";
import Die from "./Die";

class Roll extends Component{
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five","six"]
    };

    constructor(props){
        super(props);
        this.state ={
           
                die1:"five",
                die2:"six"
        
        }
        this.rollDice = this.rollDice.bind(this);

    }
    rollDice(){
    //     const newD1 = this.props.sides[Math.floor(Math.random()* this.props.sides.length)]
    //     const newD2 = this.props.sides[Math.floor(Math.random()* this.props.sides.length)]

    //  this.setState({die1:newD1,die2:newD2});
   this.setState({die1:"three",die2:"one"})
        
    }
    render(){
        return(
            <div className="Roll">
                <Die face={this.state.die1} />
                <Die face={this.state.die2} />
            <button onClick={this.rollDice}>Roll the Dice</button>    


            </div>
          
        )
    }
}
export default Roll;