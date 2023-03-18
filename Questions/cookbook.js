export default function cookbook() {
  const recipes = [
    {
      id: 1,
      recipeName: "Spaghetti Bolognese",
      recipeCreator: "Jamie Oliver"
    },
    {
      id: 2,
      recipeName: "Chicken Tikka Masala",
      recipeCreator: "Madhur Jaffrey"
    },
    {
      id: 3,
      recipeName: "Beef Stew",
      recipeCreator: "Gordon Ramsay"
    },
    {
      id: 4,
      recipeName: "Classic Cheeseburger",
      recipeCreator: "Ina Garten"
    },
    {
      id: 5,
      recipeName: "Pad Thai",
      recipeCreator: "Jet Tila"
    },
    {
      id: 6,
      recipeName: "Roast Chicken",
      recipeCreator: "Nigella Lawson"
    },
    {
      id: 7,
      recipeName: "Hummus",
      recipeCreator: "Yotam Ottolenghi"
    },
    {
      id: 8,
      recipeName: "Miso Soup",
      recipeCreator: "Chungah Rhee"
    },
    {
      id: 9,
      recipeName: "Tiramisu",
      recipeCreator: "Giada De Laurentiis"
    },
    {
      id: 10,
      recipeName: "Chili Con Carne",
      recipeCreator: "Bobby Flay"
    }
  ];

  return (
    <div>
      <h2>COOKBOOK</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.recipeName} : {recipe.recipeCreator}
          </li>
        ))}
      </ul>
    </div>
  );
}
