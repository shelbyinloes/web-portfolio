new Vue({
    el: '#app',
    data: {
        title: "Change me by typing below:"
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        }
    }
});
