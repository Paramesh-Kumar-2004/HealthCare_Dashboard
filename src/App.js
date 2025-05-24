import DashboardMainContent from './Components/DashboardMainContent';
import SideBar from './Components/SideBar';
import Header from './Components/Header';
import './Styles/App.css';


function App() {
  return (
    <div className="app-container">
      <SideBar />
      <div className="main-content">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
