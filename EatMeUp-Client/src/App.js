import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from './components/LoginPage/Login'
import SignupPage from './components/SignupPage/Signup'
import LandingPage from './components/LandingPage/Landing'

/* 모든 레시피 메인페이지 */
import AllRecipesPage from "./components/AllRecipesPage/AllRecipes";

/* 마이페이지 - 냉장고메인페이지 */
import FreezerMainPage from "./components/FreezerMainPage/FreezerMain";

/* 마이페이지 - 내 레시피 페이지 */
import MyRecipePage from "./components/MyRecipePage/MyRecipe";
import CreateRecipePage from "./components/MyRecipePage/CreateRecipe/CreateRecipe";
import EditRecipePage from "./components/MyRecipePage/EditRecipe/EditRecipe";

/* 마이페이지 - 식단짜기 페이지 */
import MenuPlannerPage from "./components/MenuPlannerPage/MenuPlanner"
import PlanningPage from './components/MenuPlannerPage/PlanningPage'

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />

        <Route path='/recipes' exact component={AllRecipesPage} />
        <Route path='/fridge' exact component={FreezerMainPage} />
        <Route path='/user/myrecipe' exact component={MyRecipePage} />
        <Route path='/user/myrecipe/create' exact component={CreateRecipePage} />
        <Route path='/user/myrecipe/edit' exact component={EditRecipePage} />
        <Route path='/user/myplanner' exact component={MenuPlannerPage} />
        <Route path='/user/myplanner/create' exact component={PlanningPage} />
      
      </div>
    </Router>
  );
}

export default App;
