import React, {PureComponent} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'

import Dialog from 'material-ui/Dialog'

import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'

const ModelAction = [
	<FlatButton
    label="关闭"
    primary={true}
  />,
  <FlatButton
    label="提交"
    primary={true}
  />,
  <FlatButton
    label="删除"
    primary={true}
  />
]
const Model = props => (
	<Dialog
		title={props.title}
		actions={ModelAction}
		modal={false}
		open={true}
		onRequestClose={props.close}
		autoScrollBodyContent={true}
		bodyStyle={{marginTop: 10}}
	>
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

export default class ProjectList extends PureComponent{
	constructor(props){
		super();
		this.state = {
			apis: {},
			modelData: {},
			modelOpen: false
		}
		this.getApis().then(apis => {
			this.setState({apis})
		})
	}
	getApis(){
		return fetch('/admin/projects/basic').then(res => res.json())
	}
	showDetail(url, data, e){
		const modelData = {
			title: url,
			api: data,
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