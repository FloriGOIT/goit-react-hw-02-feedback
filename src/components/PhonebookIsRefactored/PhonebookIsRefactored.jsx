import React from "react"
import css from "./PhonebookIsRefactored.module.css"
import {nanoid} from "nanoid";
import {ContactForm} from "../PhonebookIsRefactored/Components/ContactForm.jsx";
import {ContactList} from "../PhonebookIsRefactored/Components/ContactList.jsx";
import {Filter} from "../PhonebookIsRefactored/Components/Filter.jsx"



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
          <h3>Phonebook <i style={{fontSize: "10px"}}>(refactored)</i></h3>
          <ContactForm bringInputValue={this.addNewContact}/>

          <h3>Contacts</h3>
          <Filter valueFilter={this.handleFilter}/>
          <ContactList contactList={contacts} filterBy={filter} toDelete={this.handleDelete}/>
        </div>  )}}




