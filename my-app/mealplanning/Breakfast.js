import React from 'react';
import { View, Text } from 'react-native';

const Breakfast = ({ foodItems }) => {
  return (
    <View>
      <Text>Breakfast</Text>
      {foodItems.map((foodItem, index) => (
        <Text key={index}>{foodItem}</Text>
      ))}
    </View>
  );
};

export default Breakfast;