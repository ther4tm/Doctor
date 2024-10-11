import React from "react";

export const ContactPicker = ({contacts, setContact, value, name}) => {

  return (
    <>
      <select name={name} value={value} onChange={(e) => setContact(e.target.value)}>
        <option value="">No Contact Selected</option>
        {contacts.map((item) => (
              <option value={item.name}>{item.name}</option>
            )
          )
        };
      </select>
    </>
  );
};