exports.seed = function(knex) {
  return knex("recipes").insert([
    { recipe_name: "food 1" },
    { recipe_name: "food 2" },
    { recipe_name: "food 3" }
  ]);
};
