import React from "react"
import css from "./ContactForm.module.css"
import {PropTypes} from "prop-types";

export class ContactForm extends React.Component
{
  state = {name: "", number: ""};
  handleInputChange = e => {const {name, value} = e.target;
                            function upperFirstLetter(el){return el.toUpperCase()};
                            function capitalize(string){return string.replace(/\b\w/g, upperFirstLetter)};
                            let firstLetterUpper = capitalize(value);
                            this.setState({[name]:firstLetterUpper});
                            console.log(this.state)};
  handleSubmitInput = (e) => {e.preventDefault();
                              let form = e.currentTarget;
                              this.props.bringInputValue(this.state);
                              form.reset()}

  render(){
  return(<form className={css.form} onSubmit={this.handleSubmitInput}>
              <label htmlFor="nameId">Name</label>
              <input type="text"
                     id="nameID"
                     name="name"
                     pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                     required onChange={this.handleInputChange}/>

              <label htmlFor="numberId">Numer</label>
              <input type="tel"
                     id="numberID"
                     name="number"
                     pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required onChange={this.handleInputChange}/>
              <button type="submit">Add contact</button>
         </form>
)}}

ContactForm.propTypes = {bringInputValue: PropTypes.func.isRequired}