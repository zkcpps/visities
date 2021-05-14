/*组件 */
import React, {Component} from 'react'

export default class CountDemo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    /*
       state尽量避免用pop,push等有副作用的方式更改
       同步情况，setTimeout、采用函数的方式设置
     */

    componentDidMount() {
        this.setState({count: this.state.count + 1});
        console.log("1-----", this.state.count);
        this.setState({count: this.state.count + 1});
        console.log("2-----", this.state.count);
        setTimeout(()=>{
            console.log("0秒后set-----", this.state.count);
            this.setState({count: this.state.count + 1});
        },0)
        setTimeout(()=>{
            console.log("100ms后set-----", this.state.count);
            this.setState({count: this.state.count + 1});
        },100)
        this.setState({count: this.state.count + 1});
        console.log("3-----", this.state.count);
    }

    render() {
        const { count } = this.state;
        return (
            <div>{ count }</div>
        )
    }
}