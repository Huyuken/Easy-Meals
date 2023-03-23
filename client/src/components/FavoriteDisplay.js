import { QUERY_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';

const RecipeDisplay = ({ recipe }) => {
    const [recipeInfo, setRecipeInfo] = useState(null);
    const { loading, error, data } = useQuery(QUERY_USER);
    const recipeId = window.location.href.split("/")[window.location.href.split("/").length - 1]
    console.log(recipeId)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;

    // const user = data.user;

    const instructions = ["Preheat oven to 450°F. Spray rimmed baking sheet with nonstick spray.",

        "Cut fennel bulbs lengthwise in half.",

        "Cut halves lengthwise into 1/2-inch-wide wedges, with some core still attached to each.",

        "Combine fennel and shallots in large bowl.",

        "Add 3 tablespoons oil; stir to coat. Arrange fennel and shallots in single layer on prepared sheet.",

        "Sprinkle generously with salt and pepper. Roast until tender and golden, stirring every 10 minutes, about 35 minutes.Cook haricots verts in large saucepan of boiling salted water until crisp-tender, about 3 minutes.",

        "Drain. Rinse with cold water and drain again. Pat dry.",

        "Heat remaining 2 tablespoons oil in large skillet over medium-high heat.",

        "Add roasted vegetables and haricots verts; toss until heated through, about 3 minutes. Season with salt and pepper.",

        "Transfer to bowl and serve."]

    const ingredients = ["2 large fresh fennel bulbs, trimmed",

        "1 lb haricots verts or small slender green beans, trimmed",

        "5 Tbsps olive oil, divided",

        "3/4 lb shallots, peeled, halved through root end"]






    return (
        <div>
            <h2>Haricots Verts, Roasted Fennel, And Shallots</h2>
            <img src="https://spoonacular.com/recipeImages/33026-556x370.jpg" alt="" />
            <p>Servings: 4</p>
            <p>Ready in: 45 minutes</p>
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                {instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
};

export default RecipeDisplay;

