import React from "react"
import css from "./PhonebookIsRefactored.module.css"
import {nanoid} from "nanoid"

class ContactForm extends React.Component
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





function Filter({ valueFilter }) 
{
  const handleFilterrr = (e) => {let inputFilter = e.target.value;
                                 valueFilter(inputFilter)};

  return (
    <label className={css.filter}>
      Find contacts by name:<br />
      <input type="text" onChange={handleFilterrr} />
    </label>
  );
}



function ContactList({contactList, filterBy,toDelete})
{let filteredList = contactList.filter(contact => contact.name.toLowerCase().includes(filterBy.toLowerCase()));
  
  return(<ul className={css.contactList}>
            {filterBy === "" && contactList.map((contactItem, index, array) => <li key={contactItem.id} >
                                                <span><b>{index+1}.</b> {contactItem.name}:  {contactItem.number}</span>
                                                <button type="button" onClick={() => toDelete(contactItem.id)}>Delete</button>
                                            </li> )}
            {filterBy !== "" && filteredList.map((contactItem, index, array) => <li key={contactItem.id} >
                                                <span><b>{index+1}.</b> {contactItem.name}:  {contactItem.number}</span>
                                                <button type="button" onClick={() => toDelete(contactItem.id)}>Delete</button>
                                            </li> )}                                
        </ul>)}






export class PhonebookIsRefactored extends React.Component
{
  state = {contacts: [],
           filter: ''};

  addNewContact = ({name, number}) => {let isDuplicate = this.state.contacts.some(contact => name.toLowerCase() === contact.name.toLowerCase())
                                       if (isDuplicate){alert(`${name} is already in your contact list`)}
                                       else{let newContact = {id: nanoid(), name: name, number: number};
                                            this.setState({contacts: [...this.state.contacts, newContact]})}}
                                               
  handleFilter = (inputFilter) => {this.setState({filter : `${inputFilter}`})
                                   console.log("filter : ",this.state.filter)}
   
  handleDelete = (id) => {this.setState({contacts: this.state.contacts.filter(contact => contact.id !== id)})}                             

  render(){

   const {contacts, filter} = this.state 
    
   return(
        <div className={css.wrapperPhone}>
          <h3>Phonebook</h3>
          <ContactForm bringInputValue={this.addNewContact}/>

          <h3>Contacts</h3>
          <Filter valueFilter={this.handleFilter}/>
          <ContactList contactList={contacts} filterBy={filter} toDelete={this.handleDelete}/>
        </div>  )}}




