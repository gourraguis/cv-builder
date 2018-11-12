import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import SettingsIcon from '@material-ui/icons/Settings'

const styles = theme => ({
    root: {
	...theme.mixins.gutters(),
	paddingTop: theme.spacing.unit * 2,
	paddingBottom: theme.spacing.unit * 2,
	minHeight: 500
    },

    button: {
	margin: theme.spacing.unit
    }
})
const FormContainer = ({ classes, title, children }) => (
    <Paper className={classes.root} elevation={1} >
	<Typography variant="h4" align="center">{title}</Typography>
	{ children }
	<Grid container spacing={40}>
	    <Grid item xs={6}>
		<Button variant="outlined" fullWidth={true} color="primary" className={classes.button} 
		    disabled={true}>
		    <ArrowBackIosIcon />
		    Previous Section
		</Button>
	    </Grid>
	    <Grid item xs={6}>
		<Button variant="outlined" fullWidth={true} color="primary" className={classes.button}>
		    Next Section&nbsp;
		    <ArrowForwardIosIcon />
		</Button>
	    </Grid>
	</Grid>
	<Button variant="contained" size="large" fullWidth={true} color="primary" className={classes.button}>
	    <SettingsIcon />&nbsp;
	    Manage Sections
	</Button>
    </Paper>
)

export default withStyles(styles)(FormContainer)
