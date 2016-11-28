import React, {PureComponent} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import api from './api'

export default class Project extends PureComponent {
	constructor(props){
		super()
		this.state = {
			list: []
		}
		this.getProjects().then(list => {
			this.setState({list})
		})
	}
	getProjects(){
		return fetch('/projects').then(res => res.json())
	}

	render(){
		return (
			<Card>
				<CardHeader
		      title={<div><span>项目列表</span><FlatButton label="添加新项目" primary={true} /></div>}
		      subtitle="模拟数据服务器列表"
		      style={{borderBottom: '1px solid #eee'}}
		    />
		    <CardText>
					<List>
						{this.state.list.map(item => (
				      <ListItem 
				      	primaryText={item.name} 
				      	secondaryText={item.domain}
				      	onClick={e => {
				      		this.context.changePage('list', item.domain.split('.')[0])
				      	}}
				      />
						))}
			    </List>
		    </CardText>
			</Card>
		)
	}
}
Project.contextTypes = {
	changePage: React.PropTypes.func
}