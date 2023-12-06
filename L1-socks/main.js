const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premuim: true,
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        }
    },
})
