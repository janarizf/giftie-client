import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Help from "./pages/Help/Help";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Account from "./pages/account/profile/Account";
import Gift from "./pages/GiftIdeas/Giftideas";
import GroupsEdit from "./components/groups/edit-group.component";
import List from "./pages/account/lists/List";
import Login from "./components/login/login.component";
import SignUp from "./components/login/signup.component";

import Footer from "./components/footer";
import NavbarMain from "./components/navbar/navbar";
import AdminLogin from "./pages/admin/adminLogin/adminLogin";
import { AdminLayout } from "./components/admin/AdminLayout";
import { ROUTES } from "./constants/ROUTES";
import { Themes } from "./components/admin/Themes";
import Links from "./pages/admin/Links/Links";
import Marketing from "./pages/admin/Marketing/Marketing";
import CreateFeaturedList from "./pages/admin/Marketing/CreateFeaturedList/CreateFeaturedList";

let isAuthenticated = true;
class App extends Component {
  isAdmin() {
    const { pathname } = window.location;
    return pathname.includes("/admin");
  }

  isAuthenticated() {
    return isAuthenticated;
  }

  render() {
    return (
      <Router>
        {!this.isAdmin() ? (
          <Container>
            <NavbarMain />
            <Routes>
              <Route exact path={`${ROUTES.MAIN_APP.LOGIN}`} element={<Login />} />
              <Route exact path={`${ROUTES.MAIN_APP.SIGNUP}`} element={<SignUp />} />
              <Route exact path={`${ROUTES.ROOT}`} element={<Home />} />
              <Route exact path={`${ROUTES.MAIN_APP.HOME}`} element={<Home />} />
              <Route exact path={`${ROUTES.MAIN_APP.ABOUT}`} element={<About />} />
              <Route exact path={`${ROUTES.MAIN_APP.GIFT}`} element={<Gift />} />
              <Route exact path={`${ROUTES.MAIN_APP.BLOG}`} element={<Blog />} />
              <Route exact path={`${ROUTES.MAIN_APP.HELP}`} element={<Help />} />
              <Route exact path={`${ROUTES.MAIN_APP.ACCOUNT}`} element={<Account />} />

              <Route path='/list/:id/item/:id' element={<List />} />
              <Route path='/list/:id' element={<List />} />
              <Route path='/groups/:id' element={<GroupsEdit />} />
              <Route path='/groups/:id/invite' element={<GroupsEdit />} />

              <Route path='/invitelogin/:id' element={<Login />} />
              <Route path='/invitesignup/:id' element={<SignUp />} />
            </Routes>
            <Footer />
          </Container>
        ) : this.isAuthenticated() ? (
          <AdminLayout>
            <Routes>
              <Route
                exact
                path={`${ROUTES.ADMIN}/*`}
                element={<div>404</div>}
              />
              <Route
                exact
                path={`${ROUTES.ADMIN.DASHBOARD}`}
                element={<div>Dashboard</div>}
              />
              <Route
                exact
                path={`${ROUTES.ADMIN.THEMES}`}
                element={<Themes />}
              />
              <Route exact path={`${ROUTES.ADMIN.LINKS}`} element={<Links />} />
              <Route
                exact
                path={`${ROUTES.ADMIN.MARKETING}`}
                element={<Marketing />}
              />
              <Route
                exact
                path={`${ROUTES.ADMIN.FEATURED_LIST.CREATE}`}
                element={<CreateFeaturedList />}
              />
            </Routes>
          </AdminLayout>
        ) : (
          <Routes>
            <Route exact path={ROUTES.ADMIN.ROOT} element={<AdminLogin />} />
            <Route exact path={ROUTES.ADMIN.LOGIN} element={<AdminLogin />} />
          </Routes>
        )}
      </Router>
    );
  }
}

export default App;
