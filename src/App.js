
import './App.scss';
import FirebaseConnectionTest from './components/FirebaseConnectionTest';
import TestFirebase from './components/FirebaseConnectionTest';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#FFF8F0" }}>
        {/* You can add navbar/logo here themed as needed */}
        <AppRouter />
      </div>
    </>
  );
}

export default App;
