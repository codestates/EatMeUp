import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage/Login";
import SignupPage from "./components/SignupPage/Signup";
import LandingPage from "./components/LandingPage/Landing";

/* 모든 레시피 메인페이지 */
import ResultRecipesPage from "./components/AllRecipesPage/ResultRecipes";

/* 마이페이지 메인 페이지 */
import MyPage from "./components/MyPage/MyPage";

/* 마이페이지 - 냉장고메인페이지 */
import FridgePage from "./components/FridgePage/FridgeMain";

/* 마이페이지 - 내 레시피 페이지 */
import MyRecipePage from "./components/MyRecipePage/MyRecipe";
import CreateRecipePage from "./components/CreateRecipePage/CreateRecipe";
import EditRecipePage from "./components/EditRecipePage/EditRecipe";

/* 마이페이지 - 식단짜기 페이지 */
import MealPlannerPage from "./components/MealPlannerPage/MealPlanner";
import PlanningPage from "./components/MealPlannerPage/PlanningPage";

/* 마이페이지 - 좋아요 레시피리스트 페이지 */
import MyLikelistPage from "./components/MyLikelistPage/MyLikelist";

/* 마이페이지 - 유저정보 페이지 */
import MyInfo from "./components/MyPage/MyInfo";

/* 레시피 상세 페이지 */
import DetailPage from "./components/DetailPage/DetailPage";

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path='/' exact component={LandingPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/signup' exact component={SignupPage} />
        <Route path='/recipes' exact component={ResultRecipesPage} />
        <Route path='/fridge' exact component={FridgePage} />
        <Route path='/user/myrecipe' exact component={MyRecipePage} />
        <Route path='/user/myrecipe/create' component={CreateRecipePage} />
        <Route
          path='/user/myrecipe/edit/:id'
          exact
          component={EditRecipePage}
        />
        <Route path='/user/likelist' exact component={MyLikelistPage} />
        <Route path='/user/myplanner' exact component={MealPlannerPage} />
        <Route path='/user/myplanner/create' exact component={PlanningPage} />
        <Route path='/user/mypage' component={MyPage} />
        <Route path='/user/info' component={MyInfo} />
        <Route path='/recipe/info/:id' component={DetailPage} />
      </div>
    </Router>
  );
}

export default App;
