import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
const Button = ({ onClick, className, outline, children }) => {
    return (
      <button
        onClick={onClick}
        className={classNames('button', className, {
          'button--outline': outline,
        })}>
        {children}
      </button>
    );
  };

Button.propTypes={
    onClick:PropTypes.func.isRequired,
    className:PropTypes.string.isRequired,
    outline:PropTypes.bool,
    children:PropTypes.array.isRequired
}
  
export default Button