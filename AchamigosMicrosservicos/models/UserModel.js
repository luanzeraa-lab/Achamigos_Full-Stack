const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs');   


const EnderecoSchema = new mongoose.Schema({
  cep:    { type: String, required: true },  
  rua:    { type: String, required: true },   
  cidade: { type: String, required: true },   
  numero: { type: String, required: true }    
});


const UserSchema = new mongoose.Schema({
  nome:        { type: String, required: true },  
  cnpj:        { type: String, required: true },  
  telefone:    { type: String, required: true },  
  userLogin:   { type: String, required: true },  
  senha:       { type: String, required: true },   
  email:       { type: String, required: true, unique: true }, 
  endereco:    { type: EnderecoSchema, required: true },      
  tipo:        { type: String, required: true },   
  userStatus:  { type: String, required: true },   
  linkUser:    { type: String }                    
});


UserSchema.pre('save', async function(next) {
  
  if (!this.isModified('senha')) return next();
  this.senha = await bcrypt.hash(this.senha, 8); 
  next();
});


module.exports = mongoose.model('User', UserSchema);