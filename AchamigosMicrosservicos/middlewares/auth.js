const jwt = require('jsonwebtoken'); 
const SECRET = process.env.JWT_SECRET || 'seusegredoaqui'; 


module.exports = (req, res, next) => {
  
  const authHeader = req.headers.authorization;

  
  if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });

  
  const [, token] = authHeader.split(' ');

  try {
  
    const decoded = jwt.verify(token, SECRET);

    
    req.userId = decoded.id;

  
    return next();
  } catch (err) {
   
    return res.status(401).json({ error: 'Token inválido' });
  }
};