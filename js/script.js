new Vue({
    el: '#app',
    data: {
        title: "Shelby Danielle",
        link: 'https://google.com', 
        finishedLink: '<a href="http://google.com">Google</a>',
        yourName: "your-name-here"
    },
    methods: {
        sayHello: function() {
            this.title = 'Shelby'
            return this.title;
        },    
        changeYourName: function(event){
            this.yourName = event.target.value;
        }
    }
});
