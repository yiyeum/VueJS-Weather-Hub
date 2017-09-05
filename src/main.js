import Vue from 'vue'
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'

new Vue({
    el:'#app',
    components:{
        'kt-header' : Header,
        'kt-main' : Main,
        'kt-footer' : Footer
    }
})
