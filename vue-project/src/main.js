import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem from './components/FoodItem2.vue'
import FoodItem2Vue from './components/FoodItem2.vue'


const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2Vue)

app.mount('#app')