# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development Notes

Taking notes.

### Icons

Open [https://www.s-ings.com/typicons/](https://www.s-ings.com/typicons/) 



### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

FORM VALIDATION
BACK error

LOADER
ENV CONFIG

onChange={(e) => setEmail(e.target.value)} value={ email }
<NavLink to="/sign-up">Create an Account</NavLink>
---
const Dashboard = () => {
    return (
        <div>Dashboard - for private layout</div>
    )
}
export default Dashboard;
---
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* public  */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
        </Route>

        {/* private */}
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

---


const RoleAccess = ({ roles = [] }) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  return !roles.length || roles.includes(user?.role)
    ? <Outlet />
    : <Navigate to="/unauthorized" replace />;
};
...
<Route path="/" element={<Layout />}>
  <Route element={<RoleAccess roles={["user", "admin"]} />}>
    <Route path="/dashboard" element={<Dashboard />} />
  </Route>
  <Route element={<RoleAccess roles={["admin"]} />}>
    <Route path="/users" element={<UserList />} />
    <Route path="/adduser" element={<AddUser />} />
  </Route>
</Route>;




