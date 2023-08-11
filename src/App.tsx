import { Navigate, Route, Routes } from "react-router-dom";
import "./css/style.css";
import Layout from "./layouts";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import { routes } from "./routes";
{
  Object.values(routes)
    .flat()
    .map(({ path, name }, idx) => (
      <Route
        path={path}
        key={`${name}-${idx}`}
        element={<Dashboard name={name} />}
      />
    ));
}
function App() {
  const routeObj = Object.values(routes).flat();
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path={"settings"} element={<Settings />} />
        {routeObj.map(({ name }) => (
          <Route element={<Dashboard name={name} />} />
        ))}
        <Route path={""} element={<Navigate to="settings" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
