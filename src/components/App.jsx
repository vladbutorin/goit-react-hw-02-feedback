import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification'

import { GlobalStyle } from './GlobalStyle ';

export const App = () => {
    const [state, setState] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const handleFeedback = (type) => {
        setState((prevState) => ({
            ...prevState,
            [type]: prevState[type] + 1,
        }));
    };

    const countTotalFeedback = () => {
        return state.good + state.neutral + state.bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const totalFeedback = countTotalFeedback();
        return totalFeedback === 0 ? 0 : Math.round((state.good / totalFeedback) * 100);
    };

    const hasFeedback = countTotalFeedback() > 0;

    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
            </Section>
            <Section title="Statistics">
                {hasFeedback ? (
                    <Statistics
                        good={state.good}
                        neutral={state.neutral}
                        bad={state.bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>

            <GlobalStyle />
        </div>
    );
};

export default App;