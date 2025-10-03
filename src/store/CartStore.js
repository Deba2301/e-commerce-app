import { makeAutoObservable } from "mobx";

class CartStore {
    items = [];

    constructor() {
        makeAutoObservable(this);
        this.initializeFromStorage();
    }

    initializeFromStorage = () => {
        try {
            const cartData = sessionStorage.getItem("cart");
            if (cartData) {
                this.items = JSON.parse(cartData);
            }
        } catch (error) {
            console.error('Error loading cart from storage:', error);
            this.items = [];
        }
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }
        this.saveToStorage();
    }

    removeItem(productId) {
        const itemIndex = this.items.findIndex(item => item.id === productId);
        
        if (itemIndex !== -1) {
            const item = this.items[itemIndex];
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                this.items.splice(itemIndex, 1);
            }
            this.saveToStorage();
        }
    }

    removeItemCompletely(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToStorage();
    }

    clearCart() {
        this.items = [];
        sessionStorage.removeItem("cart");
    }

    saveToStorage = () => {
        try {
            sessionStorage.setItem("cart", JSON.stringify(this.items));
        } catch (error) {
            console.error('Error saving cart to storage:', error);
        }
    }

    get itemCount() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    get totalValue() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }
}

const cartStore = new CartStore();
export default cartStore;