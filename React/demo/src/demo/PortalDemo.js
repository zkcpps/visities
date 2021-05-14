/*组件 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }


    render() {
        return ReactDOM.createPortal(
            <div>
                aaa
            </div>,
            document.body
        );
    }
}