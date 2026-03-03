import { createContext, useState } from "react";
import { getContacts } from "../services/contactsService";

export const ContactsContext = createContext({
  contacts: [],
  setContactsState: () => {},
  favorite_name: ''
});

const ContactsContextProvider = ({ children }) => {
  const contacts = getContacts();
  const [contactsState, setContactsState] = useState(contacts);

  const provider_values = {
    contacts: contactsState,
    setContactsState,
    favorite_name: ''
  };

  return (
    <ContactsContext.Provider value={provider_values}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContextProvider;