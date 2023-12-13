// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import AccueilPresentation from './components/AccueilPresentation.vue'
import FormulaireConnection from './components/FormulaireConnection.vue'
import FormulaireInscription from './components/FormulaireInscription.vue'
import ProfilPage from './components/ProfilPage.vue'
import TrajetPage from './components/TrajetPage.vue'
import CreateTrajet from './components/CreateTrajet.vue'
import ModifProfil from './components/ModifProfil.vue'

const routes = [
    { path: '/', component: AccueilPresentation },
    { path: '/connection', component: FormulaireConnection },
    { path: '/inscription', component: FormulaireInscription },
    { path: '/profil', component: ProfilPage },
    { path: '/trajet/:id', component: TrajetPage },
    { path: '/create-trajet', component: CreateTrajet },
    { path: '/profil_settings', component: ModifProfil }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router