import React from 'react';
import { View, Text } from 'react-native';

const Snack = ({ foodItems }) => {
  return (
    <View>
      <Text>Snack</Text>
      {foodItems.map((foodItem, index) => (
        <Text key={index}>{foodItem}</Text>
      ))}
    </View>
  );
};

export default Snack;