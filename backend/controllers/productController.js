const Product = require("../models/Product");

exports.getProducts = async (req,res)=>{
 res.json(await Product.find());
};

exports.createProduct = async (req,res)=>{
 res.json(await Product.create(req.body));
};

exports.updateProduct = async (req,res)=>{
 await Product.findByIdAndUpdate(req.params.id, req.body);
 res.json("Producto actualizado");
};

exports.deleteProduct = async (req,res)=>{
 await Product.findByIdAndDelete(req.params.id);
 res.json("Producto eliminado");
};
