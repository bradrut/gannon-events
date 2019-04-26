#!/bin/bash
mongod &
cd backend/
npm start &
cd ..
npm start &
