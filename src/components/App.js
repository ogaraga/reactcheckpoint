import './App.css' //importing App css(styling property)
import 'bootstrap/dist/css/bootstrap.min.css';  //importing bootstrap css(styling property)
import Navbar from './Navbar'; //importing Navbar from NAVBAR component
import Heading from './Heading'; //importing Heading from Heading component
import Cards from './Cards'; //importing Cards from Cards component
function App() {
    return <> {/*Use of fragment*/}
        <div className='App'>
            <Navbar />
            <Heading />
            <Cards />
        </div>
    </>
}

export default App