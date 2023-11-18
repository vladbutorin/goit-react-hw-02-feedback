// import React, { useState } from 'react';
// import Statistics from './Statistics/Statistics';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Section from './Section/Section';
// import Notification from './Notification/Notification'

// import { GlobalStyle } from './GlobalStyle ';

// export const App = () => {
//     const [state, setState] = useState({
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     });

//     const handleFeedback = (type) => {
//         setState((prevState) => ({
//             ...prevState,
//             [type]: prevState[type] + 1,
//         }));
//     };

//     const countTotalFeedback = () => {
//         return state.good + state.neutral + state.bad;
//     };

//     const countPositiveFeedbackPercentage = () => {
//         const totalFeedback = countTotalFeedback();
//         return totalFeedback === 0 ? 0 : Math.round((state.good / totalFeedback) * 100);
//     };

//     const hasFeedback = countTotalFeedback() > 0;

//     return (
//         <div>
//             <Section title="Please leave feedback">
//                 <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
//             </Section>
//             <Section title="Statistics">
//                 {hasFeedback ? (
//                     <Statistics
//                         good={state.good}
//                         neutral={state.neutral}
//                         bad={state.bad}
//                         total={countTotalFeedback()}
//                         positivePercentage={countPositiveFeedbackPercentage()}
//                     />
//                 ) : (
//                     <Notification message="There is no feedback" />
//                 )}
//             </Section>

//             <GlobalStyle />
//         </div>
//     );
// };

// export default App;




import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle ';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleFeedback = (type) => {
        this.setState((prevState) => ({
            ...prevState,
            [type]: prevState[type] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const totalFeedback = this.countTotalFeedback();
        return totalFeedback === 0 ? 0 : Math.round((this.state.good / totalFeedback) * 100);
    };

    render() {
        const totalFeedback = this.countTotalFeedback();
        const hasFeedback = totalFeedback > 0;

        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback} />
                </Section>
                <Section title="Statistics">
                    {hasFeedback ? (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={totalFeedback}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
                <GlobalStyle />
            </div>
        );
    }
}

export default App;