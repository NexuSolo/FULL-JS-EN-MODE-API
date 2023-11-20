// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import AccueilPresentation from './components/AccueilPresentation.vue'
import FormulaireConnection from './components/FormulaireConnection.vue'

const routes = [
    { path: '/', component: AccueilPresentation },
    { path: '/connection', component: FormulaireConnection }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router