import React, {PureComponent} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Snackbar from 'material-ui/Snackbar';
import CircularProgress from 'material-ui/CircularProgress'

import Dialog from 'material-ui/Dialog'

import api from './api';
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/keymap/sublime'

const returnJson = (jsonstr, url) => {
	const code = "(function(){return " + jsonstr + "})()"
	const res = eval(code)
	return typeof res === 'function' ? res() : res;
}

class Model extends PureComponent{
	constructor(props){
		super()
		var parseUrl = (url => {
				const parse = url.split(' ');
				return {
					method: parse.length > 1 ? parse[0] : 'any',
					path: parse.length > 1 ? parse[1] : parse[0]
				}
			})(props.url)
		this.state = {
			code: JSON.stringify(props.api, null, 4),
			message: '',
			method: parseUrl.method,
			path: parseUrl.path
		}
	}
	save(){
		let url = this.state.method == 'any' ? '' : this.state.method + ' '
		if(!this.state.path){
			this.showMessage('URL不能为空')
			return
		}
		if(!this.state.code){
			this.showMessage('接口数据不能为空')
			return
		}
		url += (this.state.path.indexOf('/') !== 0 ? '/' : '') + this.state.path
		let code;
		try{
			code = returnJson(this.state.code)
		} catch(e) {
			this.showMessage('语法错误: ' + e.message)
			return
		}

		api.saveApi(url, code).then(() => {
			this.props.close()
			this.props.saveApi(url, code)
		});

	}
	remove(){
		api.removeApi(this.props.url).then(() => {
			this.props.close()
			this.props.saveApi(this.props.url, '')
		})
	}
	updateCode(code){
		this.setState({code})
	}
	showMessage(message){
		this.setState({message})
	}
	render(){
		const ModelAction = [
			<FlatButton
		    label="关闭"
		    onClick={this.props.close}
		  />,
		  <FlatButton
		    label="提交"
		    primary
		    onClick={this.save.bind(this)}
		  />,
		  this.props.url ? <FlatButton
		    label="删除"
		    secondary
		    onClick={this.remove.bind(this)}
		  /> : ''
		]
		var parseUrl = (url => {
				const parse = url.split(' ');
				return {
					method: parse.length > 1 ? parse[0] : 'any',
					path: parse.length > 1 ? parse[1] : parse[0]
				}
			})(this.props.url)
		return (
			<Dialog
				title={this.props.title}
				actions={ModelAction}
				modal={false}
				open={true}
				onRequestClose={this.props.close}
			>
				<div>
					<SelectField
						floatingLabelText="请求方法"
						value={this.state.method}
						disabled={!!this.props.url}
						onChange={(e, index, value) => this.setState({method: value})}
						style={{float: 'left', width: '25%'}}
					>
						<MenuItem value="any" primaryText="任意" />
						<MenuItem value="get" primaryText="GET" />
						<MenuItem value="post" primaryText="POST" />
						<MenuItem value="put" primaryText="PUT" />
						<MenuItem value="delete" primaryText="DELETE" />
						<MenuItem value="options" primaryText="OPTIONS" />
					</SelectField>
					<TextField
						floatingLabelText="接口url"
						defaultValue={this.state.path}
						disabled={!!this.props.url}
						onChange={e => this.setState({path: e.target.value})}
						style={{width: '75%'}}
					/>
					
				</div>
				{/*<pre className="api-code">
					{JSON.stringify(props.api, null, 4)}
				</pre>*/}
				<CodeMirror
					ref="editor"
					value={this.state.code}
					preserveScrollPosition={true}
					onChange={this.updateCode.bind(this)}
					options={{
						mode: 'javascript',
						lineNumbers: true,
						theme: 'monokai',
						indentUnit: 0,
						keyMap: 'sublime',
					}}
				>
				</CodeMirror>
				<Snackbar 
					open={!!this.state.message}
					message={this.state.message}
					onRequestClose={this.showMessage.bind(this, '')}
					autoHideDuration={3000} />
				
			</Dialog>
		)
	}
}

export default class ProjectList extends PureComponent{
	constructor(props){
		super();
		this.state = {
			searchKeyword: '',
			apis: {},
			modelData: {},
			modelOpen: false,
			isLoading: true
		}
		api.getApis().then(apis => {
			this.setState({apis, isLoading: false})
		})
	}

	showDetail(url, data, e){
		const modelData = {
			title: "编辑接口数据",
			url: url,
			api: data,
			close: this.closeModel.bind(this),
			saveApi: this.saveApi.bind(this)
		}
		this.setState({
			modelData,
			modelOpen: !this.state.modelOpen
		})
	}
	closeModel(){
		this.setState({modelOpen: false})
	}
	addApi(){
		this.setState({
			modelData: {
				title: '新增模拟接口',
				url: '',
				api: {},
				close: this.closeModel.bind(this),
				saveApi: this.saveApi.bind(this)
			},
			modelOpen: !this.state.modelOpen
		})
	}
	saveApi(url, data){
		const newApis = Object.assign({}, this.state.apis)
		newApis[url] = data
		this.setState({apis: newApis})
	}
	preview(key){
		const previewDomain = "http://eyasweb.com/mock-request/"
		const parse = key.split(' ')
		if(parse[1]){
			return previewDomain + '?submit&path=' + location.origin + parse[1] + '&method=' + parse[0]
		} else {
			return previewDomain + '?submit&path=' + location.origin + parse[0]
		}
	}
	openApi(key, e){
		e.preventDefault();
		e.stopPropagation();
		window.open(this.preview(key))
	}
	searchFilter(apis){
		const keyword = this.state.searchKeyword
		if(keyword){
			const apis = {}
			Object.keys(this.state.apis).forEach(item => {
				if(~item.indexOf(keyword)){
					apis[item] = this.state.apis[item]
				}
			})
			return apis;
		} else {
			return this.state.apis
		}
	}
	render(){

		return (
			<Card>
				<CardHeader
		      title={<div>
		      	<span style={{marginRight: 5}}>模拟接口列表</span>
		      	<FlatButton onClick={this.addApi.bind(this)} label="添加新接口" primary />
		      	<FlatButton 
		      		href="https://github.com/eyasliu/mock-server-app#readme" 
		      		label="说明文档"
		      		target="_blank"
		      		secondary />
		      </div>}
		      style={{borderBottom: '1px solid #eee'}}
		    />
		    <CardText>
	    		<TextField
	    			hintText="搜索" fullWidth
	    			value={this.state.searchKeyword}
	    			onChange={e => this.setState({searchKeyword: e.target.value})}
	    		/>
				{ !this.state.isLoading ? <List>
					{Object.keys(this.searchFilter(this.state.apis)).map(item => {
						const api = this.state.apis[item]
						return (
							api && <ListItem 
				      	primaryText={item} 
				      	secondaryText={JSON.stringify(api)}
				      	onClick={this.showDetail.bind(this, item, api)}
				      	rightIcon={<i onClick={this.openApi.bind(this, item)} className="fa fa-link" title="访问接口"></i>}
				      />
			      )
					})}
			    </List>: <div className="loading"><CircularProgress /></div>}
			    {this.state.modelOpen && <Model {...this.state.modelData}/>}
		    </CardText>
			</Card>
		)
	}
}