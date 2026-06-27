require('dotenv').config(); // This loads your password from the .env file

const { MongoClient } = require('mongodb');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 💡 Fallback mock data in case the cloud connection is blocked by your local network!
const fallbackClassMenu = [
  {"_id": "CookesNPanna", "flavor": "Cookies 'n Panna", "price": 7.00, "imgKey": "cookies" },
  {"_id": "RedFlag", "flavor": "Red Swirl", "price": 5.00, "imgKey": "redflag" },
  {"_id": "CafeBianco", "flavor": "Cafe Bianco", "price": 6.00, "imgKey": "cafebianco" },
  {"_id": "MaplePecan", "flavor": "Maple Butter Pecan", "price": 7.00, "imgKey": "maplepecan" },
  {"_id": "Vanilla", "flavor": "Vanilla", "price": 5.00, "imgKey": "vanilla" },
  {"_id": "Chocolate", "flavor": "chocolate", "price": 5.00, "imgKey": "chocolate" }
];

const fallbackSpecials = [
  { "_id": "Scoop", "flavor": "scoop of the day", "price": 14.00, "imgKey": "scoop" },
  { "_id": "AudDream", "flavor": "aud's Dream", "price": 14.00, "imgKey": "auddream" }
];

const uri = process.env.MONGO_URI;
let db = null;

async function connectDB() {
    if (!uri) {
        console.log("⚠️ MONGO_URI missing from environment setup. Launching fallbacks immediately.");
        return;
    }
    try {
        console.log("🔄 Connecting to MongoDB Atlas Cloud...");
        const client = new MongoClient(uri);
        await client.connect();
        db = client.db('CafePannaDB');
        console.log("✅ Successfully linked to MongoDB Atlas Cloud!");
    } catch (err) {
        console.log("⚠️ MongoDB connection refused by local network. Activating local memory fallbacks safely.");
    }
}
connectDB();

// 🍦 1. FEATURED PINTS ENDPOINT
app.get('/api/featured_pints', async (req, res) => {
    try {
        if (db) {
            const items = await db.collection('featured_pints').find({}).toArray();
            return res.json(items);
        }
    } catch (err) { 
        console.error("Database fetch failed for featured pints:", err); 
    }
    res.json(fallbackSpecials);
});

// 🥛 2. CLASSIC MENU ENDPOINT
app.get('/api/classic_menu', async (req, res) => {
    try {
        if (db) {
            const items = await db.collection('classic_menu').find({}).toArray();
            return res.json(items); 
        }
    } catch (err) { 
        console.error("Database fetch failed for classic menu:", err); 
    }
    res.json(fallbackClassMenu);
});

// 📦 3. ROUTE TO SAVE AN ORDER
app.post('/api/order', async (req, res) => {
    const newOrder = req.body; 
    console.log("📦 Express API Received New Order:", newOrder);
    
    try {
        if (db) {
            const result = await db.collection('order').insertOne(newOrder);
            return res.status(201).json(result);
        } else {
            throw new Error("Atlas Database connection is offline.");
        }
    } catch (err) {
        console.error("Order database write blocked, deploying local confirmation:", err.message);
        // Fixed: Explicitly returns a safe JSON payload to trip your frontend fallback gracefully!
        res.status(200).json({ acknowledged: false, fallbackTrackingActive: true });
    }
});

// 🚀 PRODUCTION STATIC ASSET HOSTING FOR RENDER ENGINE
const path = require('path');
if (process.env.NODE_ENV === 'production') {
    // Serves the compiled dist folder from your client files
    app.use(express.static(path.join(__dirname, '../client/dist')));
    
    // Directs any wild web paths right to your index.html asset loop
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});