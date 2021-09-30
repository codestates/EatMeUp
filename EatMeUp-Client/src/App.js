import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage/Login";
import SignupPage from "./components/SignupPage/Signup";
import LandingPage from "./components/LandingPage/Landing";

/* 모든 레시피 메인페이지 */
import AllRecipesPage from "./components/AllRecipesPage/AllRecipes";
import ResultRecipesPage from "./components/AllRecipesPage/ResultRecipes";

/* 레시피 상세 페이지 */
import DetailPage from "./components/DetailPage/DetailPage";

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

import PrivateRoute from "./components/PrivateRoute";

function App(props) {
  return (
    <Router>
      <div className='App'>
        <Route path='/' exact component={LandingPage} />
        <Route path='/login' option={false} component={LoginPage} exact />
        <Route
          path='/signup'
          component={SignupPage}
          option={false}
          exact
        />
        <PrivateRoute path='/recipes' exact component={AllRecipesPage} />
        <PrivateRoute
          path='/recipes/result'
          exact
          component={ResultRecipesPage}
          option={true}
        />
        <Route path='/recipe/info/:id' component={DetailPage} />
        <PrivateRoute path='/fridge' exact component={FridgePage} />
        <PrivateRoute path='/user/myrecipe' exact component={MyRecipePage} />
        <PrivateRoute
          path='/user/myrecipe/create'
          component={CreateRecipePage}
        />
        <PrivateRoute
          path='/user/myrecipe/edit/:id'
          exact
          component={EditRecipePage}
        />
        <PrivateRoute path='/user/likelist' exact component={MyLikelistPage} />
        <PrivateRoute
          path='/user/myplanner'
          exact
          component={MealPlannerPage}
        />
        <PrivateRoute
          path='/user/myplanner/create'
          component={PlanningPage}
          exact
        />
        <PrivateRoute path='/user/mypage' component={MyPage} exact />
        <PrivateRoute path='/user/info' component={MyInfo} exact />
      </div>
    </Router>
  );
}

export default App;
