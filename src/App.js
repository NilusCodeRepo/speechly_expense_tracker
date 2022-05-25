import React from 'react'
import Details from './components/Details/Details'
import Main from './components/Main/Main'
import {Grid} from '@material-ui/core'
import useStyle from './styles'
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui'

const App = () => {
    const classes=useStyle()
  return (
    <div>
        <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height:'100vh'}}>
            <Grid item xm={12} sm={4}>
                <Details  title="Income"/>
            </Grid>
            <Grid item xm={12} sm={3}>
                <Main />
            </Grid>
            <Grid item xm={12} sm={4}>
                <Details title="Expense"/>
            </Grid>
            

        </Grid>
        <PushToTalkButtonContainer>
            <PushToTalkButton />
            <ErrorPanel />
        </PushToTalkButtonContainer>
    </div>
  )
}

export default App