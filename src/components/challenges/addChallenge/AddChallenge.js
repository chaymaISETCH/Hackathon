import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Input, Button, Alert } from 'reactstrap';
import { addChallenge } from '../../../redux/actions/actions';
import { connect } from 'react-redux';
import Language from '../../editor/Language';
import axios from 'axios';
import AceEditor from 'react-ace';
import 'brace/ext/language_tools';
import 'brace/mode/java';
import 'brace/theme/github';
import 'brace/theme/monokai';
import 'brace/theme/tomorrow';
import 'brace/theme/kuroir';
import 'brace/theme/twilight';
import 'brace/theme/xcode';
import 'brace/theme/textmate';
import 'brace/theme/solarized_dark';
  import 'brace/theme/solarized_light';
import 'brace/theme/terminal';

class AddChallenge extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: '1',
			visible: false,
			title: '',
			difficulty: '',
			category: '',
			language: 'javascript',
			tests: '',
			randomTests: '',
			details: '',
			initialSolution: '',
		};
	}
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleTestsChange = value => {
		this.setState({
			tests: value,
		});
	};
	onDismiss = () => {
		this.setState({ visible: false });
	};
	save = () => {
		const challenge = {
			title: this.state.title,
			difficulty: this.state.difficulty,
			category: this.state.category,
			language: this.state.language,
			tests: this.state.tests,
			randomTests: this.state.randomTests,
			details: this.state.details,
			initialSolution: this.state.initialSolution,
		};
		if (
			challenge.title === '' ||
			challenge.difficulty === '' ||
			challenge.category === '' ||
			challenge.tests === '' ||
			challenge.language === '' ||
			challenge.randomTests === '' ||
			challenge.details === '' ||
			challenge.initialSolution === ''
		)
			this.setState({ visible: true });
		else {
			console.log('Bearer ' + localStorage.token);
			axios.defaults.headers.common['Authorization'] = localStorage.token;

			let url = 'http://localhost:8888/api/challenges/addChallenge';
			axios
				.post(url, challenge)
				.then(res => {
					console.log('fine');
				})
				.catch(err => {
					console.log('error');
				});
		}
		/* fetch(url, {
        method: 'post',
        withCredentials: true,
        credentials: true,
        "Access-Control-Allow-Credentials":true,

        headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials":true,

        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "Access-Control-Allow-Origin":"http://localhost:8888",
        'Authorization': 'Bearer '+localStorage.token},
        body: JSON.stringify({
          ...challenge
      })

      }).then((response)=> {
        return response.json();
      }).then((res)=> {
        this.props.addChallenge(res)
      }).catch(e=>
        console.log("error"+e)
      )
    }*/
	};

	handleRandomTestsChange = value => {
		this.setState({
			randomTests: value,
		});
	};
	handleInstructionsChange = value => {
		this.setState({
			details: value,
		});
	};
	handleInitialSolutionChange = value => {
		this.setState({
			initialSolution: value,
		});
	};
	toggle = tab => {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab,
			});
		}
	};

	render() {
		return (
			<div style={{ margin: 'auto', marginTop: '20px', height: '-webkit-fill-available' }}>
				<Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
					I am an alert and I can be dismissed!
				</Alert>
				<Nav tabs>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '1' })}
							onClick={() => {
								this.toggle('1');
							}}
						>
							Description
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '2' })}
							onClick={() => {
								this.toggle('2');
							}}
						>
							Instructions
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '3' })}
							onClick={() => {
								this.toggle('3');
							}}
						>
							Initial Solution
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '4' })}
							onClick={() => {
								this.toggle('4');
							}}
						>
							Tests
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.activeTab === '5' })}
							onClick={() => {
								this.toggle('5');
							}}
						>
							Random Tests
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<Row>
							<Col sm="12">
								<div style={{ flex: 1 }}>
									<div style={{ height: '250px', marginTop: '15px', margin: '25px' }}>
										<Input
											name="title"
											onChange={this.handleChange}
											type="text"
											placeholder="Title"
										/>
										<Input name="difficulty" type="select" onChange={this.handleChange}>
											<option value={null}>difficulty :</option>
											<option value="easy">Easy</option>
											<option value="medium">Medium</option>
											<option value="hard">Hard</option>
										</Input>

										<Input
											type="select"
											name="language"
											className="choose-language"
											onChange={this.handleChange}
										>
											<option>Choose Language :</option>
											{[
												'JavaScript',
												'Java',
												'PHP',
												'C',
												'C++',
												'Ruby',
												'Python',
												'Swift',
												'C#',
												'GO',
											].map(l => (
												<option key={l} value={l}>
													{l}
												</option>
											))}
										</Input>
										<Input
											onChange={this.handleChange}
											name="category"
											placeholder="Category"
											type="text"
											list="category"
										/>
										<datalist id="category">
											<option>General</option>
										</datalist>
									</div>
								</div>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId="2">
						<Row>
							<Col sm="12">
								<div style={{ flex: 1 }}>
									<AceEditor
										placeholder="Instructions"
										mode="text"
										theme="github"
										name="details"
										value={this.state.details}
										fontSize={16}
										showPrintMargin={true}
										showGutter={true}
										highlightActiveLine={true}
										onChange={this.handleInstructionsChange}
										style={{ margin: '10px 0', width: 'unset', height: '250px' }}
									/>
								</div>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId="3">
						<Row>
							<Col sm="12">
								<div style={{ flex: 1 }}>
									<AceEditor
										placeholder="the intitial solution may just be an empty function
      with some comments to help users."
										mode={this.state.language}
										theme="github"
										onChange={this.handleInitialSolutionChange}
										name="initialSolution"
										value={this.state.initialSolution}
										fontSize={16}
										showPrintMargin={true}
										showGutter={true}
										highlightActiveLine={true}
										style={{ margin: '10px 0', width: 'unset', height: '250px' }}
									/>
								</div>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId="4">
						<Row>
							<Col sm="12">
								<div style={{ flex: 1 }}>
									<AceEditor
										placeholder="Example : assert.equal(add(9,3), 70,
      'Expected: 70, instead got'+add(9,3));
      
      "
										mode={this.state.language}
										theme="github"
										onChange={this.handleTestsChange}
										name="tests"
										value={this.state.tests}
										fontSize={16}
										showPrintMargin={true}
										showGutter={true}
										highlightActiveLine={true}
										style={{ margin: '10px 0', width: 'unset', height: '250px' }}
									/>
								</div>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId="5">
						<Row>
							<Col sm="12">
								<div style={{ flex: 1 }}>
									<AceEditor
										onChange={this.handleRandomTestsChange}
										placeholder="Example :
      const solution =(a,b) => a+b        
      let x = parseInt(Math.random()*1000)        
      let y = parseInt(Math.random()*1000)        
      assert.equal(add(x,y),x+y,'Expected:'+solution(x,y)+'instead got'+add(x,y)));
      "
										value={this.state.randomTests}
										mode={this.state.language}
										theme="github"
										name="randomTests"
										fontSize={16}
										showPrintMargin={true}
										showGutter={true}
										highlightActiveLine={true}
										style={{
											margin: '10px 0',
											width: 'unset',

											height: '250px',
										}}
									/>
								</div>
							</Col>
						</Row>
					</TabPane>
				</TabContent>
				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Button className="btn" onClick={this.save}>
						Save
					</Button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	addChallenge: challenge => dispatch(addChallenge(challenge)),
});

export default connect(
	null,
	mapDispatchToProps
)(AddChallenge);
