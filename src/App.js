import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const createContact = (inputName, inputPhone, inputEmail) => {
    setContacts((prev) => [...prev, {
        name: inputName,
        phone: inputPhone,
        email: inputEmail
        }
      ]
    );
  };

  const createAppointment = (inputName, inputContact, inputDate, inputTime) => {
    setAppointments((prev) => [...prev, {
        name: inputName,
        contact: inputContact,
        date: inputDate,
        time: inputTime
        }
      ]
    );
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} createContact={createContact}/> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contacts} appointments={appointments} createAppointment={createAppointment}/> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
