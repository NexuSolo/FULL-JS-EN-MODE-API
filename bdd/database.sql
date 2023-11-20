CREATE TABLE Utilisateur (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255),
    prenom VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    photo VARCHAR(255)
);
CREATE TABLE Voiture (
    id SERIAL PRIMARY KEY,
    marque VARCHAR(255),
    modele VARCHAR(255),
    annee INT,
    nombreDePlace INT,
    consommation DECIMAL,
    description TEXT,
    photo VARCHAR(255),
    utilisateur_id INT REFERENCES Utilisateur(id)
);
CREATE TABLE Covoiturage (
    id SERIAL PRIMARY KEY,
    localisationDepart VARCHAR(255),
    localisationArrive VARCHAR(255),
    dateDepart TIMESTAMP,
    dateArrivee TIMESTAMP,
    prix DECIMAL,
    distance DECIMAL,
    conducteur_id INT REFERENCES Utilisateur(id) ON DELETE CASCADE,
    note DECIMAL,
    etat INT
);
CREATE TABLE Covoiturage_Utilisateurs (
    covoiturage_id INT REFERENCES Covoiturage(id) ON DELETE CASCADE,
    utilisateur_id INT REFERENCES Utilisateur(id) ON DELETE CASCADE,
    PRIMARY KEY (covoiturage_id, utilisateur_id)
);
CREATE TABLE NoteUtilisateur (
    id SERIAL PRIMARY KEY,
    valeur DECIMAL,
    utilisateur_id INT REFERENCES Utilisateur(id) ON DELETE CASCADE
);