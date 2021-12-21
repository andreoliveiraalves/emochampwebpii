import Vue from 'vue'
import VueRouter from 'vue-router'
import BackOffice from '../views/BackOffice.vue'
import Error from '../views/Error.vue'
import Game1 from '../views/Game1.vue'
import Game1Stats from '../views/Game1Stats.vue'
import Game2 from '../views/Game2.vue'
import Game2Stats from '../views/Game2Stats.vue'
import General from '../views/General.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import OverView from '../views/OverView.vue'
import Play from '../views/Play.vue'
import Profile from '../views/Profile.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/backoffice/:user_id',
    name: 'BackOffice',
    component: BackOffice
  },
  {
    path: '/#',
    name: 'Error',
    component: Error
  },
  {
    path: '/play/game1',
    name: 'Game1',
    component: Game1
  },
  {
    path: '/stats/:user_id/game1stats',
    name: 'Game1Stats',
    component: Game1Stats
  },
  {
    path: '/play/game2',
    name: 'Game2',
    component: Game2
  },
  {
    path: '/stats/:user_id/game2stats',
    name: 'Game2Stats',
    component: Game2Stats
  },
  {
    path: '/stats/:user_id/general',
    name: 'General',
    component: General
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/overview/:user_id',
    name: 'Overview',
    component: OverView
  },
  {
    path: '/play',
    name: 'Play',
    component: Play
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile/:user_id',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },



]

const router = new VueRouter({
  routes
})

export default router