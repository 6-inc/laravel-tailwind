require('./bootstrap');
window.Vue = require('vue');

import ExampleComponent from './components/ExampleComponent.vue';

let app = new Vue({
    el: '#app',
    components: { ExampleComponent }
});
