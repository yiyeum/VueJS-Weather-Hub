import Vue from 'vue'
import Header from './Header.vue'
import Main from './Main.vue'

new Vue({
    el:'#app',
    components:{
        'kt-header' : Header,
        'kt-main' : Main
    }
})
