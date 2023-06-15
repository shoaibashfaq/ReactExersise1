import logo from './logo.svg';
import './App.css';
import Contact from './components/component.jsx';
function App() {
  return (
    <div className="App">
      <div className="card">
        <Contact 
        name="Muhammed"
        mobileNumber="111-111-1111"
        workNumber="917-777-7777"
        email="muhammed@gmail.com"
        />
      </div>

      <div className="card">
        <Contact 
        name="Rasul Nekzad"
        mobileNumber="222-222-2222"
        workNumber="777-777-777"
        email="rasul@gmail.com"
        />
      </div>

      <div className="card">
        <Contact 
        name="Tashi"
        mobileNumber="999-999-9999"
        workNumber="444-444-444"
        email="tashi@gmail.com"
        />
      </div>

    </div>

    
  );
}

export default App;
 