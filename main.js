//Attraverso una chiamata ajax all’API di boolean 
//https://flynn.boolean.careers/exercises/api/array/music 
//avremo a disposizione una decina di dischi musicali. 
//Utilizzando vue, stampiamo a schermo una card per ogni album.
var app = new Vue({
    el: '#app',
    data: {
        dischi: [],
        generi: [],
        genereSelezionato: ''
    },
    mounted() {
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((lista) => {
            // salvo i dischi richiamati da ajax
            this.dischi = lista.data.response;

            //BONUS: Creare una select con tutti i generi dei dischi. 
            //In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

            //tutti i generi musicali vengono recuperati
            this.dischi.forEach(disco => {
                if (!this.generi.includes(disco.genre)) {
                    this.generi.push(disco.genre);
                }
            });

            //BONUS 2: Ordinare i dischi per anno di uscita.
            this.dischi.sort(function(disco1, disco2) {
                return parseInt(disco1.year) - parseInt(disco2.year);
            });


        });



    }
});
