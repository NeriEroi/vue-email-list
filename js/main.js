Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
        listaEmails: [],
    },
    methods: {
    },
    mounted(){
        for (i = 0; i < 10; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                // console.log(result.data.response);
                this.email = result.data.response;
                this.listaEmails.push(this.email);
            });
        }
    }
})