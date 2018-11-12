import React from 'react'
import Previewer from '../components/Previewer'
import FormContainer from '../components/FormContainer'
import Grid from '@material-ui/core/Grid'
import { cv as cvData } from '../utils/default-data.js'
import ContactForm from '../components/forms/ContactForm'
import ObjectiveForm from '../components/forms/ObjectiveForm'
import ExperienceForm from '../components/forms/ExperienceForm'

const forms = {
    contact: ContactForm,
    objective: ObjectiveForm,
    experience: ExperienceForm
}

class Index extends React.Component {
    state = {
	theme: {
	    type: "",
	    color: "",
	},
	elements: cvData,
	currentElement: "experience"
    }

    onChange = (newData) => {
	this.setState(prevState => {
	    const { elements, currentElement } = prevState
	    const res = {...elements}
	    res[currentElement].data = newData
	    return {
		elements: res
	    }
	})
    }

    render() {
	const { elements, currentElement } = this.state
	const CurrentForm = forms[currentElement]
	const currentData = elements[currentElement].data
	const currentTitle = elements[currentElement].title

	return (
	    <div>
		<h1 align="center">Work The Problem</h1>
		<Grid container spacing={16}>
		    <Grid item xs={6} >
			<FormContainer title={currentTitle}>
			    <CurrentForm data={currentData} onChange={this.onChange}/>
			</FormContainer>
		    </Grid>
		    <Grid item xs={6} >
			<Previewer />
		    </Grid>
		</Grid>
	    </div>
	)
    }
}

export default Index
