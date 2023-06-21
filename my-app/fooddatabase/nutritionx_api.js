
const apiKey = '1fad64263576534b16c3cd9b2c27b88e';
const apiUrl = 'https://api.nutritionix.com/v1_1/';

export const searchFood = async (query) => {
  try {
    const response = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=7b76a76f&app_key=82460f002c057020c1837ef0ca4062ea&ingr=${query}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error occurred while fetching food data:', error);
    throw error;
  }
};



