import {useEffect} from 'react'
import axios from 'axios'

import Countries from './components/Countries'
import Indicators from './components/Indicators'
import SavedViews from './components/SavedViews'
import PlotView from './components/PlotView'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


function App() {

  return (
    <>
		<BrowserRouter>
			<Link to="/"><button>Home</button></Link>
			<Link to="/countries"><button>All Countries</button></Link>
			<Link to="/indicators"><button>All Indicators</button></Link>
			<Link to="/saved-views"><button>Saved Views</button></Link>
			<Link to="/plot-views"><button>Plot Views</button></Link>
			
			<Routes>
				<Route exact path="/" element={<h1>World Bank Data</h1>}></Route>
				<Route exact path="/countries" element={<Countries></Countries>}></Route>
				<Route exact path="/indicators" element={<Indicators></Indicators>}></Route>
				<Route exact path="/saved-views" element={<SavedViews></SavedViews>}></Route>
				<Route exact path="/plot-views" element={<PlotView></PlotView>}></Route>
				<Route path="*" element={<h1>Page Not Found, try another route</h1>}></Route>
			</Routes>
		</BrowserRouter>
    </>
  )
}
export default App;
