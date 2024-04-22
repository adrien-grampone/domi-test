// utils.ts

import variables from "@/variables";

export const afficherDate = (timestamp) => {
    const dateActuelle = new Date();
    const dateFournie = new Date(parseInt(timestamp));

    const formatageMois = (mois) => {
        return mois < 9 ? '0' + (mois + 1) : (mois + 1);
    };

    if (dateActuelle.getDate() === dateFournie.getDate() && dateActuelle.getMonth() === dateFournie.getMonth() && dateActuelle.getFullYear() === dateFournie.getFullYear()) {
        return dateFournie.getHours() + ":" + dateFournie.getMinutes();
    } else if (dateActuelle.getDate() - dateFournie.getDate() < 7 && dateActuelle.getMonth() === dateFournie.getMonth() && dateActuelle.getFullYear() === dateFournie.getFullYear()) {
        const jours = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
        return jours[dateFournie.getDay()];
    } else {
        return dateFournie.getDate() + "/" + formatageMois(dateFournie.getMonth());
    }
};

export const getHourMessage = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    const hours = date.getHours().toString().padStart(2, '0'); // Récupère les heures et les formate
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Récupère les minutes et les formate
    return `${hours}h${minutes}`; // Format final
};

export const getPdp = (contact) => {
    if (contact && contact.pdp) {
        return variables.api + contact.pdp;
    }
    return '/profil-default.png';
};

export const getUnreadMessages = (contact) => {
    let unreadMessages = contact.messages.filter(message => message.status === 'PENDING');
    return unreadMessages.length;
};

export const getStatus = (contact) => {
    if (contact.connected) {
        return contact.connected === 'online' && +contact.isBlur ? 'blur' : contact.connected
    }
    return 'offline';
};

export const getLoc = (contact) => {
    if (contact && contact.ville && contact.codeDepartement) {
        if (contact.ville && contact.codeDepartement) {
            return contact.ville + ' (' + contact.codeDepartement+ ')';
        } else if (contact.ville) {
            return contact.ville;
        }
    }
    return '';
};
