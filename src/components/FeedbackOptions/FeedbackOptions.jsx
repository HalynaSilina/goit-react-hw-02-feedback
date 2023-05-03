import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ buttonOptions, onLeaveFeedback }) => {
  return (
    <div>
      {buttonOptions.map(option => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  buttonOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FeedbackOptions;
