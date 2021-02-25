var app = new Vue({
    el: "#app",
    data: {
        show: false
    }
})












// var hello = {
//     // コンポーネント名は「ー」をつける"hello-component"
//     template: "<p>hello</p>"
// }

// Vue.component("button-counter", {
//     // dataは関数
//     data: function() {
//         return {
//             count: 0
//         }
//     },
//     // templateはタグ１つ内
//     template: '<button v-on:click="count++">{{ count }}</button>'
// })

// var app = new Vue ({
//     el: "#app",

// })

// var app = new Vue({
//     el: "#app",

//     data: {
//         newItem: "",
//         todos: []
//     },

//     methods: {
//         addItem: function(event) {
//             if(this.newItem == '') return;
//             // returnで処理が終了

//             var todo = {
//                 item: this.newItem,
//                 isDone: false
//             };
//             this.todos.push(todo);
//             // thisは両方ともdataを指す（dataのtodosの値を参照）
//             this.newItem = '';
//         },
//         deleteItem: function(index) {
//             this.todos.splice(index, 1)
//         }
//     }
// })


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