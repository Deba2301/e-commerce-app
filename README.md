# React E-Commerce Application

A modern, responsive e-commerce web application built with React, featuring product browsing, detailed product views, and shopping cart functionality.

## 🛒 Features

- **Product Listing**: Browse products in a clean, modern grid layout
- **Product Details**: View detailed product information with images and descriptions
- **Shopping Cart**: Complete cart management with add, remove, and quantity controls
- **Cart Management**: Dedicated cart page with item removal and quantity adjustment
- **Navigation**: Seamless routing between pages with React Router
- **Modern Design**: Wix-inspired clean, minimalist styling
- **Responsive Design**: Mobile-friendly interface with inline CSS
- **State Management**: MobX for reactive cart state with session storage persistence
- **API Integration**: Real product data from FakeStore API
- **E2E Testing**: Cypress testing framework setup

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

### Installation & Setup

1. **Clone or navigate to the project directory**

   ```bash
   cd react-ecommerce-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   - The application will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, navigate to the URL manually

## 📋 Available Scripts

| Command            | Description                         |
| ------------------ | ----------------------------------- |
| `npm start`        | Runs the app in development mode    |
| `npm run build`    | Builds the app for production       |
| `npm test`         | Launches the test runner            |
| `npx cypress open` | Opens Cypress testing interface     |
| `npx cypress run`  | Runs Cypress tests in headless mode |

## 🏗️ Project Structure

```
react-ecommerce-app/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── api/
│   │   └── productService.js  # FakeStore API integration
│   ├── components/
│   │   └── Footer.js          # Interactive cart summary footer
│   ├── pages/
│   │   ├── CartPage.js        # Shopping cart management page
│   │   ├── HomePage.js        # Product listing with modern grid
│   │   └── ProductDetailPage.js # Product detail view
│   ├── store/
│   │   └── CartStore.js       # MobX cart state with CRUD operations
│   ├── App.css               # Global modern styling
│   ├── App.js                # Main app component & routing
│   ├── index.css             # Base styles
│   └── index.js              # Clean app entry point
├── cypress/
│   ├── e2e/
│   │   ├── basic.cy.js        # Basic Cypress functionality tests
│   │   └── ecommerce.cy.js    # E-commerce specific tests
│   └── support/               # Cypress support files
├── cypress.config.js
├── package.json
└── README.md
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0 (Class Components)
- **Routing**: React Router DOM 6.8.1
- **State Management**: MobX 6.15.0
- **HTTP Client**: Axios 1.12.2
- **Testing**: Cypress 15.3.0
- **Styling**: Inline CSS (Mobile Responsive)
- **API**: FakeStore API (https://fakestoreapi.com/)

## 📱 Application Features

### Home Page (`/`)

- Displays products fetched from FakeStore API
- Hover effects and smooth animations
- Responsive design adapting to all screen sizes
- Click any product to navigate to detail page

### Product Detail Page (`/product/:id/details`)

- Split layout with product image and details
- Full product information including description and pricing
- "Add to Cart" functionality with user feedback
- Clean, modern styling with professional typography
- Navigation back to collection

### Shopping Cart Page (`/cart`)

- Dedicated cart management interface
- Individual item quantity controls (+ and - buttons)
- Remove specific items with confirmation
- Clear entire cart functionality
- Real-time total calculation
- Empty cart state with helpful messaging
- Continue shopping navigation

### Cart Footer

- Persistent cart summary at bottom of all pages
- Shows item count and total value
- Clickable to navigate to cart page
- Modern styling with hover effects

## 🧪 Testing

### Running E2E Tests

1. **Start the development server**

   ```bash
   npm start
   ```

2. **Run Cypress tests (in a new terminal)**

   ```bash
   # Interactive mode
   npx cypress open

   # Headless mode
   npx cypress run
   ```

### Test Coverage

- Basic Cypress framework functionality
- Application component testing setup
- User journey testing (browsing, viewing products, cart functionality)

## 🎨 Design & Styling

### Design System
- **Inspiration**: Modern Wix e-commerce aesthetic
- **Typography**: Helvetica Neue font family with proper hierarchy
- **Color Palette**: Clean whites, subtle grays (#666, #333)
- **Layout**: Minimalist approach with generous white space
- **Components**: Borderless cards with subtle hover animations

### Responsive Design
- **Desktop**: Multi-column grid with optimal spacing
- **Tablet**: Responsive grid adapting to screen width
- **Mobile**: Single column layout with touch-friendly controls
- **Cross-browser**: Compatible with modern browsers

### User Experience
- **Navigation**: Intuitive routing with clear visual feedback
- **Interactions**: Smooth hover states and transitions
- **Accessibility**: Keyboard navigation and focus states
- **Performance**: Optimized images and efficient rendering

## 🔧 Configuration

### Environment Variables

The application uses the default Create React App configuration. To run on a different port:

```bash
# Windows PowerShell
$env:PORT=3001; npm start

# macOS/Linux
PORT=3001 npm start
```

### API Configuration

The application uses FakeStore API by default. To modify the API endpoint, update `src/api/productService.js`:

```javascript
const API_URL = "https://your-api-endpoint.com";
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**

   - Kill existing processes: `Get-Process -Name "node" | Stop-Process -Force` (Windows)
   - Or use a different port: `$env:PORT=3001; npm start`

2. **Dependencies not installing**

   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again



