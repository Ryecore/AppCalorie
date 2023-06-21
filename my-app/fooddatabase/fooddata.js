import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { searchFood } from './nutritionx_api';

function FoodDatabase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [caloriesList, setCaloriesList] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    console.log('Recherche:', searchQuery);
    try {
      const foodData = await searchFood(searchQuery);
      console.log('Données alimentaires:', foodData);

      //recup les calorie
      const foodHints = foodData.hints;

      const extractedCalories = foodHints.map((foodHint) => {
        const food = foodHint.food;
        const calories = food.nutrients.ENERC_KCAL;
        return { label: food.label, calories };
      });

      console.log('Liste des calories:', extractedCalories);

      if (extractedCalories.length > 0) {
        setError(null);
        setCaloriesList(extractedCalories);
      } else {
        setError('Aucun aliment trouvé.');
        setCaloriesList([]);
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la recherche des données alimentaires:', error);
      setError('Une erreur s\'est produite lors de la recherche des données alimentaires.');
      setCaloriesList([]);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Rechercher un aliment..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <Button title="Rechercher" onPress={handleSearch} />

      {caloriesList.length > 0 && (
        <View>
          <Text>Nom de l'aliment: {caloriesList[0].label}</Text>
          <Text>Calories pour 100g: {caloriesList[0].calories} Cal</Text>
        </View>
      )}

      {error && <Text>{error}</Text>}
    </View>
  );
}

export default FoodDatabase;
