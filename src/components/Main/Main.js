import React from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import useStyles from './styles'
import Form from './Form'
import List from './List'
import { useContext } from 'react'
import { ExpenseTrackerContext } from '../../context/context'
import InfoCard from '../Snackbar/InfoCard'

const Main = () => {
    const classes=useStyles()
    const{balance}=useContext(ExpenseTrackerContext)
  return (
    <Card className={classes.root}>
        <CardHeader  title="Expense Tracker" subheader="Using Speechly"/>
        <CardContent>
            <Typography align="center" variant='h5'>Total Balance ${balance}</Typography>
            <Typography variant="subtitle1" style={{lineHeight:'1.5em',marginTop:'20px'}}>
                <InfoCard />
                </Typography>
                <Divider/>
                <Form />
          

        </CardContent>
        <CardContent className={classes.CardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>

        </CardContent>

        

    </Card>
  )
}

export default Main