exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("recipe_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments("ing_id");
      tbl
        .string("ingredients_name")
        .unique()
        .notNullable();
    })
    .createTable("recipes_ingredients", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable();
      tbl
        .foreign("recipe_id")
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredients_id")
        .unsigned()
        .notNullable();
      tbl
        .foreign("ingredients_id")
        .references("ing_id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.float("quantity");
    })
    .createTable("steps", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable();
      tbl
        .foreign("recipe_id")
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.integer("step_number");
      tbl.string("instructions", 128);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("steps");
};
