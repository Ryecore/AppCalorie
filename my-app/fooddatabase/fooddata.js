import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { searchFood } from './nutritionx_api';
import { Picker } from '@react-native-picker/picker';

function FoodDatabase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [caloriesList, setCaloriesList] = useState([]);
  const [error, setError] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState('1');
  const [mealType, setMealType] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [showModal, setShowModal] = useState(false);


  

  const handleSearch = async () => {
    console.log('Recherche:', searchQuery);
    try {
      const foodData = await searchFood(searchQuery);
      console.log('Données alimentaires:', foodData);

      // Récupérer les informations sur les aliments
      const foodHints = foodData.hints;

      //que le premier, on s'en fou des recettes
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
    if (quantity && mealType && selectedDay) {
      // ici qu'il faut gerer le planning au lieu de retourner des logs
      console.log('Aliment sélectionné:', selectedFood);
      console.log('Quantité:', quantity);
      console.log('Type de repas:', mealType);
      console.log('Jour sélectionné:', selectedDay);
      // Réinitialiser les valeurs
      setSelectedFood(null);
      setQuantity('1');
      setMealType('');
      setSelectedDay('');
      setShowModal(false);
    } else {
      // si les informations ne sont pas complètes
      setError('Veuillez sélectionner la quantité, le type de repas et le jour.');
    }
  };

  const handleGoBack = () => {
    setSelectedFood(null);
    setQuantity('1');
    setMealType('');
    setSelectedDay('');
    setShowModal(false);
    setError(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Rechercher un aliment..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        style={styles.input}
      />
      <Button title="Rechercher" onPress={handleSearch} />

      {caloriesList.length > 0 && (
        <View style={styles.foodItemContainer}>
          <TouchableOpacity onPress={() => handleFoodSelection(caloriesList[0])}>
            <Text style={styles.foodItemLabel}>Nom de l'aliment:</Text>
            <Text style={styles.foodItemText}>{caloriesList[0].label}</Text>
            <Text style={styles.foodItemLabel}>Calories pour 100g:</Text>
            <Text style={styles.foodItemText}>{caloriesList[0].calories} Cal</Text>
            <Text style={styles.helpText}>Cliquez sur l'aliment pour l'ajouter à votre planning</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal visible={showModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.selectedFoodLabel}>Aliment sélectionné:</Text>
          <Text style={styles.selectedFoodText}>{selectedFood && selectedFood.label}</Text>

          <View style={styles.pickerContainer}>
            <Text style={styles.pickerTitle}>Quantité:</Text>
            <Picker
              selectedValue={quantity}
              onValueChange={value => setQuantity(value)}
              style={styles.picker}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.pickerTitle}>Type de repas:</Text>
            <Picker
              selectedValue={mealType}
              onValueChange={value => setMealType(value)}
              style={styles.picker}
            >
              <Picker.Item label="" value="" />
              <Picker.Item label="Petit-déjeuner" value="Breakfast" />
              <Picker.Item label="Déjeuner" value="Lunch" />
              <Picker.Item label="Dîner" value="Dinner" />
              <Picker.Item label="Collation" value="Snack" />
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Text style={styles.pickerTitle}>Jour:</Text>
            <Picker
              selectedValue={selectedDay}
              onValueChange={value => setSelectedDay(value)}
              style={styles.picker}
            >
              <Picker.Item label="" value="" />
              <Picker.Item label="Lundi" value="Lundi" />
              <Picker.Item label="Mardi" value="Mardi" />
              <Picker.Item label="Mercredi" value="Mercredi" />
              <Picker.Item label="Jeudi" value="Jeudi" />
              <Picker.Item label="Vendredi" value="Vendredi" />
              <Picker.Item label="Samedi" value="Samedi" />
              <Picker.Item label="Dimanche" value="Dimanche" />
            </Picker>
          </View>

          <Button title="Ajouter au plan de repas" onPress={handleAddToMealPlan} />
          <Button title="Retour" onPress={handleGoBack} />
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  foodItemContainer: {
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  foodItemLabel: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  foodItemText: {
    marginBottom: 8,
  },
  helpText: {
    color: 'gray',
    fontStyle: 'italic',
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  selectedFoodLabel: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  selectedFoodText: {
    marginBottom: 12,
  },
  pickerContainer: {
    marginBottom: 12,
    width: '100%',
  },
  pickerTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  picker: {
    width: '100%',
  },
});

export default FoodDatabase;
