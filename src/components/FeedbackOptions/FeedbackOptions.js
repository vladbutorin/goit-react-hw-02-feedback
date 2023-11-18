import React, { Component } from "react";
import { Button } from '../FeedbackOptions/Feedback.styled';

class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;

        return (
            <div>
                {options.map(option => (
                    <Button key={option} onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </Button>
                ))}
            </div>
        );
    }
}

export default FeedbackOptions;