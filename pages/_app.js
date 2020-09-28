import Home from './index'
import Context from '../context/Context'
import eddData from '../components/edd_data'
import '../styles/globals.css'
import "semantic-ui-css/semantic.min.css"

export default function MyApp() {
  return (
    <Context.Provider value={eddData}>
      <Home />
    </Context.Provider>
  );
}
