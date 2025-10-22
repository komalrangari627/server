jwt-backend:
- Provides login (POST /api/auth/login) and protected GET /api/auth/me
- It imports the User model from ../registeruser-backend/models/User.js via registeruser_import.js
- Use the same local MongoDB database as registeruser-backend
