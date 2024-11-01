import React from 'react';
import { useParams } from 'react-router-dom';

const people = [
  { id: "1", name: "Jan Kowalski", age: 30, occupation: "Developer" },
  { id: "2", name: "Anna Nowak", age: 25, occupation: "Designer" },
  { id: "3", name: "Piotr Wiśniewski", age: 40, occupation: "Manager" },
];

function Lab2() {
  const { id } = useParams();

  if (!id) {
    return <p>Brak identyfikatora osoby.</p>;
  }

  const person = people.find((p) => p.id === id);

  if (!person) {
    return <p>Nie znaleziono osoby o tym identyfikatorze.</p>;
  }

  return (
    <div>
      <h1>Profil osoby</h1>
      <p>Imię: {person.name}</p>
      <p>Wiek: {person.age}</p>
      <p>Zawód: {person.occupation}</p>
    </div>
  );
}

export default Lab2;
