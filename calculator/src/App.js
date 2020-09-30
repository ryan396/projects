import React, { Component } from 'react'

class App extends Component {
    constructor(){
        super();
        this.state = {
            result : ""
        }
    } 

    onClick = button => {
        if (button === "CE") {
            this.calculate();
        }
    }
}