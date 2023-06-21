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
  
    const handleSubmit = () => {
      // Logique de traitement des données du formulaire ici
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
          onValueChange={setGender}
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
          onValueChange={setActivityLevel}
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
          onValueChange={setHealthGoal}
        >
          <Picker.Item label="Weight Loss" value="loss" />
          <Picker.Item label="Weight Maintenance" value="maintenance" />
          <Picker.Item label="Weight Gain" value="gain" />
        </Picker>
  
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    );
  }
  
  export default HealthGoalsForm;
  