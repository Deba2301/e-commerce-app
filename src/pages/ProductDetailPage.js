import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cartStore from '../store/CartStore';

const styles = {
    container: {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '40px 20px',
        paddingBottom: '120px',
        fontFamily: "'Helvetica Neue', Arial, sans-serif"
    },
    detailContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'start'
    },
    imageSection: {
        display: 'flex',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        maxWidth: '400px',
        height: 'auto',
        objectFit: 'cover'
    },
    productInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '25px'
    },
    title: {
        fontSize: '2rem',
        fontWeight: '300',
        color: '#333',
        margin: '0',
        letterSpacing: '0.5px',
        lineHeight: '1.3'
    },
    price: {
        fontSize: '1.5rem',
        color: '#333',
        margin: '0',
        fontWeight: '500'
    },
    description: {
        lineHeight: '1.7',
        color: '#666',
        fontSize: '1rem',
        margin: '0'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    button: {
        padding: '15px 30px',
        fontSize: '0.9rem',
        color: '#fff',
        backgroundColor: '#333',
        border: 'none',
        borderRadius: '0',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: '500'
    },
    backLink: {
        color: '#666',
        textDecoration: 'none',
        fontSize: '0.9rem',
        letterSpacing: '0.5px',
        transition: 'color 0.3s ease'
    },
    notFound: {
        textAlign: 'center',
        padding: '60px 20px',
        color: '#666'
    },
    notFoundTitle: {
        fontSize: '1.8rem',
        fontWeight: '300',
        marginBottom: '15px',
        color: '#333'
    },
    '@media (max-width: 768px)': {
        detailContainer: {
            gridTemplateColumns: '1fr',
            gap: '40px'
        },
        title: {
            fontSize: '1.6rem'
        },
        price: {
            fontSize: '1.3rem'
        }
    }
};

class ProductDetail extends Component {
    handleAddToCart = () => {
        const { product } = this.props.location.state || {};
        
        if (!product) {
            alert('Product information is not available.');
            return;
        }
        
        cartStore.addItem(product);
        alert('Product has been added to cart successfully.');
    };

    render() {
        const { product } = this.props.location.state || {};

        if (!product) {
            return (
                <div style={styles.notFound}>
                    <h2 style={styles.notFoundTitle}>Product Not Found</h2>
                    <p style={{marginBottom: '30px'}}>The product information could not be loaded.</p>
                    <Link 
                        to="/" 
                        style={styles.backLink}
                        onMouseEnter={(e) => e.target.style.color = '#333'}
                        onMouseLeave={(e) => e.target.style.color = '#666'}
                    >
                        ← Return to Collection
                    </Link>
                </div>
            );
        }

        const isMobile = window.innerWidth <= 768;
        const containerStyle = isMobile ? 
            {...styles.detailContainer, gridTemplateColumns: '1fr', gap: '30px'} : 
            styles.detailContainer;

        return (
            <div style={styles.container}>
                <div style={containerStyle}>
                    <div style={styles.imageSection}>
                        <img src={product.image} alt={product.title} style={styles.image} />
                    </div>
                    
                    <div style={styles.productInfo}>
                        <h1 style={isMobile ? {...styles.title, fontSize: '1.6rem'} : styles.title}>
                            {product.title}
                        </h1>
                        
                        <p style={isMobile ? {...styles.price, fontSize: '1.3rem'} : styles.price}>
                            ${product.price}
                        </p>
                        
                        <p style={styles.description}>
                            {product.description}
                        </p>
                        
                        <div style={styles.buttonContainer}>
                            <button 
                                onClick={this.handleAddToCart} 
                                style={styles.button}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
                            >
                                Add to My Cart
                            </button>
                            
                            <Link 
                                to="/" 
                                style={styles.backLink}
                                onMouseEnter={(e) => e.target.style.color = '#333'}
                                onMouseLeave={(e) => e.target.style.color = '#666'}
                            >
                                ← Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const ProductDetailPage = () => {
    const location = useLocation();
    return <ProductDetail location={location} />;
};

export default ProductDetailPage;