const app = new Vue({
    el: '#app',
    data:{
       mensaje: 'hola soy jhon',
       contador:0,
       estado:false,  
       estado2:false
       
    },

    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-danger':this.contador <=25,
                'bg-warning':this.contador >25 && this.contador < 50,
                'bg-info':this.contador >=50 && this.contador <= 75,
                'bg-success':this.contador >75,

            }
        },
       maximo(){
        this.estado=false;
        if(this.contador == 100){
            this.estado=true;    
        }
        return this.estado;
    
        },

       minimo(){
        this.estado2=false;
        if(this.contador == 0){
            this.estado2=true;    
        }
        return this.estado2;
                
       }
      

}   
           
   

}); 
