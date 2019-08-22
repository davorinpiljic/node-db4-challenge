exports.seed = function(knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("steps").insert([
    { recipe_id: 1, step_number: 1, instructions: "mix" },
    { recipe_id: 1, step_number: 2, instructions: "stir" },
    { recipe_id: 1, step_number: 3, instructions: "bake" },
    { recipe_id: 2, step_number: 1, instructions: "mix" },
    { recipe_id: 3, step_number: 1, instructions: "bake" },
    { recipe_id: 3, step_number: 2, instructions: "stir" },
    { recipe_id: 3, step_number: 3, instructions: "mix" }
  ]);
};
