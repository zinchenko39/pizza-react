import React from "react";
import classNames from 'classnames';

function Button(props) {
    return (
        <button className={classNames('button', {
            'button--outline': props.outline, // className 'button' add anyway; if (this.props.outline === true) add className 'button--outline'
        })}>{props.children}</button>
    )
}

export default Button;