import './App.css'
import logo from './logo.png'
import logos from './ransaini.png'
import logoes from './rtr.png'

function App() {
  return (
    <>
      <div className="container">
        <div className="heading-wrapper">
          <h2>Colloborating
            <br />
            with top brands</h2>
        </div>
        <div className="brand-list">
          <div class="brand-1 brand-item">
            <div className="img-container">
              <img src={logo} alt="there is image" />
            </div>
            <p>Brand1</p>
          </div>
          <div class="brand-2 brand-item">
            <div className='img-container'>
              <img src={logos} alt="there is an image" />
            </div>
            <p>Brand2</p>
          </div>
          <div class="brand-3 brand-item">
            <div className="img-container">
              <img src={logoes} alt="there is an image"></img>
            </div>
            <p>Brand2</p>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
