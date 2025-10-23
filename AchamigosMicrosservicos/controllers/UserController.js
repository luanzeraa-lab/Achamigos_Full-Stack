const User = require('../models/UserModel'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

const SECRET = process.env.JWT_SECRET || 'seusegredoaqui'; 


exports.cadastrar = async (req, res) => {
  try {
    
    const { nome, cnpj, telefone, userLogin, senha, email, endereco, tipo, userStatus, linkUser } = req.body;

    
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }
    
    if (await User.findOne({ userLogin })) {
      return res.status(400).json({ error: 'Login já cadastrado' });
    }

    
    const user = await User.create({
      nome, cnpj, telefone, userLogin, senha, email, endereco, tipo, userStatus, linkUser
    });

    
    const userObj = user.toObject();
    delete userObj.senha;
    delete userObj.__v;

    
    return res.status(201).json(userObj);
  } catch (err) {
    
    return res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
};


exports.login = async (req, res) => {
  try {
    
    const { userLogin, senha } = req.body;

    
    const user = await User.findOne({ userLogin }).select('+senha');

    
    if (!user || !(await bcrypt.compare(senha, user.senha))) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '1d' });

    
    const userObj = user.toObject();
    delete userObj.senha;
    delete userObj.__v;

    
    return res.json({ user: userObj, token });
  } catch (err) {
    
    return res.status(500).json({ error: 'Erro ao fazer login' });
  }
};