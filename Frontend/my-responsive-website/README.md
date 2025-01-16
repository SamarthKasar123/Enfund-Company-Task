# Responsive React Dashboard

A modern, responsive dashboard built with React and Tailwind CSS, featuring dark mode, interactive components, and a collapsible sidebar.

## 🚀 Features

- **Responsive Layout**
  - Automatically adjusts based on screen size
  - Collapsible sidebar menu
  - Fixed navigation bar
  - Right-side notification panel

- **Theme Support**
  - Dark/Light mode toggle
  - Smooth theme transitions
  - Consistent color scheme

- **Interactive Components**
  - Active state highlighting
  - Hover effects
  - Animated transitions
  - Responsive images

- **Responsive Scaling**
  - 90% scale: 992px - 1600px
  - 80% scale: 700px - 767px
  - 75% scale: 600px - 700px
  - 50% scale: ≤ 600px

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd my-responsive-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

## 📦 Dependencies

```json
{
  "dependencies": {
    "@headlessui/react": "^1.7.17",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "lucide-react": "^0.263.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
}
```

## 🎨 Project Structure

```
my-responsive-website/
├── src/
│   ├── components/
│   │   └── ResponsiveLayout.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── public/
│   └── index.html
├── package.json
└── tailwind.config.js
```

## ⚙️ Configuration

### Tailwind Configuration

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
```

## 🚀 Usage

1. **Basic Setup**
   ```jsx
   import ResponsiveLayout from './components/ResponsiveLayout';

   function App() {
     return <ResponsiveLayout />;
   }
   ```

2. **With Router**
   ```jsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import ResponsiveLayout from './components/ResponsiveLayout';

   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/*" element={<ResponsiveLayout />} />
         </Routes>
       </BrowserRouter>
     );
   }
   ```

## 🔧 Customization

### Theme Colors
You can customize the theme colors by modifying the `themes` object in `ResponsiveLayout.js`:

```javascript
const themes = {
  light: {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-100',
    text: 'text-gray-800',
    hover: 'hover:bg-blue-700',
  },
  dark: {
    primary: 'bg-gray-800',
    secondary: 'bg-gray-700',
    text: 'text-white',
    hover: 'hover:bg-gray-600',
  }
};
```

### Menu Items
Add or modify menu items by updating the `menuItems` array:

```javascript
const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'profile', label: 'Profile', icon: '👤' },
  // Add more items here
];
```

## 📱 Responsive Breakpoints

- **Large Desktop**: > 1600px
- **Desktop**: 992px - 1600px (90% scale)
- **Tablet**: 700px - 767px (80% scale)
- **Small Tablet**: 600px - 700px (75% scale)
- **Mobile**: ≤ 600px (50% scale)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Samarth Kasar

## 🙏 Acknowledgments

- React Team
- Tailwind CSS Team
- Lucide React Icons