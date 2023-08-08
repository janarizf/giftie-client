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
import Home from "./pages/home";
import Help from "./pages/help";
import About from "./pages/about";
import Blog from "./pages/blog";
import Account from "./pages/account";
import Gift from "./pages/giftideas";
import GroupsEdit from "./components/groups/edit-group.component";
import ListEdit from "./pages/list-edit";
import Login from "./components/login/login.component";
import SignUp from "./components/login/signup.component";
import Footer from "./components/footer";
import NavbarMain from "./components/navbar/navbar";
import AdminLogin from "./pages/admin/adminLogin/adminLogin";
import { AdminLayout } from "./components/admin/AdminLayout";
import { ROUTES } from "./constants/ROUTES";
import { Themes } from "./components/admin/Themes";
import Links from "./pages/admin/Links/Links";

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
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/gift' element={<Gift />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/help' element={<Help />} />
              <Route path='/account' element={<Account />} />
              <Route path='/list/:id/item/:id' element={<ListEdit />} />
              <Route path='/list/:id' element={<ListEdit />} />
              <Route path='/groups/:id' element={<GroupsEdit />} />
              <Route path='/groups/:id/invite' element={<GroupsEdit />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
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
