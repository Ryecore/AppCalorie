import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, Modal } from 'react-native';
import { searchFood } from './nutritionx_api';
import { Picker } from '@react-native-picker/picker';

function FoodDatabase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [caloriesList, setCaloriesList] = useState([]);
  const [error, setError] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState('1');
  const [mealType, setMealType] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async () => {
    console.log('Recherche:', searchQuery);
    try {
      const foodData = await searchFood(searchQuery);
      console.log('Données alimentaires:', foodData);

      // Récupérer les informations sur les aliments
      const foodHints = foodData.hints;

      // Extraire les calories du premier aliment seulement
      const extractedCalories = foodHints.length > 0 ? [{ label: foodHints[0].food.label, calories: foodHints[0].food.nutrients.ENERC_KCAL }] : [];

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

  const handleFoodSelection = (food) => {
    setSelectedFood(food);
    setShowModal(true);
  };

  const handleAddToMealPlan = () => {
    // Vérifier si la quantité et le type de repas sont sélectionnés
    if (quantity && mealType) {
      // Ajouter la sélection à votre plan de repas ou effectuer d'autres actions nécessaires
      console.log('Aliment sélectionné:', selectedFood);
      console.log('Quantité:', quantity);
      console.log('Type de repas:', mealType);
      // Réinitialiser les valeurs
      setSelectedFood(null);
      setQuantity('1');
      setMealType('');
      setShowModal(false);
    } else {
      // Afficher un message d'erreur si les informations ne sont pas complètes
      setError('Veuillez sélectionner la quantité et le type de repas.');
    }
  };

  const handleGoBack = () => {
    setSelectedFood(null);
    setQuantity('1');
    setMealType('');
    setShowModal(false);
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
          <TouchableOpacity onPress={() => handleFoodSelection(caloriesList[0])}>
            <Text>Nom de l'aliment: {caloriesList[0].label}</Text>
            <Text>Calories pour 100g: {caloriesList[0].calories} Cal</Text>
          </TouchableOpacity>
        </View>
      )}

      {error && <Text>{error}</Text>}

      <Modal visible={showModal}>
        <View>
          <Text>Nom de l'aliment sélectionné: {selectedFood && selectedFood.label}</Text>
          <Picker
            selectedValue={quantity}
            onValueChange={value => setQuantity(value)}
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
          </Picker>
          <Picker
            selectedValue={mealType}
            onValueChange={value => setMealType(value)}
          >
            <Picker.Item label="Petit-déjeuner" value="Breakfast" />
            <Picker.Item label="Déjeuner" value="Lunch" />
            <Picker.Item label="Dîner" value="Dinner" />
            <Picker.Item label="Collation" value="Snack" />
          </Picker>
          <Button title="Ajouter au plan de repas" onPress={handleAddToMealPlan} />
          <Button title="Retour" onPress={handleGoBack} />
        </View>
      </Modal>
    </View>
  );
}

export default FoodDatabase;
