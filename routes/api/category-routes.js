const router = require("express").Router();
const { Category, Product } = require("../../models");
const { findAll, update } = require("../../models/Category");

// The `/api/categories` endpoint

// ------------find all categories be sure to include its associated Products
//
router.get("/", (req, res) => {
  Category.findAll({
    include: [Product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});
//
// -----------find one category by its `id` value be sure to include its associated Products
//
router.get("/:id", (req, res) => {
  Category.findByPk(
    req.params.id,
    {
    include: [Product],
    })
    .then((categoryData) => res.json(categoryData))
    .catch((err) => res.status(500).json(err));
});

//
// -----------create a new category
//
router.post("/", (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(500).json(err));
});
//
// -----------update a category by its `id` value
//
router.put("/:id", async (req, res) => {
  const categoryData = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: { id: req.params.id },
    }
  );
  return res.json(categoryData);
});

//
// ------------delete a category by its `id` value
//
router.delete("/:id", (req, res) => {});

module.exports = router;
