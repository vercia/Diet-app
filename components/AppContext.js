import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export default function AppContextProvider(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [calories, setCalories] = useState(0);
  const [carbos, setCarbos] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [fats, setFats] = useState(0);
  const [eatenCalories, setEatenCalories] = useState(0);
  const [eatenCarbos, setEatenCarbos] = useState(0);
  const [eatenProteins, setEatenProteins] = useState(0);
  const [eatenFats, setEatenFats] = useState(0);
  const [progress, setProgress] = useState(0);

  const submitForm = (ageText, genderText, weightText, heightText) => {
    setAge(ageText);
    setGender(genderText);
    setWeight(weightText);
    setHeight(heightText);
  };

  const register = (nameText) => {
    setName(nameText);
  };

  useEffect(() => {
    setCalories(Math.floor(66 + 13.7 * weight + 5 * height - 6.76 * age));
    setCarbos(Math.floor(weight * 1.5));
    setProteins(Math.floor(weight * 2));
    setFats(Math.floor(weight * 1.2));
  }, [weight, age]);

  useEffect(() => {
    setProgress(eatenCalories / calories);
  }, [eatenCalories]);

  const eatenMeal = (calories, carbos, proteins, fats) => {
    setEatenCalories(Math.floor(eatenCalories + calories));
    setEatenCarbos(Math.floor(eatenCarbos + carbos));
    setEatenProteins(Math.floor(eatenProteins + proteins));
    setEatenFats(Math.floor(eatenFats + fats));
  };

  const submitEdit = (item,func) => {
    func(item)
  }

  return (
    <AppContext.Provider
      value={{
        register,
        submitForm,
        name,
        age,
        gender,
        weight,
        height,
        calories,
        proteins,
        carbos,
        fats,
        eatenCalories,
        eatenCarbos,
        eatenProteins,
        eatenFats,
        eatenMeal,
        progress,
        submitEdit,
        setAge,
        setHeight,
        setWeight
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
