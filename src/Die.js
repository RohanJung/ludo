import React,{ Component } from "react";
import './App.css'

class Die extends Component{
    render(){
        return (
            <div>
                <i className={`fas fa-dice-${this.props.face}`}/>
                <h1>Dice</h1>

            </div>
        )
    }
}
export default Die;