import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetchProducts from '../api/productService';

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        paddingBottom: '120px',
        fontFamily: "'Helvetica Neue', Arial, sans-serif"
    },
    header: {
        textAlign: 'center',
        marginBottom: '50px'
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: '300',
        color: '#333',
        marginBottom: '10px',
        letterSpacing: '1px'
    },
    subtitle: {
        fontSize: '1rem',
        color: '#666',
        fontWeight: '400'
    },
    productGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '40px 30px',
        marginTop: '40px'
    },
    productCard: {
        textDecoration: 'none',
        color: 'inherit',
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        cursor: 'pointer'
    },
    productImageContainer: {
        position: 'relative',
        marginBottom: '20px',
        overflow: 'hidden',
        backgroundColor: '#f9f9f9'
    },
    productImage: {
        width: '100%',
        height: '280px',
        objectFit: 'cover',
        transition: 'transform 0.3s ease'
    },
    productInfo: {
        textAlign: 'center'
    },
    productTitle: {
        fontSize: '0.95rem',
        fontWeight: '400',
        margin: '0 0 8px 0',
        color: '#333',
        letterSpacing: '0.5px',
        lineHeight: '1.4'
    },
    productPrice: {
        fontSize: '1rem',
        color: '#333',
        fontWeight: '500'
    },
    loading: {
        textAlign: 'center',
        padding: '60px 20px',
        fontSize: '1.1rem',
        color: '#666'
    },
    error: {
        textAlign: 'center',
        padding: '60px 20px'
    },
    errorTitle: {
        color: '#e74c3c',
        fontSize: '1.5rem',
        marginBottom: '15px'
    },
    retryButton: {
        padding: '12px 24px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        borderRadius: '0',
        cursor: 'pointer',
        fontSize: '0.9rem',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        transition: 'background-color 0.3s ease'
    }
};

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: true,
            error: null
        };
    }

    async componentDidMount() {
        try {
            const productsData = await fetchProducts();
            this.setState({ 
                products: productsData, 
                loading: false,
                error: null 
            });
        } catch (error) {
            console.error('Error fetching products:', error);
            this.setState({ 
                error: 'Failed to load products. Please try again.', 
                loading: false 
            });
        }
    }

    render() {
        const { products, loading, error } = this.state;

        if (loading) {
            return (
                <div style={styles.loading}>
                    <p>Loading products...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div style={styles.error}>
                    <h2 style={styles.errorTitle}>Unable to Load Products</h2>
                    <p style={{color: '#666', marginBottom: '20px'}}>{error}</p>
                    <button 
                        style={styles.retryButton}
                        onClick={() => this.handleRetry()}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
                    >
                        Retry
                    </button>
                </div>
            );
        }

        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Shop</h1>
                    <p style={styles.subtitle}>{products.length} products available</p>
                </div>
                
                <div 
                    data-testid="product-grid"
                    style={styles.productGrid}
                >
                    {products.map(product => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}/details`}
                            state={{ product }}
                            style={styles.productCard}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                const img = e.currentTarget.querySelector('img');
                                if (img) img.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                const img = e.currentTarget.querySelector('img');
                                if (img) img.style.transform = 'scale(1)';
                            }}
                        >
                            <div style={styles.productImageContainer}>
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    style={styles.productImage}
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/280x280/f0f0f0/999?text=Product';
                                    }}
                                />
                            </div>
                            <div style={styles.productInfo}>
                                <h3 style={styles.productTitle}>
                                    {product.title}
                                </h3>
                                <p style={styles.productPrice}>
                                    ${product.price}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default HomePage;