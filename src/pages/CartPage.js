import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cartStore from '../store/CartStore';

const styles = {
    cartContainer: {
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 20px',
        paddingBottom: '120px',
        fontFamily: "'Helvetica Neue', Arial, sans-serif"
    },
    header: {
        textAlign: 'center',
        marginBottom: '40px'
    },
    title: {
        fontSize: '2.2rem',
        fontWeight: '300',
        color: '#333',
        margin: '0 0 10px 0',
        letterSpacing: '0.5px'
    },
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px 0',
        borderBottom: '1px solid #f0f0f0',
        marginBottom: '20px'
    },
    itemImage: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        marginRight: '20px',
        backgroundColor: '#f9f9f9'
    },
    itemDetails: {
        flex: 1,
        marginRight: '20px'
    },
    itemTitle: {
        fontSize: '1rem',
        fontWeight: '400',
        marginBottom: '8px',
        color: '#333',
        letterSpacing: '0.3px',
        lineHeight: '1.4'
    },
    itemPrice: {
        fontSize: '0.9rem',
        color: '#666',
        fontWeight: '500'
    },
    quantityControls: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginRight: '20px'
    },
    quantityButton: {
        width: '32px',
        height: '32px',
        border: '1px solid #ddd',
        borderRadius: '0',
        backgroundColor: 'white',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        fontWeight: '400',
        transition: 'background-color 0.2s ease'
    },
    quantityDisplay: {
        fontSize: '1rem',
        fontWeight: '500',
        minWidth: '32px',
        textAlign: 'center',
        color: '#333'
    },
    removeButton: {
        padding: '8px 16px',
        backgroundColor: 'transparent',
        color: '#999',
        border: '1px solid #ddd',
        borderRadius: '0',
        cursor: 'pointer',
        fontSize: '0.8rem',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        transition: 'all 0.2s ease'
    },
    emptyCart: {
        textAlign: 'center',
        padding: '60px 20px',
        color: '#666'
    },
    emptyCartTitle: {
        fontSize: '1.5rem',
        fontWeight: '300',
        marginBottom: '15px',
        color: '#333'
    },
    cartSummary: {
        borderTop: '2px solid #f0f0f0',
        paddingTop: '30px',
        marginTop: '40px',
        textAlign: 'center'
    },
    totalPrice: {
        fontSize: '1.8rem',
        fontWeight: '300',
        color: '#333',
        marginBottom: '20px',
        letterSpacing: '0.5px'
    },
    clearButton: {
        padding: '12px 24px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        borderRadius: '0',
        cursor: 'pointer',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        transition: 'background-color 0.3s ease'
    },
    backLink: {
        display: 'inline-block',
        marginBottom: '30px',
        color: '#666',
        textDecoration: 'none',
        fontSize: '0.9rem',
        letterSpacing: '0.5px',
        transition: 'color 0.3s ease'
    }
};

class CartPageComponent extends Component {
    
    handleIncreaseQuantity = (product) => {
        cartStore.addItem(product);
    }

    handleDecreaseQuantity = (productId) => {
        cartStore.removeItem(productId);
    }

    handleRemoveItem = (productId) => {
        cartStore.removeItemCompletely(productId);
    };

    handleClearCart = () => {
        cartStore.clearCart();
    };

    render() {
        const { items, itemCount, totalValue } = cartStore;

        return (
            <div style={styles.cartContainer}>
                <Link 
                    to="/" 
                    style={styles.backLink}
                    onMouseEnter={(e) => e.target.style.color = '#333'}
                    onMouseLeave={(e) => e.target.style.color = '#666'}
                >
                    ← Continue Shopping
                </Link>
                
                <div style={styles.header}>
                    <h1 style={styles.title}>Shopping Cart</h1>
                    <p style={{color: '#666', margin: '0'}}>{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
                </div>
                
                {items.length === 0 ? (
                    <div style={styles.emptyCart}>
                        <h2 style={styles.emptyCartTitle}>Cart is empty</h2>
                        <p style={{marginBottom: '30px'}}>Start shopping to add items!</p>
                        <Link 
                            to="/" 
                            style={styles.backLink}
                            onMouseEnter={(e) => e.target.style.color = '#333'}
                            onMouseLeave={(e) => e.target.style.color = '#666'}
                        >
                            Browse Collection
                        </Link>
                    </div>
                ) : (
                    <>
                        {items.map(item => (
                            <div key={item.id} style={styles.cartItem}>
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    style={styles.itemImage}
                                />
                                <div style={styles.itemDetails}>
                                    <div style={styles.itemTitle}>
                                        {item.title}
                                    </div>
                                    <div style={styles.itemPrice}>
                                        ${item.price} each
                                    </div>
                                </div>
                                
                                <div style={styles.quantityControls}>
                                    <button 
                                        style={styles.quantityButton}
                                        onClick={() => this.handleDecreaseQuantity(item.id)}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                                    >
                                        −
                                    </button>
                                    <span style={styles.quantityDisplay}>
                                        {item.quantity}
                                    </span>
                                    <button 
                                        style={styles.quantityButton}
                                        onClick={() => this.handleIncreaseQuantity(item)}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                                    >
                                        +
                                    </button>
                                </div>
                                
                                <button 
                                    style={styles.removeButton}
                                    onClick={() => this.handleRemoveItem(item.id)}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#333';
                                        e.target.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = '#999';
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        
                        <div style={styles.cartSummary}>
                            <div style={styles.totalPrice}>
                                Total: ${totalValue}
                            </div>
                            <p>Total Items: {itemCount}</p>
                            
                            <button 
                                style={styles.clearButton}
                                onClick={this.handleClearCart}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
                            >
                                Clear Cart
                            </button>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

const CartPage = observer(CartPageComponent);

export default CartPage;