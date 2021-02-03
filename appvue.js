const app = Vue.createApp({
    data() {
        return {
            inputNumber: "",
        }
    },

    methods: {
        getInput(event){
          this.inputNumber += event.target.dataset.num
        },
        clearAll(){
            this.inputNumber= "" 
        },       
        equal(){
            return this.inputNumber = eval(this.inputNumber)
        }
    }
})
app.mount("#app") 
