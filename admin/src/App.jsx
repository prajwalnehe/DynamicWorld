import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import EntityListPage from "./pages/EntityListPage";
import NotFound from "./pages/NotFound";
import { entityDefinitions } from "./data/entities";

const App = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route index element={<Dashboard />} />
      {entityDefinitions.map((entity) => (
        <Route
          key={entity.id}
          path={entity.path.replace(/^\//, "")}
          element={<EntityListPage />}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
