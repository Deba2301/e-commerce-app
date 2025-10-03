import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import cartStore from '../store/CartStore';

const styles = {
    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#333',
        color: 'white',
        padding: '20px 30px',
        textAlign: 'center',
        boxSizing: 'border-box',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        borderTop: '1px solid #555'
    },
    footerLink: {
        color: 'white',
        textDecoration: 'none',
        display: 'block'
    },
    cartInfo: {
        fontSize: '0.9rem',
        fontWeight: '400',
        letterSpacing: '0.5px'
    },
    cartHint: {
        fontSize: '0.8rem',
        opacity: 0.8,
        marginLeft: '15px'
    },
    lastUpdated: {
        fontSize: '0.75rem',
        marginTop: '8px',
        opacity: 0.7
    }
};

const Footer = observer(class Footer extends Component {
    render() {
        return (
            <footer 
                style={styles.footer}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#444'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
            >
                <Link to="/cart" style={styles.footerLink}>
                    <div style={styles.cartInfo}>
                        Cart: {cartStore.itemCount} items | Total: ${cartStore.totalValue}
                        {cartStore.itemCount > 0 && <span style={styles.cartHint}> - Click to view cart</span>}
                    </div>
                </Link>
            </footer>
        );
    }
});

export default Footer;