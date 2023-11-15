const db = require("../models");
const Place = require("../models/places");
const Comment = require("../models/comment");

async function seed() {
  await db;

  let place = await Place.findOne({ name: "H-Thai-ML" });

  let comment = await Comment.create({
    author: "Ratatouille Tony",
    rant: false,
    stars: 5.0,
    content: "10/10 Highly recommended!",
  });
  
  place.comments.push(comment.id);

  await place.save();

  process.exit();
}
seed();