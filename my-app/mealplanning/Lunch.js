import React from 'react';
import { View, Text } from 'react-native';

const Lunch = ({ foodItems }) => {
  return (
    <View>
      <Text>Lunch</Text>
      {foodItems.map((foodItem, index) => (
        <Text key={index}>{foodItem}</Text>
      ))}
    </View>
  );
};

export default Lunch;