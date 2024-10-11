import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>Title of Appointment:</label>
      <input type='text' id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <label htmlFor='date'>Date:</label>
      <input type='date' id='date' name='date' value={date} min={getTodayString()} onChange={(e) => setDate(e.target.value)}></input>
      <label htmlFor='time'>Time:</label>
      <input type='time' id='time' name='time' value={time} onChange={(e) => setTime(e.target.value)}></input>
      
      <label htmlFor='contact'>Host:</label>
      <ContactPicker contacts={contacts} id='contact' name='contact' value={contact} setContact={setContact} />
      <button>Submit</button>
    </form>
    </>
  );
};