# 🛍️ Eclypse E-Commerce

**Eclypse** is a fully functional, full-stack e-commerce web application designed with performance, scalability, and user experience in mind. Built using the **MERN** (MongoDB, Express.js, React.js, Node.js) stack, it replicates the real-world features of a modern e-commerce platform, including user authentication, product listings, cart management, order processing, and admin controls.

---

## 📦 Tech Stack

**Frontend**
- React.js (JavaScript)
- Tailwind CSS
- Axios (API communication)
- React Router DOM

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- dotenv (Environment config)

---

## 📁 Folder Structure

```bash
eclypse_ecommerce/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── tailwind.config.js
├── package.json
└── README.md
```

⚙️ Getting Started

1. Clone the repository
```bash
git clone https://github.com/kartikrathod23/eclypse_ecommerce.git
cd eclypse_ecommerce
```

2. Setup Backend
```bash
cd backend
npm install
```

Create a .env file and configure the following:
```
MONGO_URI=mongodb+srv://rathodkartik293:kartik12345@cluster0.g4ukafw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
```

Start the backend server:
```
node server.js
```

3. Setup Frontend
```
cd ../frontend
npm install
npm run dev
```

📬 Contact
Developer: Kartik Rathod
📧 rathodkartik293@gmail.com
📱 +91 9307091361
