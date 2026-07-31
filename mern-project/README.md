1. MongoB

Use a local MongoDB instance (`mongodb://127.0.0.1:27017`) or a free MongoDB Atlas cluster.

#############################################################################

2. Backend

cd backend

npm install

cp .env.example .env     # add your MONGO_URI 

npm run seed             # populate sample About Me data

npm run dev              # runs on http://localhost:5000


#############################################################################

3. Frontend

cd frontend

npm install

cp .env.example .env

npm run dev               # runs on http://localhost:5173
