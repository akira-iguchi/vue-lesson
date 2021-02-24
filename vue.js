var app = new Vue({
    el: "#app",

    data: {
        newItem: "",
        todos: []
    },

    methods: {
        addItem: function(event) {
            if(this.newItem == '') return;
            // returnで処理が終了

            var todo = {
                item: this.newItem,
                isDone: false
            };
            this.todos.push(todo);
            // thisは両方ともdataを指す（dataのtodosの値を参照）
            this.newItem = '';
        },
        deleteItem: function(index) {
            alert(index);
        }
    }
})


// var app = new Vue({
//     el: '#app1',

//     data: {
//         message: "hello",
//         url: "aaa.com",
//         toggle: true,
//         languages: ["japan", "America"]
//     },

//     methods: {
//         onclick: function() {
//             this.message = "fishing"
//         }
//     }
// })