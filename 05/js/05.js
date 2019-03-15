const app = new Vue({
    el: '#app',
    data:{
        saludo:'Soy ciclo de vida de vue'
    },
     beforeCreate(){
         console.log('beforeCreate');
         
     }
}); 