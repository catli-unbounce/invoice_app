import logo from './logo.svg';
import styles from './App.scss';
function App() {
  return (
    <div className="global-width">
      <img src="/images/icon-check.svg" alt="image" />
      <h1>m ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliqu</h1>
      <h2>m ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliqu</h2>
      <h3>m ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliqu</h3>
      <h4>m ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliqu</h4>
      <button className="danger">New Invoice</button>    
      <span className="tag tag--paid">Pending</span>
    </div>
  );
}

export default App;
