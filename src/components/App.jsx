import css from './App.module.css';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { TotalContacts } from './totalContact/totalContact';

export default function App() {
  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <TotalContacts />
        <ContactsList></ContactsList>
      </Section>
    </div>
  );
}
