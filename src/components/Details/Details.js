import React from 'react'
import {Card, CardHeader,CardContent,Typography} from '@material-ui/core'
import { Doughnut } from 'react-chartjs-2'
 import {Chart,ArcElement} from 'chart.js'


import useStyles from './styles'
import useTransactions from '../../useTransactions'
import Dummy from './Dummy'


Chart.register(ArcElement);



const Details = (props) => {
    const classes=useStyles()
    const {total, chartData}=useTransactions(props.title)
    const options = {
      legend: {
        display: true,
        position: "top"
      }
    };
  return (
      <Card className={props.title==="Income"?classes.income:classes.expense}>
          <CardHeader title={props.title} />
          <CardContent  >
            <Typography variant="h5">${total}</Typography>
            <Doughnut data={chartData}  style={{height:'200px'}} options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}/>

          </CardContent>
      </Card>
  )
}

export default Details