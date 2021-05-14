/*组件 */
import React, {Component} from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.clickEvent = this.clickEvent.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    clickEvent(e) {
      e.preventDefault();
      e.stopPropagation();
        console.log('target-----', e.target);
        console.log('currentTarget-----', e.currentTarget);
        console.log('event-----', e);
        console.log('event.__proto__.constructor-----', e.__proto__.constructor);

        console.log('nativeEvent-----', e.nativeEvent);
        console.log('nativeEvent target-----', e.nativeEvent.target);
        console.log('nativeEvent currentTarget-----', e.nativeEvent.currentTarget);
    }

    render() {
        return (
            <div>
               <a
                   href="www.baidu.com"
                   target="_blank"
                   onClick={this.clickEvent}
               >百度一下</a>
            </div>
        );
    }
}