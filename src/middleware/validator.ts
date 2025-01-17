import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateRegistration = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  body('first_name').notEmpty(),
  body('last_name').notEmpty(),
  handleValidationErrors,
];

export const validateLogin = [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty(),
  handleValidationErrors,
];

export const validateAmcCreate = [
  body('item').notEmpty(),
  body('vendor').notEmpty(),
  body('aircraft').notEmpty(),
  handleValidationErrors,
];

export const validateAmcUpdate = [
  body('item').optional().notEmpty(),
  body('vendor').optional().notEmpty(),
  body('aircraft').optional().notEmpty(),
  handleValidationErrors,
];

function handleValidationErrors(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}
