import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HealthGoalsForm from './HealthGoalsForm';
import FoodDatabase from './fooddatabase/fooddata';


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Health Goals" component={HealthGoalsScreen} />
        <Tab.Screen name="Food Database" component={FoodDatabaseScreen} />
        <Tab.Screen name="Meal Planning" component={MealPlanningScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const Tab = createBottomTabNavigator();

function HealthGoalsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Health Goals</Text>
      <HealthGoalsForm />
    </View>
  );
}


function FoodDatabaseScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Food Database</Text>
      <FoodDatabase /> 
    </View>
  );
}

function MealPlanningScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Meal Planning</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



