import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 定时切换
 */
class Test extends Component {
    state = {
        index: 0,
        content: [],
    };

    componentDidMount() {
        this.notifyContent();
        this.loop();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.open !== prevProps.open) {
            this.loop();
        }
        if (this.props.children !== prevProps.children) {
            this.notifyContent();
        }
    }
    //更新,保存主内容引用
    notifyContent = () => {
        const { children } = this.props;
        const content = Array.isArray(children) ? children : [children];
        this.setState({
            content
        });
    };
    // 定时循环
    loop = () => {
        const { time = 1000, open = false } = this.props;
        if (!open) {
            return;
        }
        setTimeout(() => {
            const { content, index } = this.state;
            this.change(index, content[index]);

            const newIndex = index + 1;
            this.setState({
                index: newIndex >= content.length ? 0 : newIndex
            });
            this.loop();
        }, time);
    };
    // 改变回调
    change = (index, content) => {
        const { onChange, change } = this.props;
        if (onChange) { //antd的form表单,默认会设置.
            onChange(index, content);
        }
        if (change) {//所以一般写2个.
            change(index, content);
        }
    };
    // 获取展示内容
    getItem = (index) => {
        const { wrapper } = this.props;
        const item = this.state.content[index];
        if (wrapper) {
            return wrapper(item, index);
        }
        return item;
    };

    render() {
        const { index } = this.state;
        return (
            <div>
                {this.getItem(index)}
            </div>
        );
    }
}

Test.propTypes = {
    time: PropTypes.number,
    open: PropTypes.bool,
    wrapper: PropTypes.func,
    change: PropTypes.func,
};

export default Test;
