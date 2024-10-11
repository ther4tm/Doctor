import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  const userInput = name;
  const { contacts, createContact } = props;

  useEffect(() => {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name === userInput) {
        setDuplicate(true);
      };
    };
  }, [userInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duplicate === false) {
      createContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    } else {
      alert('This name already exists.');
    }
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>
      </section>
    </div>
  );
};
