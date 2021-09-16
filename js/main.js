Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
        email: '',
    },
    methods: {},
    mounted(){
        // chiamata giocatore
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                // console.log(result.data.response);
                this.email = result.data.response; 
            });
    }
})