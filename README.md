# Projet : Gestion d'interventions (Atelier Mobile)

## Description
Application backend Node.js + Express connectée à PostgreSQL pour gérer les interventions d'un atelier mobile.

## Endpoints API
- GET /interventions → Liste des interventions
- POST /interventions → Ajouter une intervention (JSON : description, date)
- DELETE /interventions/:id → Supprimer une intervention

## Démarrage
1. Créez la base PostgreSQL :
   ```sql
   CREATE DATABASE atelier;
   \c atelier
   CREATE TABLE interventions (
       id SERIAL PRIMARY KEY,
       description TEXT NOT NULL,
       date TIMESTAMP NOT NULL
   );
   ```
2. Configurez les infos PostgreSQL dans index.js (user, password, etc.)
3. Installez les dépendances et lancez le serveur :
   ```bash
   npm install
   npm start
   ```
