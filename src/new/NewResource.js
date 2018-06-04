/**
 * Created by suzanne on 5/20/18.
 */
import React, {Component} from 'react'
import {Container, Header} from 'semantic-ui-react'
import './NewResource.css'
import slugify from 'slugify'
import Question from './Question'
import ResourceInfo from './ResourceInfo'
import PageContent from './PageContent'
import {Segment} from 'semantic-ui-react'


class NewResourceForm extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   "name": "",
    //   "friendly": "",
    //   "description": "",
    //   "type": "",
    //   "field": "",
    //   "condition": "",
    //   "references": [
    //     {"name": ""},
    //     {"name": ""}
    //   ],
    //   "questions":[],
    //
    //   'pagebody': ''
    // }
    // this.state =   {
    //   "name": "HEART Score",
    //   "friendly": "heart-score",
    //   "description": "The HEART Score is a tool used by physicians to determine the future risk of adverse cardiac events based on five risk factors: History, EKG Findings, Age, Risk Factors and Troponin.",
    //   "type": "Calculator",
    //   "field": "Cardiology",
    //   "condition": "ACS",
    //   "references": [
    //     {"name": "http://annals.org/aim/article-abstract/2622872/effect-using-heart-score-patients-chest-pain-emergency-department-stepped"},
    //     {"name": "https://dspace.library.uu.nl/handle/1874/242266"}
    //   ],
    //   "questions": [
    //     {
    //       "title": "History",
    //       "description": "How Suspicious is the history?",
    //       "options": [
    //         {
    //           "value": 0,
    //           "description": "Slightly Suspicious"
    //         },
    //         {
    //           "value": 1,
    //           "description": "Moderately Suspicous"
    //         },
    //         {
    //           "value": 2,
    //           "description": "Highly Suspcious"
    //         }
    //       ]
    //     } ,
    //     {
    //       "title": "EKG Findings",
    //       "description": "Do EKG findings suggest ischemia?",
    //       "options": [
    //         {
    //           "value": 0,
    //           "description": "Normal"
    //         },
    //         {
    //           "value": 1,
    //           "description": "Non-specific repolarization disturbance / LBBB / PM"
    //         },
    //         {
    //           "value": 2,
    //           "description": "Significant ST deviation"
    //         }
    //       ]
    //     } ,
    //     {
    //       "title": "Age",
    //       "description": "Age increases risk",
    //       "options": [
    //         {
    //           "value": 0,
    //           "description": "= 45 years"
    //         },
    //         {
    //           "value": 1,
    //           "description": "45-65 years"
    //         },
    //         {
    //           "value": 2,
    //           "description": "&gt;= 65 years"
    //         }
    //       ]
    //     } ,
    //     {
    //       "title": "Risk Factors",
    //       "description": "Hypercholesterolemia, Hypertension, Diabetis Melitis, Cigarette Smoking, Positivec Family History, Obesity(BMI&gt;30)",
    //       "options": [
    //         {
    //           "value": 0,
    //           "description": "No Risk Factors Known"
    //         },
    //         {
    //           "value": 1,
    //           "description": "1 or 2 Risk Factors"
    //         },
    //         {
    //           "value": 2,
    //           "description": "&gt;=3 or history of atherosclerotic disease"
    //         }
    //       ]
    //     },
    //     {
    //       "title": "Troponin",
    //       "description": "Cardiac Enzyme Leak",
    //       "options": [
    //         {
    //           "value": 0,
    //           "description": "&lt;= normal limit"
    //         },
    //         {
    //           "value": 1,
    //           "description": "1-3x normal limit"
    //         },
    //         {
    //           "value": 2,
    //           "description": "&gt;= 3 times normal limit"
    //         }
    //       ]
    //     }
    //   ],
    //   'pagebody': ''
    // }
    this.state=
      {
        "name":        "Glascow Coma Score",
        "friendly":    "glascow-coma-score",
        "description": "The Scale was described in 1974 by Graham Teasdale and Bryan Jennett (Assessment of coma and impaired consciousness. A practical scale. Lancet 1974; 2:81-4.) as a way to communicate about the level of consciousness of patients with an acute brain injury.\n\nThe findings using the scale guide initial decision making and monitor trends in responsiveness that are important in signaling the need for new actions.",
        "type":        "Calculator",
        "field":       "Trauma",
        "condition":   "TBI",
        "references":  [{"name": ""},
          {"name": ""}],
        "questions":   [{
          "title":       "Eyes",
          "description": "Eye Opening ",
          "options":     [
            {"value": "4", "description": "Spontaneous"},
            {"value": "3", "description": "To Sound"},
            {"value": "2", "description": "To Pressure"},
            {"value": "1", "description": "None"}
          ]
        },
          {
            "title":       "Verbal Response",
            "description": "",
            "options":     [
              {"value": "5", "description": "Oriented"},
              {"value": "4", "description": "Confused"},
              {"value": "3", "description": "Words"},
              {"value": "2", "description": "Sounds"},
              {"value": "1", "description": "None"}
            ]
          },
          {
            "title":       "Motor Response",
            "description": "",
            "options":     [
              {"value": "6", "description": "Obey Commands"},
              {"value": "5", "description": "Localising"},
              {"value": "4", "description": "Normal Flexion"},
              {"value": "3", "description": "Abnormal Flexion"},
              {"value": "2", "description": "Extension"},
              {"value": "1", "description": "None"}
            ]
          }
        ],
        "pagebody":    ""
      }

    this.handleChange = this.handleChange.bind(this)

    // this.handleNewOption = this.handleNewOption(this)
    // this.handleOptionChange = this.handleOptionChange(this)
    this.addNewQuestion = this.addNewQuestion.bind(this)
    this.addNewOption = this.addNewOption.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }



  handleQuestionChange = (i) => (e) => {
    const name = e.target.name
    const questions = this.state.questions.map((question, j) => {
      if (j === i ) question[name] = e.target.value;
      return question;
    })
    this.setState({questions})
  }

  handleOptionChange = (qIndex,optIndex) =>  (e) => {
    const index = Number(e.target.name.split('-')[1]);
    const name = e.target.name.split('-')[0];
    const options = this.state.questions[qIndex].options.map((option, j) => {
      if (j === index) option[name] = e.target.value
      return option
    })
    this.setState({options})
  }

  slugifyTitle =(e) => {
    const slug = slugify(e.target.value).toLowerCase()
    this.setState({friendly: slug})

  }

  addNewQuestion()  {
    const newQuestion =  {"title": "",
      "description": "",
      "options": [
      {
        "value": "",
        "description": ""
      }]}
    console.log([...this.state.questions, newQuestion])
    this.setState((prevState) => {
      return {questions: [...prevState.questions, newQuestion]};
    });
  }

  addNewOption(questionNum)  {
    const newOption =   {
      "value": "Value",
      "description": "Description"
    }
    console.log("Before: " + this.state.questions)
    console.log([...this.state.questions[questionNum].options, newOption])
    const questions = this.state.questions.map((question, i) => {
      console.log(questionNum, i)
      if (i===questionNum) {
        console.log("match")
        question.options = [...this.state.questions[questionNum].options, newOption]
      }
      console.log(question)
      return question
    })

    console.log("After: " + questions)

    this.setState({questions});
  }

  handleNewOption(j) {
    let stateCopy = Object.assign({}, this.state)
    stateCopy.questions[j].options = [...stateCopy.questions[j].options, '']
    this.setState({stateCopy})
  }

  render () {

    const resource = {...this.state}
    console.log(resource)

    return(
      <Container text style={{ marginTop: '5em' }}>
        <Header as='h1'>Add New Resource</Header>
        <form className="resource-form" autoComplete="off" >

          <ResourceInfo
            resource = {this.state}
            handleChange = {this.handleChange}
            slugify = {this.slugifyTitle}
          />

          <Question
            questions = {this.state.questions}
            handleQuestion = {this.handleQuestionChange}
            handleOption = {this.handleOptionChange}
            addQuestion = {this.addNewQuestion}
            addOption = {this.addNewOption}
            />

          <PageContent
            pagebody = {this.state.pagebody}
            handleChange = {this.handleChange}
          />

          <Segment attached='bottom'>
          <button
            type="submit"
            className="ui basic button green"
            style={{alignSelf: 'flex-end', marginRight: 0}}
          >
            SAVE
          </button>
          </Segment>
        </form>
      </Container>

    )
  }

}

export default NewResourceForm