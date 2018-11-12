import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
    textField: {
	marginLeft: theme.spacing.unit,
	marginRight: theme.spacing.unit
    }
})

const ContactForm = ({ classes, onChange, data }) => {
    const { firstName, lastName, address, phone, email } = data

    const handleChange = (event) => {
	const { name, value } = event.target
	const res = {...data}
	res[name] = value
	onChange(res)
    }

    return (
	<div>
	    <TextField
	      id="firstName"
	      name="firstName"
	      label="First Name"
	      className={classes.textField} fullWidth={true}
	      value={firstName}
	      onChange={handleChange}
	      margin="normal"
	    />
	    <TextField
	      id="lastName"
	      name="lastName"
	      label="Last Name"
	      className={classes.textField} fullWidth={true}
	      value={lastName}
	      onChange={handleChange}
	      margin="normal"
	    />
	    <TextField
	      id="address"
	      name="address"
	      label="Address"
	      className={classes.textField} fullWidth={true}
	      value={address}
	      onChange={handleChange}
	      margin="normal"
	    />
	    <TextField
	      id="phone"
	      name="phone"
	      label="Phone"
	      className={classes.textField} fullWidth={true}
	      value={phone}
	      onChange={handleChange}
	      margin="normal"
	    />
	    <TextField
	      id="email"
	      name="email"
	      label="Email"
	      className={classes.textField} fullWidth={true}
	      value={email}
	      onChange={handleChange}
	      margin="normal"
	    />
	</div>
    )
}

export default withStyles(styles)(ContactForm)
