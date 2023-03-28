//method createApp from vue (import del metodo per creare la mia app)
const { createApp } = Vue;

//invoco metodo createApp
createApp({
    //dati con classi
    data(){
        return {
            title: 'hello Vue js',
            image: 'https://img.freepik.com/free-vector/black-hello-greeting-typography-vector-text_53876-175377.jpg?w=740&t=st=1680002140~exp=1680002740~hmac=8026a4b90afdea79c2d4b6379cb25d450638416da9e7c273df0c860cb94d310b'
        }
    }

}).mount('#app'); //appendo il contenuto nel div 'app' principale