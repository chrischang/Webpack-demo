import React, {Component} from 'react'
import Dummy from './DumbComponent'

class App extends Component {
	render(){
		return (
			<div>
				Hello World
				<Dummy></Dummy>
			</div>
		)
	}
}

// export this component to be used somewhere else (we could have done export default class App above as well)
export default App