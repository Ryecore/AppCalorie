import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
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

  const getTotalCalories = (day) => {
    const { Breakfast, Lunch, Dinner, Snack } = mealPlan[day];
    let totalCalories = 0;
  
    // Calculer les calories du petit-déjeuner
    Breakfast.forEach((foodItem) => {
      totalCalories += foodItem.calories;
    });
  
    // Calculer les calories du déjeuner
    Lunch.forEach((foodItem) => {
      totalCalories += foodItem.calories;
    });
  
    // Calculer les calories du dîner
    Dinner.forEach((foodItem) => {
      totalCalories += foodItem.calories;
    });
  
    // Calculer les calories des collations
    Snack.forEach((foodItem) => {
      totalCalories += foodItem.calories;
    });
  
    return totalCalories;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Meal Planner</Text>

      <View style={styles.dayContainer}>
  <Text style={styles.dayTitle}>Lundi</Text>
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
    removeFoodItem={(foodItem) => removeFoodItem('Lundi', 'Dinner', foodItrem)}
  />
  <Snack
    foodItems={mealPlan.Lundi.Snack}
    removeFoodItem={(foodItem) => removeFoodItem('Lundi', 'Snack', foodItem)}
  />
  <Text style={styles.calories}>Total Calories: {getTotalCalories('Lundi')}</Text>
</View>

{/* Répétez le même schéma pour les autres jours de la semaine */}
<View style={styles.dayContainer}>
  <Text style={styles.dayTitle}>Mardi</Text>
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
  <Text style={styles.calories}>Total Calories: {getTotalCalories('Mardi')}</Text>
</View>

{/* Répétez le même schéma pour les autres jours de la semaine */}
<View style={styles.dayContainer}>
  <Text style={styles.dayTitle}>Mercredi</Text>
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
  <Text style={styles.calories}>Total Calories: {getTotalCalories('Mercredi')}</Text>
</View>

{/* Répétez le même schéma pour les autres jours de la semaine */}
<View style={styles.dayContainer}>
  <Text style={styles.dayTitle}>Jeudi</Text>
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
  <Text style={styles.calories}>Total Calories: {getTotalCalories('Jeudi')}</Text>
</View>

{/* Répétez le même schéma pour les autres jours de la semaine */}
<View style={styles.dayContainer}>
  <Text style={styles.dayTitle}>Vendredi</Text>
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
  <Text style={styles.calories}>Total Calories: {getTotalCalories('Vendredi')}</Text>
</View>

{/* Répétez le même schéma pour les autres jours de la semaine */}
<View style={styles.dayContainer}>
  <Text style={styles.dayTitle}>Samedi</Text>
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
  <Text style={styles.calories}>Total Calories: {getTotalCalories('Samedi')}</Text>
</View>

{/* Répétez le même schéma pour les autres jours de la semaine */}
<View style={styles.dayContainer}>
  <Text style={styles.dayTitle}>Dimanche</Text>
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
  <Text style={styles.calories}>Total Calories: {getTotalCalories('Dimanche')}</Text>
</View>
  
        {/* Afficher le total des calories pour chaque repas */}
        
  
        {/* Bouton pour accéder à l'écran de recherche de la base de données alimentaire */}
        <Button title="Ajouter un aliment" onPress={navigateToFoodDatabase} />
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    dayContainer: {
      marginBottom: 16,
    },
    dayTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    caloriesContainer: {
      marginTop: 16,
    },
    caloriesText: {
      fontSize: 16,
      marginBottom: 4,
    },
  });
  
  export default MealPlanner;