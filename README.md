# Tradexa 📈


[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

Tradexa is a modern, full-stack stock trading and investment management platform. It offers an elegant public landing portal alongside a feature-rich trading dashboard resembling institutional trading platforms (e.g., Zerodha Kite). Users can search stocks, place mock orders, monitor their portfolio holdings, track short-term positions, and analyze assets using dynamic visual charts.

---

## 🌟 Features

### 💻 Trading Dashboard (`/dashboard`)
* **Real-time WatchList:** Interactive watch list with live search, custom price indicators, and a hover quick-action menu.
* **Order Placement (Buy/Sell Window):** Clean buy/sell action dialog to submit mock orders specifying quantity, price, and trade modes.
* **Holdings Tracker:** Automatic calculations of total investment value, current value, total profit/loss (P&L), and percentage returns.
* **Positions Tracker:** Monitor active intra-day or short-term positions with live P&L status.
* **Data Visualization:** Integrated doughnut and bar graphs tracking stock allocation and performance.
* **Funds Manager:** Dashboard section showing available margins, collateral cash, and financial transactions.

### 🌐 Landing Page (`/frontend`)
* Fully responsive pricing, about, product list, signup, and support center pages.
* Intuitive global navigation and styled branding elements.

### ⚙️ Backend REST API (`/backend`)
* Modular MongoDB structure with schemas validating trade data.
* Endpoints for inserting and fetching user orders, stock positions, and holdings.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
|---|---|
| **Frontend Landing** | React, CSS3, HTML5 |
| **Trading Dashboard** | React, Vite, ChartJS, CSS3 |
| **Backend Service** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose ODM |
| **Dev Tools** | Nodemon, Git |

---

## 📁 Repository Structure

```text
Tradexa/
├── backend/               # Node/Express API Server
│   ├── model/             # Mongoose Models (Holdings, Orders, Positions)
│   ├── schemas/           # MongoDB validation schemas
│   ├── index.js           # Express main server & routing
│   └── package.json
├── dashboard/             # Trading Portal Client (Vite + React)
│   ├── src/
│   │   ├── components/    # WatchList, Holdings, BuyActionWindow, etc.
│   │   ├── index.css      # Dashboard styling & variables
│   │   └── index.jsx      # Main application router
│   └── package.json
└── frontend/              # Marketing Landing Site (React)
    ├── src/
    │   ├── landing_page/  # About, Home, Pricing, Support, Signup
    │   ├── index.js       # Main landing page router
    │   └── index.css      # Core styles
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v16+ recommended)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a locally running MongoDB instance.

### Setup and Running

#### 1. Backend Server Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your MongoDB URL:
   ```env
   PORT=3000
   MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/tradexa
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

#### 2. Marketing Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

#### 3. Investment Dashboard Setup
1. Navigate to the dashboard folder:
   ```bash
   cd ../dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the Vite development server:
   ```bash
   npm run dev
   ```

---

## 🔌 API Documentation

| HTTP Method | Route | Description |
|:---|:---|:---|
| **GET** | `/allHoldings` | Retrieves list of all equity holdings |
| **GET** | `/allPositions` | Retrieves list of active positions |
| **POST** | `/newOrder` | Places a new stock trade order |

### Sample Order Payload (`POST /newOrder`)
```json
{
  "name": "INFY",
  "qty": 5,
  "price": 1555.45,
  "mode": "BUY"
}
```

---

