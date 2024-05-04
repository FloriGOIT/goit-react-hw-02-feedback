
import css from "../Phonebook/Phonebook.module.css";
import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types"

export class Phonebook extends React.Component
{
   state = {name: '', number: '',filter: '',
            contacts:  []}

    handleInputs = (e) => {e.preventDefault();
                           let form = e.currentTarget;
                           let eventName = form.elements.name.value;
                           let eventNumber = form.elements.number.value;
                           let newContact = {id: nanoid(), name: eventName, number: eventNumber};
                           let hasDuplicate = this.state.contacts.some(contact => contact.name === eventName)
                           if(hasDuplicate){alert(`${eventName} is already in your contact list`)}
                           else {this.setState(previousState => {let accList = [...previousState.contacts];
                                                                 accList.push(newContact);
                                                                 return {contacts: accList}})}
                           form.reset();}

    handleSearch = (e) => {let isFilter = e.target.value;
                           this.setState({filter: isFilter.toLowerCase()});
                           console.log(isFilter)}
    handleDelete = (param) => {this.setState(previousState => ({contacts: previousState.contacts.filter(contact=> contact.id !== param)}))}
 
 render()
  { const {filter, contacts} = this.state;
    let filtered = contacts.filter(contact => contact.name.toLowerCase().includes(`${filter}`));

    return (
      <section className={css.wraperPhonebook}>
        <h3 className={css.titlePhonebook}>Phonebook <i style={{fontSize: "10px"}}>(NOT refactored)</i></h3>

        <form className={css.addWrapper} onSubmit={this.handleInputs}>
          <label htmlFor="userName"> Name </label>
          <input type="text"
                 name="name"
                 id="userName"
                 pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                 required/>

          <label htmlFor="phoneId"> Number </label>
          <input type="tel"
                 name="number"
                 id="phoneId"
                 pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +, between 9-15 digits"
                 required/>

          <button type="submit">Add contact</button>
        </form>

        <div className={css.searchWrapper}>
          <h3>Contacts</h3>
          <label>Find contacts name </label>
          <input type="text" id="searchId" name="search" onChange={this.handleSearch}/>
          <ul className={css.list}>
            {filter === "" && contacts.map(contact => <li className={css.listItem} key={contact.id}>
                                                          <span>{contact.name}: {contact.number} </span>
                                                          <button type="button" className={css.delete} onClick={()=> this.handleDelete(contact.id)}>
                                                            Delete
                                                          </button>
                                                      </li>)}
            {filter !== "" && filtered.map(contact => <li  className={css.listItem} key={contact.id}>
                                                          <span>{contact.name}: {contact.number} </span>
                                                          <button type="button" className={css.delete} onClick={()=> this.handleDelete(contact.id)}>
                                                            Delete
                                                          </button>
                                                        </li>)}   
          </ul>
        </div>
      </section>
    );
  } 
}


Phonebook.propTypes = {name:  PropTypes.string,
                       number: PropTypes.string,
                       filter: PropTypes.string,
                       contacts: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string,
                                                                    name:  PropTypes.string,
                                                                    number: PropTypes.string,}))}