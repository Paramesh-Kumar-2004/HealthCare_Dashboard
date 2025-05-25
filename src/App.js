import DashboardMainContent from './Pages/DashboardMainContent';
import SideBar from './Components/SideBar';
import Header from './Components/Header';
import './Styles/App.css';


function App() {
  return (
    <div className="App_MainDiv">
      <div className='Side_Bar'>
        <SideBar />
      </div>
      <div className="Main_Content">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
