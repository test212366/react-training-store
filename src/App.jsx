import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Step1 = () => <>one</>
const Step2 = () => <>two</>
const Step3 = () => <>tree</>
const Result = () => <>Result</>

const Header = () => <h1>header</h1>

function App() {
	return (
		<>
			<Header />
			<Router>
				<Switch>
					<Route exact path="/" component={Step1} />
					<Route path="/step2" component={Step2} />
					<Route path="/step3" component={Step3} />
					<Route path="/result" component={Result} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
