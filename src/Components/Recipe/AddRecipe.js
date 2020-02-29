import React from "react";

const AddRecipe = () => {
  return (
    <main className="add-recipe-page">
      <h2 className="add-recipe-tagline">Add a recipe!</h2>
      <div className="add-form-container">
        <form className="add-recipe-form">
          <fieldset className="add-recipe-fieldset">
            <label htmlFor="recipename" className="field-label">
              <span className="label-span">Recipe Name</span>
            </label>
            <input
              type="text"
              name="recipename"
              id="recipename"
              className="field-input"
            />
            <label htmlFor="recipephoto" className="field-label">
              <span className="label-span">Photo URL</span>
            </label>
            <input
              type="text"
              name="recipephoto"
              id="recipephoto"
              className="field-input"
            />

            <label htmlFor="ingredients" className="field-label">
              <span className="label-span">Ingredients:</span>
            </label>
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              className="field-input"
              placeholder="Ingredient 1"
            />
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              className="field-input"
              placeholder="Ingredient 2"
            />
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              className="field-input"
              placeholder="Ingredient 3"
            />
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              className="field-input"
              placeholder="Ingredient 4"
            />
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              className="field-input"
              placeholder="Ingredient 5"
            />
            <button className="add-ingredient-button">
              {" "}
              + Add an ingredient
            </button>
            <label htmlFor="instructions" className="field-label">
              <span className="label-span">Instructions:</span>
            </label>
            <input
              type="text"
              name="instruction"
              id="instruction"
              className="field-input"
              placeholder="Step 1"
            />
            <input
              type="text"
              name="instruction"
              id="instruction"
              className="field-input"
              placeholder="Step 2"
            />
            <input
              type="text"
              name="instruction"
              id="instruction"
              className="field-input"
              placeholder="Step 3"
            />
            <input
              type="text"
              name="instruction"
              id="instruction"
              className="field-input"
              placeholder="Step 4"
            />
            <input
              type="text"
              name="instruction"
              id="instruction"
              className="field-input"
              placeholder="Step 5"
            />
            <button className="add-instruction-button"> + Add a step</button>
            <button className="submit-recipe-button">Post recipe</button>
          </fieldset>
        </form>
      </div>
    </main>
  );
};

export default AddRecipe;
