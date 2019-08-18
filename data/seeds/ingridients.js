exports.seed = function(knex) {
  return knex("ingredients").insert([
    { ingredients_name: "ing1" },
    { ingredients_name: "ing2" },
    { ingredients_name: "ing3" }
  ]);
};
