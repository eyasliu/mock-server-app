import React, {PureComponent} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import Dialog from 'material-ui/Dialog'

import api from './api';
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'



const Model = props => {
	return (
		<Dialog
			title={props.title}
			actions={props.actions}
			modal={false}
			open={true}
			onRequestClose={props.close}
			autoScrollBodyContent={true}
			bodyStyle={{marginTop: 10}}
		>
			<SelectField
				floatingLabelText="请求方法"
				value={props.url.method}
				disabled={!!props.url.path}
			>
				<MenuItem value="any" primaryText="任意" />
				<MenuItem value="get" primaryText="GET" />
				<MenuItem value="post" primaryText="POST" />
				<MenuItem value="put" primaryText="PUT" />
				<MenuItem value="delete" primaryText="DELETE" />
				<MenuItem value="options" primaryText="OPTIONS" />
			</SelectField>
			<br />
			<TextField
				floatingLabelText="接口url"
				defaultValue={props.url.path}
				disabled={!!props.url.path}
			/>
			{/*<pre className="api-code">
				{JSON.stringify(props.api, null, 4)}
			</pre>*/}
			<CodeMirror
				value={JSON.stringify(props.api, null, 4)}
				preserveScrollPosition={true}
				options={{
					mode: 'javascript',
					lineNumbers: true
				}}
			>
			</CodeMirror>
		</Dialog>
	)
}

export default class ProjectList extends PureComponent{
	constructor(props){
		super();
		this.state = {
			apis: {},
			modelData: {},
			modelOpen: false
		}
		api.getApis().then(apis => {
			this.setState({apis})
		})
	}

	showDetail(url, data, e){
		const ModelAction = [
			<FlatButton
		    label="关闭"
		    onClick={this.closeModel.bind(this)}
		  />,
		  <FlatButton
		    label="提交"
		    primary
		  />,
		  data ? <FlatButton
		    label="删除"
		    secondary
		  /> : ''
		]
		const parseUrl = url.split(' ');
		const modelData = {
			title: "编辑接口数据",
			url: {
				method: parseUrl.length > 1 ? parseUrl[0] : 'any',
				path: parseUrl.length > 1 ? parseUrl[1] : parseUrl[0]
			},
			api: data,
			actions: ModelAction,
			close: this.closeModel.bind(this)
		}
		this.setState({
			modelData,
			modelOpen: !this.state.modelOpen
		})
	}
	closeModel(){
		this.setState({modelOpen: false})
	}
	render(){

		return (
			<Card>
				<CardHeader
		      title={<div><span>云协作</span><FlatButton label="添加新路径" primary={true} /></div>}
		      style={{borderBottom: '1px solid #eee'}}
		    />
		    <CardText>
					<List>
						{Object.keys(this.state.apis).map(item => {
							const api = this.state.apis[item]
							return (
								<ListItem 
					      	primaryText={item} 
					      	secondaryText={JSON.stringify(api)}
					      	onClick={this.showDetail.bind(this, item, api)}
					      />
				      )
						})}
			    </List>
			    {this.state.modelOpen && <Model {...this.state.modelData}/>}
		    </CardText>
			</Card>
		)
	}
}