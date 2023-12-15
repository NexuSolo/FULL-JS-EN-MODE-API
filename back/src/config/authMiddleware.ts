import express from 'express';
import { JwtTokenService } from '../service/JwtTokenService';

const jwtTokenService = JwtTokenService.getInstance();

export const authMiddleware: express.RequestHandler = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(req.path === '/utilisateur/login' || req.path === '/utilisateur/register') {
        return next();
    }

    if (!authHeader) {
        return res.status(401).send({ error: 'No token provided' });
    }

    if(req.method === 'GET') {
        switch(req.path) {
            case '/covoiturage/all': return next()
            case '/utilisateur/': return next()
            default: break;
        }
        if(req.path.startsWith('/covoiturage/')) {
            return next();
        }
    }
    
    if (!jwtTokenService.verifyToken(authHeader.split(' ')[1])) {
        return res.status(401).send({ error: 'Token invalid' });
    }
    
    next();
};