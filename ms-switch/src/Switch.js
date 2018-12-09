import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Switch extends Component {
    constructor(props) {
        super(props);

        let checked = false;

        if ('checked' in props) {
            checked = !!props.checked;
        }

        this.state = { checked };
    }

    onClick = () => {
        let checked = !this.state.checked;
        this.setState({checked});
        if (this.props.onChange){
            this.props.onChange(checked);
        }
    }

    render() {
        const { prefixCls, checkedString, uncheckedString, disabled } = this.props;
        const checked = this.state.checked;
        const switchClassName = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-checked`]: checked,
            [`${prefixCls}-disabled`]: disabled,
        })

        return (
            <button
                onClick={this.onClick}
                className={switchClassName}
                disabled={disabled}
            >
            <span className={`${prefixCls}-inner`}>
                {this.state.checked ? checkedString :  uncheckedString}
            </span>
            </button>);
    }
}

Switch.propTypes = {
    checkedString: PropTypes.string,
    uncheckedString: PropTypes.string,
    prefixCls: PropTypes.string,
}

Switch.defaultProps = {
    checkedString: null,
    uncheckedString: null, 
    prefixCls: "ms-switch",
}