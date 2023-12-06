app.component('product-display', {
    props: {
        premuim: {
            type: Boolean,
            required: true,
        }
    },
    template:
        /*html*/
        `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" alt="blue socks">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div v-for="(variant, index) in variants" :key="variant.id" class="color-circle"
          @mouseover="updateVariant(index)" :style="{backgroundColor: variant.color}">
        </div>
        <button class="button" @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to
          Cart</button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
    data() {
        return {
            brand: 'Vue Mastery',
            cart: 0,
            product: 'Socks',
            selectVariant: 0,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            // 向外散发事件被触发的消息！
            // （事件名称，携带的参数）
            this.$emit('add-to-cart', this.variants[this.selectVariant].id);
        },
        updateVariant(index) {
            this.selectVariant = index;
        },
        addReview(review) {
            this.reviews.push(review)
        }
    },
    // 计算属性相当于一个封装了许多步计算的出来的*值*，与函数很不相同
    // 初次之外，计算属性值会基于其响应式依赖被缓存！
    computed: {
        title() {
            return this.brand + this.product;
        },
        image() {
            return this.variants[this.selectVariant].image;
        },
        inStock() {
            return this.variants[this.selectVariant].quantity > 10
        },
        shipping() {
            if (this.premuim) {
                return 'Free'
            }
            return 2.99
        }
    }
})