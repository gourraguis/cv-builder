import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
    root: {
	...theme.mixins.gutters(),
	paddingTop: theme.spacing.unit,
	paddingBottom: theme.spacing.unit,
	marginTop: theme.spacing.unit * 2,
	marginBottom: theme.spacing.unit * 2
    },
    textField: {
	marginLeft: theme.spacing.unit,
	marginRight: theme.spacing.unit
    }
})

const ExperienceForm = ({ classes, data, onChange }) => {
    const { list } = data

    const handleChange = i => (event) => {
	const { name, value } = event.target
	console.log(name, value)
	const res = [...data.list]
	const modifiedExperience = {...res[i]}
	modifiedExperience[name] = value
	res[i] = modifiedExperience
	onChange({
	    list: res
	})
    }

    return (
	<div>
	    {
		list.map( (exp, i) => {
		    const { title, company, location, dateStart, dateEnd, isCurrent, description } = exp
		    const handleChangeLocal = handleChange(i)

		    return (
			<Paper className={classes.root} elevation={2} key={i}>
			    <Typography variant="h6" color="secondary" align="center" > Experience {i + 1} </Typography>
			    <TextField
			      id="title"
			      name="title"
			      label="Title / Position"
			      className={classes.textField} fullWidth={true}
			      value={title}
			      onChange={handleChangeLocal}
			      margin="normal"
			    />
			    <TextField
			      id="company"
			      name="company"
			      label="Company"
			      className={classes.textField} fullWidth={true}
			      value={company}
			      onChange={handleChangeLocal}
			      margin="normal"
			    />
			    <TextField
			      id="location"
			      name="location"
			      label="Location"
			      className={classes.textField} fullWidth={true}
			      value={location}
			      onChange={handleChangeLocal}
			      margin="normal"
			    />
			    <TextField
				id="dateStart"
				name="dateStart"
				label="Start Date"
				type="date"
				className={classes.textField} fullWidth={true}
				value={dateStart}
				onChange={handleChangeLocal}
				margin="normal"
			    />
			    <TextField
				id="dateEnd"
				name="dateEnd"
				label="Start End"
				type="date"
				className={classes.textField} fullWidth={true}
				value={dateEnd}
				onChange={handleChangeLocal}
				margin="normal"
			    />
			    <TextField
				id="description"
				name="description"
				label="Description"
				className={classes.textField} fullWidth={true} multiline={true}
				value={description}
				onChange={handleChangeLocal}
				margin="normal"
			    />
			</Paper>
		    )})
	    }
	</div>
    )
}

export default withStyles(styles)(ExperienceForm)
