import React from 'react';
import { Button } from '../FeedbackOptions/Feedback.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map((option) => (
            <Button key={option} onClick={() => onLeaveFeedback(option)}>
                {option}
            </Button>
        ))}
    </div>
);

export default FeedbackOptions;