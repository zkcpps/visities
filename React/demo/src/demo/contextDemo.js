/*组件 */
import React, { Component } from 'react'

const ThemeContext = React.createContext('red');

 class Children extends React.Component {
     constructor(props) {
         super(props);
     }
    static contextType = ThemeContext;
    render() {
        let value = this.context;
        return (
            <div style={{ width: 100, height: 100,  backgroundColor: value}}>

            </div>
        )
    }
}


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        };

        this.changeTheme = this.changeTheme.bind(this);
    }





    componentDidMount() {
    }

    componentWillUnmount() {

    }

    changeTheme = function () {
       this.setState({
           color: this.state.color === 'blue' ? 'red' : 'blue'
       })
    }


    render() {
        const { color }  = this.state;
        return (
            <>
                <ThemeContext.Provider value={color}>
                    <Children></Children>
                </ThemeContext.Provider>
                <button onClick={this.changeTheme}>更改颜色</button>
            </>
        );
    }
}