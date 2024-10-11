import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
      <label htmlFor='phone'>Phone: (11 digits long)</label>
      <input type='tel' pattern="((0|44|\+44|\+44\s*\(0\)|\+44\s*0)\s*)?7(\s*[0-9]){9}" placeholder="Enter a valid UK phone number" id='phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
      <label htmlFor='email'>Email:</label>
      <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

