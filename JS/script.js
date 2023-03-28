//method createApp from vue (import del metodo per creare la mia app)
const { createApp } = Vue;

//invoco metodo createApp
createApp({
    //dati con classi
    data(){
        return {
            title: 'hello Vue js',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fit.wikipedia.org%2Fwiki%2FFelis_silvestris_catus&psig=AOvVaw2nrHB-3SENTZLZKnlRqCrf&ust=1680084579329000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjm3_qw_v0CFQAAAAAdAAAAABAI'
        }
    }

}).mount('#app'); //appendo il contenuto nel div 'app' principale