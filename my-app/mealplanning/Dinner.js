import React from 'react';
import { View, Text } from 'react-native';

const Dinner = ({ foodItems }) => {
  return (
    <View>
      <Text>Dinner</Text>
      {foodItems.map((foodItem, index) => (
        <Text key={index}>{foodItem}</Text>
      ))}
    </View>
  );
};

export default Dinner;