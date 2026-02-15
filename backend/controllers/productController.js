const Product = require("../models/Product");

exports.getProducts = async (req,res)=>{
 try {
   res.json(await Product.find());
 } catch(err) {
   res.status(500).json("Error al obtener productos");
 }
};

exports.createProduct = async (req,res)=>{
 try {
   const { name, price } = req.body;
   
   if (!name || !price) {
     return res.status(400).json("Nombre y precio son requeridos");
   }
   
   const product = await Product.create({
     name,
     price: parseFloat(price),
     userId: req.user.id
   });
   
   res.status(201).json(product);
 } catch(err) {
   console.log(err);
   res.status(500).json("Error al crear producto: " + err.message);
 }
};

exports.updateProduct = async (req,res)=>{
 try {
   await Product.findByIdAndUpdate(req.params.id, req.body);
   res.json("Producto actualizado");
 } catch(err) {
   res.status(500).json("Error al actualizar producto");
 }
};

exports.deleteProduct = async (req,res)=>{
 try {
   await Product.findByIdAndDelete(req.params.id);
   res.json("Producto eliminado");
 } catch(err) {
   res.status(500).json("Error al eliminar producto");
 }
};
