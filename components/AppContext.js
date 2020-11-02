import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export default function AppContextProvider(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [calories, setCalories] = useState(0)
  const [carbos, setCarbos] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [fats, setFats] = useState(0);

  const register = (nameText,ageText,genderText,weightText,heightText) => {
    setName(nameText)
    setAge(ageText);
    setGender(genderText);
    setWeight(weightText);
    setHeight(heightText);
  };

  useEffect(() => {
    setCalories(Math.floor(66 + (13.7*weight)+(5*height)-(6.76*age)))
    setCarbos(Math.floor(weight * 1.5));
    setProteins(Math.floor(weight*2))
    setFats(Math.floor(weight * 1.2))
  },[weight,age])

  return (
    <AppContext.Provider
      value={{
        register,
        name,
        age,
        gender,
        weight,
        height,
        calories,
        proteins,
        carbos,
        fats
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
