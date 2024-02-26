//When loading the script file for vue we are getting access to a vue object
//Pass a root component
const app = Vue.createApp({
//data, function, events
    //template: '<h2>I am the template</h2>'
    data() {
        return {
            title: 'The Final Empire',
            author: 'Pelle',
            age: 50,
            bestseller: false,
            cars: [
                { manufacturer: 'Audi', modelcar: 'A4',  sedan: true},
                { manufacturer: 'Volvo', modelcar: 'V70',  sedan: false },
                { manufacturer: 'Toyota', modelcar: 'Avensis',  sedan: true }
            ],
            urlgeek: 'https://www.sweclockers.com',
            urlnews: 'https://www.aftonbladet.se'
        }
    },
    methods: {
        changeTitle(){
            this.title = 'A New World'
        },
        changeAuthor(pName){
            this.author = pName;
        }
    },
    // Computed properties, is a property that depends on other properties
    computed: {
        filterCarsSedan() {
            return this.cars.filter((car) => car.sedan)
        }
    }
})         


app.mount('#app-custom');
