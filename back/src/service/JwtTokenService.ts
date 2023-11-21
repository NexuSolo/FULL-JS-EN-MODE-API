import crypto from 'crypto';
import { UtilisateurReduit } from '../model/UtilisateurReduit';
import jwt, { JwtPayload } from 'jsonwebtoken';

export class JwtTokenService {
    private static instance: JwtTokenService;
    private readonly secretKey = crypto.randomBytes(64).toString('hex');

    public static getInstance(): JwtTokenService {
        if (!JwtTokenService.instance) {
            JwtTokenService.instance = new JwtTokenService();
        }
        return JwtTokenService.instance;
    }
    
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

    async getUtilisateurIdFromToken(token: string): Promise<number> {
        try {
            console.log(token.split(' ')[1])
            const decodedToken = jwt.verify(token.split(' ')[1], this.secretKey) as JwtPayload;
            console.log(decodedToken);
            if (!decodedToken) {
                throw new Error("Invalid token");
            }
            return decodedToken.id;
        } catch (error) {
            throw new Error("Invalid token");
        }
    }

}