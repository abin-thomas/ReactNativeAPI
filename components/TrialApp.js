//This is an example code to understand HTTP Requests// 
import React, { Component } from 'react';
//import react in our code. 

import { StyleSheet, SafeAreaView, View, Button, ScrollView,Text, Image, StatusBar} from 'react-native';
//import all the components we are going to use. 

export default class TrialApp extends Component {

  constructor(){
 
    super();
 
    this.state ={ 
      mealName: "",
      mealThumb:"",
      mealCategory:"",
      mealInstructions:"",
      mealIngredients:[],
      mealIngredientMeasures:[]
 
    }
  }
 
FetchRandomMeal = () =>{
 
  fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
        method: 'GET'
        //Request Type 
    })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
        //Success 
        
      var result = Object.entries(responseJson);
      //The following two is just to retrieve only the results.
      var tempResult1 = Object.entries(result[0][1]); 
      var tempResult2 = Object.entries(tempResult1[0][1]);
      
      tempResult2.forEach(element => {
        switch(element[0])
        {
          case "strMeal":
            {
              this.setState({mealName: element[1]});
              break;
            }
          case "strMealThumb":
            {
              this.setState({mealThumb: element[1]});
              break;
            }
          case "strCategory":
            {
              this.setState({mealCategory: element[1]});
              break;
            }
          case "strInstructions":
            {
              this.setState({mealInstructions: element[1]});
              break;
            }
          case "strIngredient1":
          case "strIngredient2":
          case "strIngredient3":
          case "strIngredient4":
          case "strIngredient5":
          case "strIngredient6":
          case "strIngredient7":
          case "strIngredient8":
          case "strIngredient9":
          case "strIngredient10":
          case "strIngredient11":
          case "strIngredient12":
          case "strIngredient13":
          case "strIngredient14":
          case "strIngredient15":
          case "strIngredient16":
          case "strIngredient17":
          case "strIngredient18":
          case "strIngredient19":
          case "strIngredient20":
            {
              if(element[1]!=="")
              {
                this.setState({mealIngredients: [...this.state.mealIngredients, element[1]]});
              }
              
              break;
            }
          case "strMeasure1":
          case "strMeasure2":
          case "strMeasure3":
          case "strMeasure4":
          case "strMeasure5":
          case "strMeasure6":
          case "strMeasure7":
          case "strMeasure8":
          case "strMeasure9":
          case "strMeasure10":
          case "strMeasure11":
          case "strMeasure12":
          case "strMeasure13":
          case "strMeasure14":
          case "strMeasure15":
          case "strMeasure16":
          case "strMeasure17":
          case "strMeasure18":
          case "strMeasure19":
          case "strMeasure20":
            {
              if(element[1]!="")
              {
                this.setState({mealIngredientMeasures: [...this.state.mealIngredientMeasures, element[1]]});
              }
              
              break;
            }
        }
      });
        
    })
    //If response is not in json then in error
    .catch((error) => {
        //Error 
        alert(JSON.stringify(error));
        console.error("error"+ error);
    });
}

componentWillUnmount()
{
  this.setState({mealName: null});
}
 
  render() {
  
    return (
 
      <SafeAreaView style={styles.MasterView}>
        <Button title="Show a random meal" onPress={this.FetchRandomMeal} />
      {
        //The below is a trinary operator......

        this.state.mealName ? //Below is the true part of the trinary operator
        
        <ScrollView style={styles.MasterView}>
        {/*Running GET Request*/}
        <Text style={styles.TitleText}>{this.state.mealName}</Text>
        <Image
        style={styles.mealImage}
        source={{uri:this.state.mealThumb}}
        />
        <Text style={styles.TitleText}>Ingredients</Text>
        {this.state.mealIngredients.map(item => (
          <Text style={styles.DetailText}>{item}</Text>
          ))}
        <Text style={styles.TitleText}>Preparation</Text>
        <Text style={styles.DetailText}>{this.state.mealInstructions}</Text>
      </ScrollView>
      
      : //Below is the false part of the trinary operator
      <Text style={styles.DetailText}>
        Each time you press the button above, you will be able to see a random meal.
      </Text>
      } 
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  MasterView: {
    flex: 1,
    padding: 10,
    margin: 25,
    marginTop: StatusBar.currentHeight || 0,
    paddingVertical: 20
  },
  TitleText:{
    fontSize: 30,
    fontWeight: "bold",
    color: '#1666DB',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  DetailText:{
    fontSize: 20,
    fontWeight: "normal",    
    alignItems: 'flex-start'
  },
  mealImage:{
    width: 350,
    height: 350,
    marginBottom: 10
  }
});