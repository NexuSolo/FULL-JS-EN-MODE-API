# Utilisez une image Node.js
FROM node:14

# Définissez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port que votre application utilise
EXPOSE 8080

# Définissez la commande pour démarrer votre application
CMD [ "npm", "run", "dev" ]