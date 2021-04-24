const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// --------------The `/api/tags` endpoint
// find all tags be sure to include its associated Product data
//
//
router.get("/", (req, res) => {
  Tag.findAll({
    include: [Product],
  })
    .then((tags) => res.json(tags))
    .catch((err) => res.status(500).json(err));
});

// --------------------------find a single tag by its `id` be sure to include its associated Product data
//
//
router.get("/:id", (req, res) => {
  Tag.findByPk(req.params.id, {
    include: [Product],
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => res.status(500).json(err));
});

// -------------------------------create a new tag------------------------------
// 
// 
router.post("/", (req, res) => {
  Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(500).json(err));
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
