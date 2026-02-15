const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req,res)=>{
  try {
    const { email, password } = req.body;
    
    const userExists = await User.findOne({ email });
    if(userExists) return res.status(400).json("Usuario ya existe");
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
      email,
      password: hashedPassword
    });
    
    res.status(201).json("Usuario creado");
  } catch(err) {
    res.status(500).json("Error al registrar");
  }
};

exports.login = async (req,res)=>{
  try {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json("No existe usuario");

    const valid = await bcrypt.compare(password, user.password);
    if(!valid) return res.status(400).json("Password incorrecto");

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.json({token});
  } catch(err) {
    res.status(500).json("Error al iniciar sesion");
  }
};
