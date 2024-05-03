import {FeedbackWidget} from "./FeedbackWidget/feedbackWidget.jsx"
import {Phonebook} from "./Phonebook/Phonebook.jsx"
import {PhonebookIsRefactored} from "../components/PhonebookIsRefactored/PhonebookIsRefactored.jsx"

export const App = () => 
{
  return (
    <>
      <h2>Hello beautiful world of programming</h2>
      <h1 style={{marginLeft: 600}}>! ! !</h1>

      <div className="all">
        <br/>
        <FeedbackWidget />
        <br/>
        <Phonebook />
        <br/>
        <PhonebookIsRefactored />
      </div>
    </>
         );
};
