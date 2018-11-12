import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
    textField: {
	marginLeft: theme.spacing.unit,
	marginRight: theme.spacing.unit
    }
})

const ObjectiveForm = ({ classes, data, onChange }) => {
    const { description } = data 
    
    const handleChange = (event) => {
	const { name, value } = event.target
	const res = {...data}
	res[name] = value
	onChange(res)
    }

    return (
	<div>
	    <TextField
	      id="description"
	      name="description"
	      label="Objective Description"
	      className={classes.textField} fullWidth={true} multiline={true}
	      value={description}
	      onChange={handleChange}
	      margin="normal"
	    />
	</div>
    )
}

export default withStyles(styles)(ObjectiveForm)
