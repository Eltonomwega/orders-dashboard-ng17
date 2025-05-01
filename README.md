# 🛍️ E-Commerce Admin Dashboard

![Dashboard Preview](screenshot.png)

A modern admin dashboard for e-commerce order management built with Angular, PrimeNG, and Tailwind CSS.

## ✨ Features

- **Order Management** (CRUD operations)
- **Responsive Design** (Mobile-first approach)
- **Dark/Light Mode** (With localStorage persistence)
- **Data Visualization** (Stats cards and charts)
- **Form Validation** (Reactive forms with validation)
- **Mock API** (JSON Server backend)

## 🛠️ Tech Stack

- ![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)
- ![PrimeNG](https://img.shields.io/badge/PrimeNG-1570B8?style=flat)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
- ![JSON Server](https://img.shields.io/badge/JSON_Server-000000?style=flat)

## 🚀 Quick Start

### Prerequisites

- Node.js v16+
- Angular CLI (`npm install -g @angular/cli`)
- JSON Server (`npm install -g json-server`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-dashboard.git
   cd ecommerce-dashboard
   npm install
   ng serve
   npx json-server --watch src/assets/data/orders.json --port 3000

## 📁 Project Structure
src/
├── app/
│   ├── components/          # Reusable components
│   ├── pages/               # Main views
│   ├── services/            # Data services
│   ├── models/              # TypeScript interfaces
│   └── ...                  # Other Angular files
├── assets/
│   └── data/                # Mock JSON data
└── styles/                  # Global styles