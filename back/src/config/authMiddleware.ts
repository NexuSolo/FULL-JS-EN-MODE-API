import express from 'express';
import { JwtTokenService } from '../service/JwtTokenService';

const jwtTokenService = new JwtTokenService();

export const authMiddleware: express.RequestHandler = (req, res, next) => {
    const authHeader = req.headers.authorization;

    return next();

    // console.log(req.path);

    // if(req.path === '/utilisateur/login' || req.path === '/utilisateur/register') {
    //     return next();
    // }

    // if (!authHeader) {
    //     return res.status(401).send({ error: 'No token provided' });
    // }

    // const parts = authHeader.split(' ');

    // const bearerToken = parts.find(part => part.startsWith('Bearer '));

    // if (!bearerToken) {
    //     return res.status(401).send({ error: 'Token malformatted' });
    // }
    
    // const token = bearerToken.split(' ')[1];
    
    // if (!jwtTokenService.verifyToken(token)) {
    //     return res.status(401).send({ error: 'Token invalid' });
    // }
    
    // next();
};