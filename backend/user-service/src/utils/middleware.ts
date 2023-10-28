import express from 'express';

export const requireAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.session.isAuth) {
        next();
    } else {
        res.status(403).json({ message: 'Unauthenticated' });
    }
}

export const requireCorrectUser = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.session.user.username === req.params.username) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

export const requireAdmin = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.session.isAdmin) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}