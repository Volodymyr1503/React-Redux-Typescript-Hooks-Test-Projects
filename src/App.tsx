import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { IState } from './models/state';

function App() {
  const [form, setForm] = useState<IState["form"]>([
    {
      name: "Resident Evil",
      rate: 9,
      review: "Interesting horror"
    },
    {
      name: "Avengers: Infinity Wars",
      rate: 10,
      review: "Nice to watch again"
    },
    {
      name: "World War Z",
      rate: 9,
      review: "I like it"
    }
  ])
  return (
    <div className="App">
      <h1 className="title">My Watch List</h1>
      <div className="form-card">
        <List form={form} />
        <Form form={form} setForm={setForm} />
      </div>
    </div>
  );
}

export default App;




















/* */