import AuthPage from "./components/AuthPage";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <AuthPage />
    </AuthProvider>
  );
};

export default App;
