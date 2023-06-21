import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Snack from './Snack';

const MealPlanner = () => {
  const navigation = useNavigation();
  const [mealPlan, setMealPlan] = useState({
    Lundi: {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Snack: [],
    },
    Mardi: {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Snack: [],
    },
    Mercredi: {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Snack: [],
    },
    Jeudi: {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Snack: [],
    },
    Vendredi: {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Snack: [],
    },
    Samedi: {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Snack: [],
    },
    Dimanche: {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Snack: [],
    },
  });

  const addFoodItem = (day, mealType, foodItem) => {
    setMealPlan((prevMealPlan) => ({
      ...prevMealPlan,
      [day]: {
        ...prevMealPlan[day],
        [mealType]: [...prevMealPlan[day][mealType], foodItem],
      },
    }));
  };

  const removeFoodItem = (day, mealType, foodItem) => {
    setMealPlan((prevMealPlan) => ({
      ...prevMealPlan,
      [day]: {
        ...prevMealPlan[day],
        [mealType]: prevMealPlan[day][mealType].filter((item) => item !== foodItem),
      },
    }));
  };

  const navigateToFoodDatabase = () => {
    navigation.navigate('FoodDatabase', {
      onFoodItemSelect: (day, mealType, foodItem) => addFoodItem(day, mealType, foodItem),
    });
  };

  const calculateTotalCalories = (day, mealType) => {
    let totalCalories = 0;
    mealPlan[day][mealType].forEach((foodItem) => {
      totalCalories += foodItem.calories;
    });
    return totalCalories;
  };

  return (
    <View>
      <Text>Meal Planner</Text>
      <View>
        <Text>Lundi</Text>
        <Breakfast
          foodItems={mealPlan.Lundi.Breakfast}
          removeFoodItem={(foodItem) => removeFoodItem('Lundi', 'Breakfast', foodItem)}
        />
        <Lunch
          foodItems={mealPlan.Lundi.Lunch}
          removeFoodItem={(foodItem) => removeFoodItem('Lundi', 'Lunch', foodItem)}
        />
        <Dinner
          foodItems={mealPlan.Lundi.Dinner}
          removeFoodItem={(foodItem) => removeFoodItem('Lundi', 'Dinner', foodItem)}
        />
        <Snack
          foodItems={mealPlan.Lundi.Snack}
          removeFoodItem={(foodItem) => removeFoodItem('Lundi', 'Snack', foodItem)}
        />
        <Text>
          Total Calories: {calculateTotalCalories('Lundi', 'Breakfast')}
          {' '}
          + {calculateTotalCalories('Lundi', 'Lunch')}
          {' '}
          + {calculateTotalCalories('Lundi', 'Dinner')}
          {' '}
          + {calculateTotalCalories('Lundi', 'Snack')}
        </Text>
      </View>

      <View>
      <Text>Mardi</Text>
        <Breakfast
          foodItems={mealPlan.Mardi.Breakfast}
          removeFoodItem={(foodItem) => removeFoodItem('Mardi', 'Breakfast', foodItem)}
        />
        <Lunch
          foodItems={mealPlan.Mardi.Lunch}
          removeFoodItem={(foodItem) => removeFoodItem('Mardi', 'Lunch', foodItem)}
        />
        <Dinner
          foodItems={mealPlan.Mardi.Dinner}
          removeFoodItem={(foodItem) => removeFoodItem('Mardi', 'Dinner', foodItem)}
        />
        <Snack
          foodItems={mealPlan.Mardi.Snack}
          removeFoodItem={(foodItem) => removeFoodItem('Mardi', 'Snack', foodItem)}
        />
        <Text>
          Total Calories: {calculateTotalCalories('Mardi', 'Breakfast')}
          {' '}
          + {calculateTotalCalories('Mardi', 'Lunch')}
          {' '}
          + {calculateTotalCalories('Mardi', 'Dinner')}
          {' '}
          + {calculateTotalCalories('Mardi', 'Snack')}
        </Text>
      </View>

      <View>
      <Text>Mercredi</Text>
        <Breakfast
          foodItems={mealPlan.Mercredi.Breakfast}
          removeFoodItem={(foodItem) => removeFoodItem('Mercredi', 'Breakfast', foodItem)}
        />
        <Lunch
          foodItems={mealPlan.Mercredi.Lunch}
          removeFoodItem={(foodItem) => removeFoodItem('Mercredi', 'Lunch', foodItem)}
        />
        <Dinner
          foodItems={mealPlan.Mercredi.Dinner}
          removeFoodItem={(foodItem) => removeFoodItem('Mercredi', 'Dinner', foodItem)}
        />
        <Snack
          foodItems={mealPlan.Mercredi.Snack}
          removeFoodItem={(foodItem) => removeFoodItem('Mercredi', 'Snack', foodItem)}
        />
        <Text>
          Total Calories: {calculateTotalCalories('Mercredi', 'Breakfast')}
          {' '}
          + {calculateTotalCalories('Mercredi', 'Lunch')}
          {' '}
          + {calculateTotalCalories('Mercredi', 'Dinner')}
          {' '}
          + {calculateTotalCalories('Mercredi', 'Snack')}
        </Text>
      </View>

      <View>
      <Text>Jeudi</Text>
        <Breakfast
          foodItems={mealPlan.Jeudi.Breakfast}
          removeFoodItem={(foodItem) => removeFoodItem('Jeudi', 'Breakfast', foodItem)}
        />
        <Lunch
          foodItems={mealPlan.Jeudi.Lunch}
          removeFoodItem={(foodItem) => removeFoodItem('Jeudi', 'Lunch', foodItem)}
        />
        <Dinner
          foodItems={mealPlan.Jeudi.Dinner}
          removeFoodItem={(foodItem) => removeFoodItem('Jeudi', 'Dinner', foodItem)}
        />
        <Snack
          foodItems={mealPlan.Jeudi.Snack}
          removeFoodItem={(foodItem) => removeFoodItem('Jeudi', 'Snack', foodItem)}
        />
        <Text>
          Total Calories: {calculateTotalCalories('Jeudi', 'Breakfast')}
          {' '}
          + {calculateTotalCalories('Jeudi', 'Lunch')}
          {' '}
          + {calculateTotalCalories('Jeudi', 'Dinner')}
          {' '}
          + {calculateTotalCalories('Jeudi', 'Snack')}
        </Text>
      </View>

      <View>
      <Text>Vendredi</Text>
        <Breakfast
          foodItems={mealPlan.Vendredi.Breakfast}
          removeFoodItem={(foodItem) => removeFoodItem('Vendredi', 'Breakfast', foodItem)}
        />
        <Lunch
          foodItems={mealPlan.Vendredi.Lunch}
          removeFoodItem={(foodItem) => removeFoodItem('Vendredi', 'Lunch', foodItem)}
        />
        <Dinner
          foodItems={mealPlan.Vendredi.Dinner}
          removeFoodItem={(foodItem) => removeFoodItem('Vendredi', 'Dinner', foodItem)}
        />
        <Snack
          foodItems={mealPlan.Vendredi.Snack}
          removeFoodItem={(foodItem) => removeFoodItem('Vendredi', 'Snack', foodItem)}
        />
        <Text>
          Total Calories: {calculateTotalCalories('Vendredi', 'Breakfast')}
          {' '}
          + {calculateTotalCalories('Vendredi', 'Lunch')}
          {' '}
          + {calculateTotalCalories('Vendredi', 'Dinner')}
          {' '}
          + {calculateTotalCalories('Vendredi', 'Snack')}
        </Text>
      </View>

      <View>
      <Text>Samedi</Text>
        <Breakfast
          foodItems={mealPlan.Samedi.Breakfast}
          removeFoodItem={(foodItem) => removeFoodItem('Samedi', 'Breakfast', foodItem)}
        />
        <Lunch
          foodItems={mealPlan.Samedi.Lunch}
          removeFoodItem={(foodItem) => removeFoodItem('Samedi', 'Lunch', foodItem)}
        />
        <Dinner
          foodItems={mealPlan.Samedi.Dinner}
          removeFoodItem={(foodItem) => removeFoodItem('Samedi', 'Dinner', foodItem)}
        />
        <Snack
          foodItems={mealPlan.Samedi.Snack}
          removeFoodItem={(foodItem) => removeFoodItem('Samedi', 'Snack', foodItem)}
        />
        <Text>
          Total Calories: {calculateTotalCalories('Samedi', 'Breakfast')}
          {' '}
          + {calculateTotalCalories('Samedi', 'Lunch')}
          {' '}
          + {calculateTotalCalories('Samedi', 'Dinner')}
          {' '}
          + {calculateTotalCalories('Samedi', 'Snack')}
        </Text>
      </View>

      <View>
      <Text>Dimanche</Text>
        <Breakfast
          foodItems={mealPlan.Dimanche.Breakfast}
          removeFoodItem={(foodItem) => removeFoodItem('Dimanche', 'Breakfast', foodItem)}
        />
        <Lunch
          foodItems={mealPlan.Dimanche.Lunch}
          removeFoodItem={(foodItem) => removeFoodItem('Dimanche', 'Lunch', foodItem)}
        />
        <Dinner
          foodItems={mealPlan.Dimanche.Dinner}
          removeFoodItem={(foodItem) => removeFoodItem('Dimanche', 'Dinner', foodItem)}
        />
        <Snack
          foodItems={mealPlan.Dimanche.Snack}
          removeFoodItem={(foodItem) => removeFoodItem('Dimanche', 'Snack', foodItem)}
        />
        <Text>
          Total Calories: {calculateTotalCalories('Dimanche', 'Breakfast')}
          {' '}
          + {calculateTotalCalories('Dimanche', 'Lunch')}
          {' '}
          + {calculateTotalCalories('Dimanche', 'Dinner')}
          {' '}
          + {calculateTotalCalories('Dimanche', 'Snack')}
        </Text>
      </View>
    </View>
  );
};

export default MealPlanner;
