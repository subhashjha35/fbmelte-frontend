import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  strSearch;
  strSearchArr;
  allMeals;
  constructor(private route:Router, private recipeService:RecipeService) { }
  goToSearch(){
    console.log("gotosearch called");
    this.route.navigateByUrl('/search/'+this.strSearch);
  }
  getMeal(){
    this.route.navigateByUrl('/meal/'+this.strSearch);
  }
  ngOnInit() {
    console.log("initialized");
    this.allMeals=[
      {
        "idMeal": "52861",
        "strMeal": "Peanut Butter Cheesecake"
      },
      {
        "idMeal": "52833",
        "strMeal": "Salted Caramel Cheescake"
      },
      {
        "idMeal": "52890",
        "strMeal": "Jam Roly-Poly"
      },
      {
        "idMeal": "52859",
        "strMeal": "Key Lime Pie"
      },
      {
        "idMeal": "52838",
        "strMeal": "Venetian Duck Ragu"
      },
      {
        "idMeal": "52874",
        "strMeal": "Beef and Mustard Pie"
      },
      {
        "idMeal": "52887",
        "strMeal": "Kedgeree"
      },
      {
        "idMeal": "52896",
        "strMeal": "Full English Breakfast"
      },
      {
        "idMeal": "52828",
        "strMeal": "Vietnamese Grilled Pork (bun-thit-nuong)"
      },
      {
        "idMeal": "52909",
        "strMeal": "Tarte Tatin"
      },
      {
        "idMeal": "52891",
        "strMeal": "Blackberry Fool"
      },
      {
        "idMeal": "52928",
        "strMeal": "BeaverTails"
      },
      {
        "idMeal": "52922",
        "strMeal": "Prawn & Fennel Bisque"
      },
      {
        "idMeal": "52810",
        "strMeal": "Osso Buco alla Milanese"
      },
      {
        "idMeal": "52872",
        "strMeal": "Spanish Tortilla"
      },
      {
        "idMeal": "52956",
        "strMeal": "Chicken Congee"
      },
      {
        "idMeal": "52774",
        "strMeal": "Pad See Ew"
      },
      {
        "idMeal": "52924",
        "strMeal": "Nanaimo Bars"
      },
      {
        "idMeal": "52947",
        "strMeal": "Ma Po Tofu"
      },
      {
        "idMeal": "52929",
        "strMeal": "Timbits"
      },
      {
        "idMeal": "52768",
        "strMeal": "Apple Frangipan Tart"
      },
      {
        "idMeal": "52931",
        "strMeal": "Sugar Pie"
      },
      {
        "idMeal": "52796",
        "strMeal": "Chicken Alfredo Primavera"
      },
      {
        "idMeal": "52841",
        "strMeal": "Creamy Tomato Soup"
      },
      {
        "idMeal": "52803",
        "strMeal": "Beef Wellington"
      },
      {
        "idMeal": "52848",
        "strMeal": "Bean & Sausage Hotpot"
      },
      {
        "idMeal": "52779",
        "strMeal": "Cream Cheese Tart"
      },
      {
        "idMeal": "52863",
        "strMeal": "Vegetarian Casserole"
      },
      {
        "idMeal": "52949",
        "strMeal": "Sweet and Sour Pork"
      },
      {
        "idMeal": "52953",
        "strMeal": "Shrimp Chow Fun"
      },
      {
        "idMeal": "52913",
        "strMeal": "Brie wrapped in prosciutto & brioche"
      },
      {
        "idMeal": "52892",
        "strMeal": "Treacle Tart"
      },
      {
        "idMeal": "52933",
        "strMeal": "Rappie Pie"
      },
      {
        "idMeal": "52808",
        "strMeal": "Lamb Rogan josh"
      },
      {
        "idMeal": "52906",
        "strMeal": "Flamiche"
      },
      {
        "idMeal": "52786",
        "strMeal": "Rocky Road Fudge"
      },
      {
        "idMeal": "52830",
        "strMeal": "Crock Pot Chicken Baked Tacos"
      },
      {
        "idMeal": "52944",
        "strMeal": "Escovitch Fish"
      },
      {
        "idMeal": "52782",
        "strMeal": "Lamb tomato and sweet spices"
      },
      {
        "idMeal": "52914",
        "strMeal": "Boulangère Potatoes"
      },
      {
        "idMeal": "52923",
        "strMeal": "Canadian Butter Tarts"
      },
      {
        "idMeal": "52882",
        "strMeal": "Three Fish Pie"
      },
      {
        "idMeal": "52918",
        "strMeal": "Fish Stew with Rouille"
      },
      {
        "idMeal": "52951",
        "strMeal": "General Tso's Chicken"
      },
      {
        "idMeal": "52883",
        "strMeal": "Sticky Toffee Pudding"
      },
      {
        "idMeal": "52819",
        "strMeal": "Cajun spiced fish tacos"
      },
      {
        "idMeal": "52938",
        "strMeal": "Jamaican Beef Patties"
      },
      {
        "idMeal": "52868",
        "strMeal": "Kidney Bean Curry"
      },
      {
        "idMeal": "52901",
        "strMeal": "Rock Cakes"
      },
      {
        "idMeal": "52827",
        "strMeal": "Massaman Beef curry"
      },
      {
        "idMeal": "52858",
        "strMeal": "New York cheesecake"
      },
      {
        "idMeal": "52817",
        "strMeal": "Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt"
      },
      {
        "idMeal": "52794",
        "strMeal": "Vegan Chocolate Cake"
      },
      {
        "idMeal": "52937",
        "strMeal": "Jerk chicken with rice & peas"
      },
      {
        "idMeal": "52780",
        "strMeal": "Potato Gratin with Chicken"
      },
      {
        "idMeal": "52888",
        "strMeal": "Eccles Cakes"
      },
      {
        "idMeal": "52840",
        "strMeal": "Clam chowder"
      },
      {
        "idMeal": "52831",
        "strMeal": "Chicken Karaage"
      },
      {
        "idMeal": "52899",
        "strMeal": "Dundee cake"
      },
      {
        "idMeal": "52767",
        "strMeal": "Bakewell tart"
      },
      {
        "idMeal": "52811",
        "strMeal": "Ribollita"
      },
      {
        "idMeal": "52897",
        "strMeal": "Carrot Cake"
      },
      {
        "idMeal": "52910",
        "strMeal": "Chinon Apple Tarts"
      },
      {
        "idMeal": "52776",
        "strMeal": "Chocolate Gateau"
      },
      {
        "idMeal": "52777",
        "strMeal": "Mediterranean Pasta Salad"
      },
      {
        "idMeal": "52884",
        "strMeal": "Lancashire hotpot"
      },
      {
        "idMeal": "52921",
        "strMeal": "Provençal Omelette Cake"
      },
      {
        "idMeal": "52844",
        "strMeal": "Lasagne"
      },
      {
        "idMeal": "52826",
        "strMeal": "Braised Beef Chilli"
      },
      {
        "idMeal": "52936",
        "strMeal": "Saltfish and Ackee"
      },
      {
        "idMeal": "52852",
        "strMeal": "Tuna Nicoise"
      },
      {
        "idMeal": "52836",
        "strMeal": "Seafood fideuà"
      },
      {
        "idMeal": "52871",
        "strMeal": "Yaki Udon"
      },
      {
        "idMeal": "52926",
        "strMeal": "Tourtiere"
      },
      {
        "idMeal": "52824",
        "strMeal": "Beef Sunday Roast"
      },
      {
        "idMeal": "52850",
        "strMeal": "Chicken Couscous"
      },
      {
        "idMeal": "52875",
        "strMeal": "Chicken Ham and Leek Pie"
      },
      {
        "idMeal": "52894",
        "strMeal": "Battenberg Cake"
      },
      {
        "idMeal": "52822",
        "strMeal": "Toad In The Hole"
      },
      {
        "idMeal": "52829",
        "strMeal": "Grilled Mac and Cheese Sandwich"
      },
      {
        "idMeal": "52851",
        "strMeal": "Nutty Chicken Curry"
      },
      {
        "idMeal": "52950",
        "strMeal": "Szechuan Beef"
      },
      {
        "idMeal": "52849",
        "strMeal": "Spinach & Ricotta Cannelloni"
      },
      {
        "idMeal": "52939",
        "strMeal": "Callaloo Jamaican Style"
      },
      {
        "idMeal": "52765",
        "strMeal": "Chicken Enchilada Casserole"
      },
      {
        "idMeal": "52911",
        "strMeal": "Summer Pistou"
      },
      {
        "idMeal": "52784",
        "strMeal": "Smoky Lentil Chili with Squash"
      },
      {
        "idMeal": "52945",
        "strMeal": "Kung Pao Chicken"
      },
      {
        "idMeal": "52865",
        "strMeal": "Matar Paneer"
      },
      {
        "idMeal": "52845",
        "strMeal": "Turkey Meatloaf"
      },
      {
        "idMeal": "52802",
        "strMeal": "Fish pie"
      },
      {
        "idMeal": "52935",
        "strMeal": "Steak Diane"
      },
      {
        "idMeal": "52930",
        "strMeal": "Pate Chinois"
      },
      {
        "idMeal": "52885",
        "strMeal": " Bubble & Squeak"
      },
      {
        "idMeal": "52919",
        "strMeal": "Fennel Dauphinoise"
      },
      {
        "idMeal": "52770",
        "strMeal": "Spaghetti Bolognese"
      },
      {
        "idMeal": "52860",
        "strMeal": "Chocolate Raspberry Brownies"
      },
      {
        "idMeal": "52920",
        "strMeal": "Chicken Marengo"
      },
      {
        "idMeal": "52807",
        "strMeal": "Baingan Bharta"
      },
      {
        "idMeal": "52842",
        "strMeal": "Broccoli & Stilton soup"
      },
      {
        "idMeal": "52821",
        "strMeal": "Laksa King Prawn Noodles"
      },
      {
        "idMeal": "52893",
        "strMeal": "Apple & Blackberry Crumble"
      },
      {
        "idMeal": "52904",
        "strMeal": "Beef Bourguignon"
      },
      {
        "idMeal": "52818",
        "strMeal": "Chicken Fajita Mac and Cheese"
      },
      {
        "idMeal": "52908",
        "strMeal": "Ratatouille"
      },
      {
        "idMeal": "52876",
        "strMeal": "Minced Beef Pie"
      },
      {
        "idMeal": "52843",
        "strMeal": "Lamb Tagine"
      },
      {
        "idMeal": "52846",
        "strMeal": "Chicken & mushroom Hotpot"
      },
      {
        "idMeal": "52832",
        "strMeal": "Coq au vin"
      },
      {
        "idMeal": "52877",
        "strMeal": "Lamb and Potato pie"
      },
      {
        "idMeal": "52809",
        "strMeal": "Recheado Masala Fish"
      },
      {
        "idMeal": "52932",
        "strMeal": "Pouding chomeur"
      },
      {
        "idMeal": "52879",
        "strMeal": "Chicken Parmentier"
      },
      {
        "idMeal": "52785",
        "strMeal": "Dal fry"
      },
      {
        "idMeal": "52788",
        "strMeal": "Christmas Pudding Flapjack"
      },
      {
        "idMeal": "52954",
        "strMeal": "Hot and Sour Soup"
      },
      {
        "idMeal": "52764",
        "strMeal": "Garides Saganaki"
      },
      {
        "idMeal": "52878",
        "strMeal": "Beef and Oyster pie"
      },
      {
        "idMeal": "52889",
        "strMeal": "Summer Pudding"
      },
      {
        "idMeal": "52900",
        "strMeal": "Madeira Cake"
      },
      {
        "idMeal": "52864",
        "strMeal": "Mushroom & Chestnut Rotolo"
      },
      {
        "idMeal": "52837",
        "strMeal": "Pilchard puttanesca"
      },
      {
        "idMeal": "52917",
        "strMeal": "White chocolate creme brulee"
      },
      {
        "idMeal": "52792",
        "strMeal": "Bread and Butter Pudding"
      },
      {
        "idMeal": "52823",
        "strMeal": "Salmon Prawn Risotto"
      },
      {
        "idMeal": "52912",
        "strMeal": "Three-cheese souffles"
      },
      {
        "idMeal": "52856",
        "strMeal": "Choc Chip Pecan Pie"
      },
      {
        "idMeal": "52854",
        "strMeal": "Pancakes"
      },
      {
        "idMeal": "52806",
        "strMeal": "Tandoori chicken"
      },
      {
        "idMeal": "52847",
        "strMeal": "Pork Cassoulet"
      },
      {
        "idMeal": "52940",
        "strMeal": "Brown Stew Chicken"
      },
      {
        "idMeal": "52814",
        "strMeal": "Thai Green Curry"
      },
      {
        "idMeal": "52925",
        "strMeal": "Split Pea Soup"
      },
      {
        "idMeal": "52866",
        "strMeal": "Squash linguine"
      },
      {
        "idMeal": "52834",
        "strMeal": "Beef stroganoff"
      },
      {
        "idMeal": "52942",
        "strMeal": "Roast fennel and aubergine paella"
      },
      {
        "idMeal": "52813",
        "strMeal": "Kentucky Fried Chicken"
      },
      {
        "idMeal": "52867",
        "strMeal": "Vegetarian Chilli"
      },
      {
        "idMeal": "52771",
        "strMeal": "Spicy Arrabiata Penne"
      },
      {
        "idMeal": "52870",
        "strMeal": "Chickpea Fajitas"
      },
      {
        "idMeal": "52862",
        "strMeal": "Peach & Blueberry Grunt"
      },
      {
        "idMeal": "52881",
        "strMeal": "Steak and Kidney Pie"
      },
      {
        "idMeal": "52952",
        "strMeal": "Beef Lo Mein"
      },
      {
        "idMeal": "52805",
        "strMeal": "Lamb Biryani"
      },
      {
        "idMeal": "52791",
        "strMeal": "Eton Mess"
      },
      {
        "idMeal": "52886",
        "strMeal": "Spotted Dick"
      },
      {
        "idMeal": "52787",
        "strMeal": "Hot Chocolate Fudge"
      },
      {
        "idMeal": "52869",
        "strMeal": "Tahini Lentils"
      },
      {
        "idMeal": "52955",
        "strMeal": "Egg Drop Soup"
      },
      {
        "idMeal": "52853",
        "strMeal": "Chocolate Avocado Mousse"
      },
      {
        "idMeal": "52797",
        "strMeal": "Spicy North African Potato Salad"
      },
      {
        "idMeal": "52855",
        "strMeal": "Banana Pancakes"
      },
      {
        "idMeal": "52895",
        "strMeal": "English Breakfast"
      },
      {
        "idMeal": "52907",
        "strMeal": "Duck Confit"
      },
      {
        "idMeal": "52898",
        "strMeal": "Chelsea Buns"
      },
      {
        "idMeal": "52941",
        "strMeal": "Red Peas Soup"
      },
      {
        "idMeal": "52857",
        "strMeal": "Pumpkin Pie"
      },
      {
        "idMeal": "52873",
        "strMeal": "Beef Dumpling Stew"
      },
      {
        "idMeal": "52902",
        "strMeal": "Parkin Cake"
      },
      {
        "idMeal": "52815",
        "strMeal": "French Lentils With Garlic and Thyme"
      },
      {
        "idMeal": "52772",
        "strMeal": "Teriyaki Chicken Casserole"
      },
      {
        "idMeal": "52943",
        "strMeal": "Oxtail with broad beans"
      },
      {
        "idMeal": "52769",
        "strMeal": "Kapsalon"
      },
      {
        "idMeal": "52916",
        "strMeal": "Pear Tarte Tatin"
      },
      {
        "idMeal": "52775",
        "strMeal": "Vegan Lasagna"
      },
      {
        "idMeal": "52793",
        "strMeal": "Sticky Toffee Pudding Ultimate"
      },
      {
        "idMeal": "52835",
        "strMeal": "Fettucine alfredo"
      },
      {
        "idMeal": "52781",
        "strMeal": "Irish stew"
      },
      {
        "idMeal": "52795",
        "strMeal": "Chicken Handi"
      },
      {
        "idMeal": "52934",
        "strMeal": "Chicken Basquaise"
      },
      {
        "idMeal": "52903",
        "strMeal": "French Onion Soup"
      },
      {
        "idMeal": "52804",
        "strMeal": "Poutine"
      },
      {
        "idMeal": "52812",
        "strMeal": "Beef Brisket Pot Roast"
      },
      {
        "idMeal": "52905",
        "strMeal": "Chocolate Souffle"
      },
      {
        "idMeal": "52839",
        "strMeal": "Chilli prawn linguine"
      },
      {
        "idMeal": "52948",
        "strMeal": "Wontons"
      },
      {
        "idMeal": "52880",
        "strMeal": "McSinghs Scotch pie"
      },
      {
        "idMeal": "52773",
        "strMeal": "Honey Teriyaki Salmon"
      },
      {
        "idMeal": "52927",
        "strMeal": "Montreal Smoked Meat"
      },
      {
        "idMeal": "52915",
        "strMeal": "French Omelette"
      },
      {
        "idMeal": "52946",
        "strMeal": "Kung Po Prawns"
      },
      {
        "idMeal": "52820",
        "strMeal": "Katsu Chicken curry"
      },
      {
        "idMeal": "52783",
        "strMeal": "Rigatoni with fennel sausage sauce"
      },
      {
        "idMeal": "52816",
        "strMeal": "Roasted Eggplant With Tahini, Pine Nuts, and Lentils"
      }
    ];
  }
  
}
