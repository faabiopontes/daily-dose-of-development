import Vue from 'vue';
// Importing VueRouter
import VueRouter from 'vue-router';

// Installing VueRouter with Vue.use()
Vue.use(VueRouter);

// Importing Vue components
import App from './views/App';
import Hello from './views/Hello';
import Home from './views/Home';

// New VueRouter instance receiving configuration object
const router = new VueRouter({
    mode: 'history',
    // Constructor receiving array of routes
    // Mapping paths to components and naming the routes
    routes: [
        // TODO: Move Routes to separate modules
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
    ],
});

const app = new Vue({
    el: '#app',
    // Making Vue aware of App component
    components: { App },
    // Injecting the VueRouter into the Vue
    // getting access to this.$router and this.$route
    router,
});
