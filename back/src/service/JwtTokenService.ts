import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Utilisateur } from '../model/Utilisateur';
import { UtilisateurReduit } from '../model/UtilisateurReduit';

export class JwtTokenService {

    private readonly secretKey = crypto.randomBytes(64).toString('hex');

    generateToken(payload: UtilisateurReduit, expiresIn: string | number = '1h'): string {
        const simplePayload = {
            id: payload.id,
            nom: payload.nom,
            prenom: payload.prenom,
            email: payload.email,
            note: payload.note,
            photo: payload.photo
        }
        return jwt.sign(simplePayload, this.secretKey, { expiresIn });
    }

    verifyToken(token: string): boolean {
        try {
            jwt.verify(token, this.secretKey);
            return true;
        } catch (error) {
            return false;
        }
    }

    getUtilisateurFromToken(token: string): UtilisateurReduit {
        return jwt.decode(token) as UtilisateurReduit;
    }

}