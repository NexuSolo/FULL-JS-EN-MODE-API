CREATE TABLE Utilisateur (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    photo VARCHAR(255)
);

CREATE TABLE Covoiturage (
    id SERIAL PRIMARY KEY,
    localisationDepart VARCHAR(255) NOT NULL,
    localisationArrive VARCHAR(255) NOT NULL,
    dateDepart TIMESTAMP NOT NULL,
    dateArrivee TIMESTAMP NOT NULL,
    prix DECIMAL NOT NULL,
    distance DECIMAL NOT NULL,
    conducteur_id INT REFERENCES Utilisateur(id) ON DELETE CASCADE NOT NULL,
    etat INT NOT NULL,
    marque VARCHAR(255) NOT NULL,
    modele VARCHAR(255) NOT NULL,
    nombreDePlace INT NOT NULL,
    description TEXT,
    photo VARCHAR(255),
);
CREATE TABLE Covoiturage_Utilisateurs (
    covoiturage_id INT REFERENCES Covoiturage(id) NOT NULL,
    utilisateur_id INT REFERENCES Utilisateur(id) NOT NULL,
    PRIMARY KEY (covoiturage_id, utilisateur_id)
);
CREATE TABLE NoteUtilisateur (
    id_rater INT REFERENCES Utilisateur(id) NOT NULL,
    valeur DECIMAL NOT NULL,
    covoiturage_id INT REFERENCES Covoiturage(id) NOT NULL
);