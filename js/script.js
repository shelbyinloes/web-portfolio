// new Vue({
//     el: '#app',
//     data: {
//         title: "Shelby Danielle",
//         link: 'https://google.com', 
//         finishedLink: '<a href="http://google.com">Google</a>',
//         yourName: "your-name-here"
//     },
//     methods: {
//         sayHello: function() {
//             this.title = 'Shelby'
//             return this.title;
//         },    
//         changeYourName: function(event){
//             this.yourName = event.target.value;
//         }
//     }
// });
new Vue({
    el: '#exercise',
    data: {
        name: "Shelby",
        age: 25,
        imgURL: "https://scontent-iad3-1.cdninstagram.com/vp/7cd90046991691bde97a5274ed28c0a0/5BE608DC/t51.2885-19/s150x150/13391116_1734249263527697_648025196_a.jpg"
    },
    methods: {
        multiplyAge: function() {
            return this.age * 3;
        },
        mathRandom: function() {
            return Math.random();
        },
        changeName: function(event){
            this.name = event.target.value;
        }
    }
});
