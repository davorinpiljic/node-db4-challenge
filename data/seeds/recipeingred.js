exports.seed = function(knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("recipes_ingredients").insert([
    { recipe_id: 1, ingredients_id: 1, quantity: 1.5 },
    { recipe_id: 1, ingredients_id: 2, quantity: 3.5 },
    { recipe_id: 1, ingredients_id: 3, quantity: 5.5 },
    { recipe_id: 2, ingredients_id: 2, quantity: 1.5 },
    { recipe_id: 3, ingredients_id: 1, quantity: 1.0 },
    { recipe_id: 3, ingredients_id: 3, quantity: 1.0 }
  ]);
};
