
import css from "../Phonebook/Phonebook.module.css";
import React from "react";
import { nanoid } from "nanoid";

export class Phonebook extends React.Component
{
   state = {
            name: '', number: '',filter: '',
            contacts:  [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
                        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
                        {id: 'id-3', name: 'Rosie Clements', number: '645-17-79'},
                        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]
           }

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
                           console.log(this.state.filter)}

    handleDelete = (e) => {let liToDelete = e.target.parentNode;
                           console.log(liToDelete)}                  

   
 render()
  { const {filter, contacts} = this.state;
    let filtered = contacts.filter(contact => contact.name.includes(`${filter}`));
    let markup = contacts.map(contact => <li className={css.listItem} key={contact.id}>
                                            <span>{contact.name}: {contact.number} </span>
                                            <button type="button" className={css.delete} onClick={this.handleDelete}>
                                              Delete
                                            </button>
                                         </li>)
    
    return (
      <section className={css.wraperPhonebook}>
        <h3 className={css.titlePhonebook}>Phonebook</h3>

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
            {markup}
            {filter !== "" && filtered.map(contact => <li  className="listItem" id={contact.id}>
                                                          <span>{contact.name}: {contact.number} </span>
                                                          <button type="button" className={css.delete} onClick={this.handleDelete}>
                                                            Delete
                                                          </button>
                                                        </li>)}   
          </ul>
        </div>
      </section>
    );
  } 
}