import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [photo, setPhoto] = useState(null);

  const submitForm = (ageText, genderText, weightText, heightText) => {
    setAge(ageText);
    setGender(genderText);
    setWeight(weightText);
    setHeight(heightText);
    formData(ageText, genderText, weightText, heightText);
  };

  const register = (nameText) => {
    setName(nameText);
    registrationData(nameText);
  };

  useEffect(() => {
    setCalories(Math.floor(66 + 13.7 * weight + 5 * height - 6.76 * age));
    setCarbos(Math.floor(weight * 1.5));
    setProteins(Math.floor(weight * 2));
    setFats(Math.floor(weight * 1.2));
  }, [weight, age, height]);

  useEffect(() => {
    setProgress(eatenCalories / calories);
  }, [eatenCalories]);

  const eatenMeal = (calories, carbos, proteins, fats) => {
    setEatenCalories(Math.floor(eatenCalories + calories));
    setEatenCarbos(Math.floor(eatenCarbos + carbos));
    setEatenProteins(Math.floor(eatenProteins + proteins));
    setEatenFats(Math.floor(eatenFats + fats));
  };

  const submitEdit = (item, func, keyValue, value) => {
    func(item);
    editData(keyValue, value);
  };

  //registration async
  const registrationData = async (nameText) => {
    try {
      await AsyncStorage.setItem('NAME_KEY', nameText);
    } catch (e) {
      alert(e);
    }
  };

  const getRegistrationData = async () => {
    try {
      const name = await AsyncStorage.getItem('NAME_KEY');
      if (name !== null) {
        setName(name);
      }
    } catch (e) {
      alert(e);
    }
  };

  //form async
  const formData = async (ageText, genderText, weightText, heightText) => {
    try {
      await AsyncStorage.setItem('AGE_KEY', ageText);
      await AsyncStorage.setItem('GENDER_KEY', genderText);
      await AsyncStorage.setItem('WEIGHT_KEY', weightText);
      await AsyncStorage.setItem('HEIGHT_KEY', heightText);
    } catch (e) {
      alert(e);
    }
  };

  const getFormData = async () => {
    try {
      const age = await AsyncStorage.getItem('AGE_KEY');
      const gender = await AsyncStorage.getItem('GENDER_KEY');
      const weight = await AsyncStorage.getItem('WEIGHT_KEY');
      const height = await AsyncStorage.getItem('HEIGHT_KEY');
      if (age !== null) {
        setAge(age);
        setGender(gender);
        setWeight(weight);
        setHeight(height);
      }
    } catch (e) {
      alert(e);
    }
  };

  //edit data async
  const editData = async (keyValue, value) => {
    try {
      await AsyncStorage.setItem(keyValue, value);
    } catch (e) {
      alert(e);
    }
  };

  //progress async
  // const progressData = async (calories, carbos, proteins, fats) => {
  //   try {
  //     await AsyncStorage.setItem('CALORIES_KEY', calories);
  //     await AsyncStorage.setItem('CARBOS_KEY', carbos);
  //     await AsyncStorage.setItem('PROTEINS_KEY', proteins);
  //     await AsyncStorage.setItem('FATS_KEY', fats);
  //   } catch (e) {
  //     alert(e);
  //   }
  // };

  // const getProgressData = async () => {
  //   try {
  //     const calories = await AsyncStorage.getItem('CALORIES_KEY');
  //     const carbos = await AsyncStorage.getItem('CARBOS_KEY');
  //     const proteins = await AsyncStorage.getItem('PROTEINS_KEY');
  //     const fats = await AsyncStorage.getItem('FATS_KEY');
  //     if (calories !== null) {
  //       setCalories(calories);
  //       setCarbos(carbos);
  //       setProteins(proteins);
  //       setFats(fats);
  //     }
  //   } catch (e) {
  //     alert(e);
  //   }
  // };

  //image async
  const photoData = async (photo) => {
    try {
      await AsyncStorage.setItem('PHOTO_KEY', photo);
    } catch (e) {
      alert(e);
    }
  };

  const getPhotoData = async () => {
    try {
      const photo = await AsyncStorage.getItem('PHOTO_KEY');
      if (photo !== null) {
        setPhoto(photo);
      }
    } catch (e) {
      alert(e);
    }
  };


  useEffect(() => {
    getRegistrationData();
    getFormData();
    getPhotoData();
  }, []);

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
        setWeight,
        photo,
        setPhoto,
        photoData
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
