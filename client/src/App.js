import React, {PureComponent} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import Project from './Project'
import List from './List'

const Wrap = ({children}) => <MuiThemeProvider>{children}</MuiThemeProvider>
const Navbar = props => <AppBar title="模拟数据服务" />

export default class App extends PureComponent {
	constructor(){
		super()
		this.state = {
			page: 'project',
			project: ''
		}
		
	}
	changePage(page, project = ''){
		this.setState({page, project})
	}
	getChildContext(){
		return {
			page: this.state.page,
			project: this.state.project,
			changePage: this.changePage.bind(this)
		}
	}
	
	render(){
		const page = {
			list: <List />,
			project: <Project />
		}
		return (
			<Wrap>
				<div>
					<Navbar />
					{page[this.state.page]}
				</div>
			</Wrap>
		)
	}
}
App.childContextTypes = {
	page: React.PropTypes.string,
	project: React.PropTypes.string,
	changePage: React.PropTypes.func,
}