import React from "react";
import css from "./ContactList.module.css"
import PropTypes from 'prop-types'

export function ContactList({contactList, filterBy,toDelete})
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


ContactList.propTypes = {contactList: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string,
                                                                         name: PropTypes.string,
                                                                         number: PropTypes.string})),
                         filterBy: PropTypes.string,
                         toDelete: PropTypes.func}