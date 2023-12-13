export async function getCovoiturage(){
    const response = await fetch('http://localhost:8080/api/covoiturage/all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    if (data.error) {
        throw new Error(data.error);
    }

    return data;
}

export async function createTrajet(localisationDepart, localisationArrive, dateDepart, dateArrivee, distance, prix, nombreDePlace, marque, modele, description, photo){
    const response = await fetch('http://localhost:8080/api/covoiturage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({ 
            covoiturage: {
                localisationDepart, 
                localisationArrive, 
                dateDepart, 
                dateArrivee, 
                prix, 
                distance, 
                voiture: {
                    marque, 
                    modele, 
                    nombreDePlace, 
                    description, 
                    photo
                }
            } 
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    if (data.error) {
        throw new Error(data.error);
    }

    return data;
}

export async function getInfoCovoiturage(id){
    console.log(id);
    const response = await fetch('http://localhost:8080/api/covoiturage/'+id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    if (data.error) {
        throw new Error(data.error);
    }

    return data;
}

export async function getPassengers(id){
    const response = await fetch('http://localhost:8080/api/covoiturage/passengers/'+id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    if (data.error) {
        throw new Error(data.error);
    }

    return data;
}
