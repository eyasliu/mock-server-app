import React, {PureComponent} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import Project from './project'

const Wrap = ({children}) => <MuiThemeProvider>{children}</MuiThemeProvider>
const Navbar = props => <AppBar title="模拟数据服务" />

export default class App extends PureComponent {
	render(){
		return (
			<Wrap>
				<div>
					<Navbar />
					<Project />
				</div>
			</Wrap>
		)
	}
}