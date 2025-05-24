import DashboardMainContent from './Components/DashboardMainContent';
import SideBar from './Components/SideBar';
import Header from './Components/Header';
import './Styles/App.css';


function App() {
  return (
    <div className="App_MainDiv">
      <SideBar />
      <div className="Main_Content">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
