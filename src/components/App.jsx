import {FeedbackWidget} from "./FeedbackWidget/feedbackWidget.jsx"
import {Phonebook} from "./Phonebook/Phonebook.jsx"

export const App = () => 
{
  return (
    <>
      <h2>Hello beautiful world of programming</h2>

      <div className="all">
        <br/>
        <FeedbackWidget />
        <br/>
        <Phonebook />
      </div>
    </>
         );
};
