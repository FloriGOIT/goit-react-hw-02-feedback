
import React from 'react';
import css from '../FeedbackWidget/feedbackWidget.module.css'
import PropTypes from "prop-types"

function Section({children})
{return(
        <div className={css.wrapperFeedback}>
            <h3>Please leave feedback</h3>
            {children}
        </div>
           )}
Section.propTypes = {children: PropTypes.node}



function FeedbackOptions({options, onLeaveFeedback})
{return(<>
            <button type='button' name={Object.keys(options)[0]} onClick={onLeaveFeedback} > Good </button>
            <button type='button' name={Object.keys(options)[1]} onClick={onLeaveFeedback} > Neutral </button>
            <button type='button' name={Object.keys(options)[2]} onClick={onLeaveFeedback} > Bad </button>
        </>)}
FeedbackOptions.propTypes = {options: PropTypes.object,
                             onLeaveFeedback: PropTypes.func}


function Statistics({goodi, badi, neutrali, totali, positivePercentagei})
{return(
        <div className={css.wrapperlist}>
            <h4>Statistics</h4>
            <ul>
                <li name="good">Good:
                    <span>{goodi}</span>
                </li>
                <li name="neutral">Neutral:
                    <span>{neutrali}</span>
                </li>
                <li name="bad">Bad:
                    <span>{badi}</span>
                </li>
                <li name="total">Total:
                    <span>{totali}</span>
                 </li>
                <li name="positiveFeedback">Positive feedback:
                    <span>{positivePercentagei} %</span>
                </li>
            </ul>
        </div>
          )}
Statistics.propTypes = {goodi: PropTypes.number, badi: PropTypes.number, neutrali: PropTypes.number, totali: PropTypes.number, positivePercentagei: PropTypes.number}



export class FeedbackWidget extends React.Component
{ state = {good: 0, neutral:0, bad:0};
  handleOptions = (e) => {console.log("ana are mere");
                          let option = e.target.name;
                          console.log(option);
                          this.setState({[option]: this.state[option] + 1})}
  render()
  {
    const {good, neutral, bad} = this.state;
    function countTotalFeedback(){return good + neutral + bad};
    let TOTAL = countTotalFeedback();
    function countPositiveFeedbackPercentage(){return (good / TOTAL) * 100};
    const PERCENTAGE = countPositiveFeedbackPercentage();
    let roundedPerc = Math.round(PERCENTAGE)

   return (
       <Section title="wrapperFeedback" >
            <FeedbackOptions options={this.state} onLeaveFeedback={this.handleOptions}/>
            {TOTAL !== 0 && <Statistics goodi={good} neutrali={neutral} badi={bad} totali={TOTAL} positivePercentagei={roundedPerc}/>}
            {TOTAL === 0 && <h5 className={css.placeholderList}>No feedback given</h5>}
       </Section>
          )
  }
}

