import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oskar from './components/Oskar';
import Button from './components/Button';
import Input from './components/Input';
import { log } from 'node:console';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import Counter from './components/state/Counter';

const App = () => {
  const personName = {
    first: 'Evgeniy',
    last: 'Smetanin',
  };

  const nameList = [
    {
      first: 'Evgeniy',
      last: 'Smetanin',
    },
    {
      first: 'Egor',
      last: 'Smetanin',
    },
    {
      first: 'Sophia',
      last: 'Smetanina',
    },
  ];

  return (
    <div className='App'>
      {/* <Greet name='Jeki' messageCount={8} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='success' /> */}

      {/* <Heading>Children текст</Heading>
      <Oskar>
        <Heading>Oscar goes to L DiCaprio</Heading>
      </Oskar>

      <Button handleClick={(event, id) => console.log('button clicked', event.target, id)} />
      <Input value='' handleChange={(event) => console.log(event.target)} /> */}

      <Container styles={{ border: '1px solid black', padding: '1rem' }} />

      {/* <LoggedIn /> */}
      {/* <User /> */}
      <Counter />
    </div>
  );
};

export default App;
