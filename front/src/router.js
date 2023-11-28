// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import AccueilPresentation from './components/AccueilPresentation.vue'
import FormulaireConnection from './components/FormulaireConnection.vue'
import FormulaireInscription from './components/FormulaireInscription.vue'
import ProfilPage from './components/ProfilPage.vue'
import TrajetPage from './components/TrajetPage.vue'

const routes = [
    { path: '/', component: AccueilPresentation },
    { path: '/connection', component: FormulaireConnection },
    { path: '/inscription', component: FormulaireInscription },
    { path: '/profil', component: ProfilPage },
    { path: '/trajet', component: TrajetPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router