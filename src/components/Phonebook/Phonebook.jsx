import css from "../Phonebook/Phonebook.module.css";
import React from "react";

export class Phonebook extends React.Component
{
  state = {contacts: [], name: ''};

 render()
  {return (<section className={css.wraperPhonebook}>
              <h3 className={css.titlePhonebook}>Phonebook</h3>

              <form className={css.addWrapper}>
                <label htmlFor="userId"> Name </label>
                <input
                   type="text"
                   name="name"
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                   required/>

                <label htmlFor="phoneId"> Number </label>
                <input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required/>
                
                <button type="submit">Add contact</button>
              </form>
              
              <div className={css.searchWrapper}>
                <h3>Contacts</h3>
                <label>Find contacts name </label>
                <input type="text" id="searchId" name="search"/>
                <ul className={css.list}>
                    <li className={css.listItem} key="0">
                      <span>Ana: 123-45-67 </span>
                      <button type="button" className={css.delete}>Delete</button>
                    </li>
                    <li className={css.listItem} key="1">
                      <span>Ana: 123-45-67 </span>
                      <button type="button" className={css.delete}>Delete</button>
                    </li>
                    <li className={css.listItem} key="2">
                      <span>Ana: 123-45-67 </span>
                      <button type="button" className={css.delete}>Delete</button>
                    </li>
                </ul>
              </div>

           </section>)} 
}
