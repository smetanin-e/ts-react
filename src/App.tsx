import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oskar from './components/Oskar';

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

      <Heading>Children текст</Heading>
      <Oskar>
        <Heading>Oscar goes to L DiCaprio</Heading>
      </Oskar>
    </div>
  );
};

export default App;
