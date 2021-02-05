import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import Countup from 'react-countup'
import cx from 'classnames'
import styles from './Cards.module.css'
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...!'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectados</Typography>
                        <Typography variant="h5" >
                            <Countup start={0} end={confirmed.value} duration={2.5} separator=","></Countup>
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2" >Numeros de casos ativos de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
                        <Typography variant="h5" >
                            <Countup start={0} end={recovered.value} duration={2.5} separator=","></Countup>
                        </Typography>                        <Typography color="textSecondary" >{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2" >Numeros de recuperados da COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortes</Typography>
                        <Typography variant="h5" >
                            <Countup start={0} end={deaths.value} duration={2.5} separator=","></Countup>
                        </Typography>                        <Typography color="textSecondary" >{new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant="body2" >Numeros de mortes causadas pela COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards