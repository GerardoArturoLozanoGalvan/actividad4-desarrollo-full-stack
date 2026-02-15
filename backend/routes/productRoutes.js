const router=require("express").Router();
const auth=require("../middleware/auth");
const ctrl=require("../controllers/productController");

router.get("/",auth,ctrl.getProducts);
router.post("/",auth,ctrl.createProduct);
router.put("/:id",auth,ctrl.updateProduct);
router.delete("/:id",auth,ctrl.deleteProduct);

module.exports=router;
