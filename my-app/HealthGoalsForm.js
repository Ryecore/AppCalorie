import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function HealthGoalsForm() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [healthGoal, setHealthGoal] = useState('');

  const isFormValid = () => {
    return age !== '' && gender !== '' && height !== '' && weight !== '' && activityLevel !== '' && healthGoal !== '';
  };

  const handleSubmit = () => {
    // Handle form submission
    if (isFormValid()) {
      // Perform data processing or submit the form
      console.log('Form submitted!');
    } else {
      console.log('Please fill in all fields.');
    }
  };

  return (
    <View>
      <Text>Age:</Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Text>Gender:</Text>
      <Picker
        selectedValue={gender}
        onValueChange={value => setGender(value)}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      <Text>Height (cm):</Text>
      <TextInput
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />

      <Text>Weight (kg):</Text>
      <TextInput
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      <Text>Activity Level:</Text>
      <Picker
        selectedValue={activityLevel}
        onValueChange={value => setActivityLevel(value)}
      >
        <Picker.Item label="Sedentary" value="sedentary" />
        <Picker.Item label="Light Exercise" value="light" />
        <Picker.Item label="Moderate Exercise" value="moderate" />
        <Picker.Item label="Heavy Exercise" value="heavy" />
        <Picker.Item label="Extra Active" value="extra" />
      </Picker>

      <Text>Health Goal:</Text>
      <Picker
        selectedValue={healthGoal}
        onValueChange={value => setHealthGoal(value)}
      >
        <Picker.Item label="Weight Loss" value="loss" />
        <Picker.Item label="Weight Maintenance" value="maintenance" />
        <Picker.Item label="Weight Gain" value="gain" />
      </Picker>

      <Text>Selected Age: {age}</Text>
      <Text>Selected Gender: {gender}</Text>
      <Text>Selected Height: {height}</Text>
      <Text>Selected Weight: {weight}</Text>
      <Text>Selected Activity Level: {activityLevel}</Text>
      <Text>Selected Health Goal: {healthGoal}</Text>

      <Button title="Submit" onPress={handleSubmit} disabled={!isFormValid()} />
    </View>
  );
}

export default HealthGoalsForm;
