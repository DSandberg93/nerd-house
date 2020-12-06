import { Request, Response, Router } from 'express';

const router = Router();

router.get('/hello-world', (req: Request, res: Response) => {
  console.log('something else again');
  res.status(200).json({ message: 'Hello World!' });
});

export default router;
