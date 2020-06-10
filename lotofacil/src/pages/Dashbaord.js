import React, {useState, useEffect} from 'react';
import { CircularProgress } from '@material-ui/core';
import BallButton from '../components/Ball';
import Header from '../components/Header';
import ServiceAnalizer from '../service/ServiceAnalizer';
import GraphicRateBallInSweepstakes from './GraphicRateInAllSwepstakes';
import GraphicRateNumberCousin from './GraphicRateNumberCousin';
import GraphicPeriodBall from './GraphicPeriodBall';
import './Dashboard.css';

function Dashboard () {
    const [ballCurrent, setBallCurrent] = useState(1);
    const [rateBallsInSweepstakes, setRateBallInSweepstakes] = useState([]);
    const [rateBallsCousinInSweepstakes, setRateBallsCousinInSweepstakes] = useState([]);
    const [periodBallCurrent, setPeriodBallCurrent] = useState([]);
    const [periodAllBalss, setPeriodAllBalls] = useState([]);
    const [totalSweepstakes, setTotalSweepstakes] =  useState(0);
    const [loadingRateBallsInSweepstakes, setLoadingRateBallsInSweepstakes] = useState(false);
    const [loadingRateBallCousinInSweepstakes, setLoadingRateBallCousinInSweepstakes] = useState(false);
    const [LoadingPeriodBallInSweepstakes, setLoadingPeriodBallInSweepstakes] = useState(false);

    async function getPeriodAllBalls(){
        let listPeriod = await ServiceAnalizer.listAllPeriodAllBallInSweepatakes();
        setPeriodAllBalls(listPeriod);
    }

    async function getPeriodBallStart(ball){
        
        setLoadingPeriodBallInSweepstakes(true);
        let listPeriod = await ServiceAnalizer.listAllPeriodBallInSweepatakes(ball);
        let listModify = [];
        let indice = 1;
        listPeriod.data.forEach(period => {
            let obj = {
                name: "period " + indice,
                period: period
            }
            indice++
            listModify.push(obj)
        })
        setPeriodBallCurrent(listModify);
        setBallCurrent(ball == null?ballCurrent:ball);
        setLoadingPeriodBallInSweepstakes(false);
        setBallCurrent(ball);
    }

    async function getRateBallsCousinInSweepstakes(){
        setLoadingRateBallCousinInSweepstakes(true);
        let listRateBallsCousin = await ServiceAnalizer.listRateBallCousinInSweepatakes();
        setRateBallsCousinInSweepstakes(listRateBallsCousin.data.rateBallsCousin);
        setLoadingRateBallCousinInSweepstakes(false);
    }

    async function getRateBallsInSweepstakes(){
        setLoadingRateBallsInSweepstakes(true);
        let listRateBalls = await ServiceAnalizer.listRateBallInSweepatakes();
        setTotalSweepstakes(listRateBalls.data.sweepstakeTotal)
        setRateBallInSweepstakes(listRateBalls.data.rateBall);
        setLoadingRateBallsInSweepstakes(false);
    }


    useEffect(()=>{
        getRateBallsInSweepstakes();
        getRateBallsCousinInSweepstakes();
        getPeriodBallStart(1);
    }, [])

    const balls = () => {
        return(
            <div>
                <BallButton numberBall={"01"} onClick={getPeriodBallStart.bind(this,1)}/>
                <BallButton numberBall={"02"} onClick={getPeriodBallStart.bind(this,2)}/>
                <BallButton numberBall={"03"} onClick={getPeriodBallStart.bind(this,3)}/>
                <BallButton numberBall={"04"} onClick={getPeriodBallStart.bind(this,4)}/>
                <BallButton numberBall={"05"} onClick={getPeriodBallStart.bind(this,5)}/>
                <BallButton numberBall={"06"} onClick={getPeriodBallStart.bind(this,6)}/>
                <BallButton numberBall={"07"} onClick={getPeriodBallStart.bind(this,7)}/>
                <BallButton numberBall={"08"} onClick={getPeriodBallStart.bind(this,8)}/>
                <BallButton numberBall={"09"} onClick={getPeriodBallStart.bind(this,9)}/>
                <BallButton numberBall={"10"} onClick={getPeriodBallStart.bind(this,10)}/>
                <BallButton numberBall={"11"} onClick={getPeriodBallStart.bind(this,11)}/>
                <BallButton numberBall={"12"} onClick={getPeriodBallStart.bind(this,12)}/>
                <BallButton numberBall={"13"} onClick={getPeriodBallStart.bind(this,13)}/>
                <BallButton numberBall={"14"} onClick={getPeriodBallStart.bind(this, 14)}/>
                <BallButton numberBall={"15"} onClick={getPeriodBallStart.bind(this,15)}/>
                <BallButton numberBall={"16"} onClick={getPeriodBallStart.bind(this, 16)}/>
                <BallButton numberBall={"17"} onClick={getPeriodBallStart.bind(this,17)}/>
                <BallButton numberBall={"18"} onClick={getPeriodBallStart.bind(this,18)}/>
                <BallButton numberBall={"19"} onClick={getPeriodBallStart.bind(this,19)}/>
                <BallButton numberBall={"20"} onClick={getPeriodBallStart.bind(this,20)}/>
                <BallButton numberBall={"21"} onClick={getPeriodBallStart.bind(this,21)}/>
                <BallButton numberBall={"22"} onClick={getPeriodBallStart.bind(this,22)}/>
                <BallButton numberBall={"23"} onClick={getPeriodBallStart.bind(this,23)}/>
                <BallButton numberBall={"24"} onClick={getPeriodBallStart.bind(this,24)}/>
                <BallButton numberBall={"25"} onClick={getPeriodBallStart.bind(this,25)}/>
            </div>
        )
    }

    const renderRateBallsInSweepstakes= () => {
        return (
            loadingRateBallsInSweepstakes?
            <>
                <CircularProgress/>
            </>:
            <>
                <GraphicRateBallInSweepstakes data={rateBallsInSweepstakes}/>
            </>          
            )
    }

    const renderRateBallsCousinInSweepstakes= () => {
        return (
                loadingRateBallCousinInSweepstakes?
                <>
                    <CircularProgress/>
                </>:
                <>
                    <GraphicRateNumberCousin data={rateBallsCousinInSweepstakes}/>
                </>   
                          
            )
    }

    const renderGraphicPeriodBall= () => {
        return (
                LoadingPeriodBallInSweepstakes?
                <>
                    <CircularProgress/>
                </>:
                <>
                    <GraphicPeriodBall data={periodBallCurrent}/>
                </>   
                          
            )
    }

    return (
        <div className= "content">  
            <Header/>
            <h1>{`Taxa de ocorrência de todos as bolas nos ${totalSweepstakes} sorteios.`}</h1>
            {renderRateBallsInSweepstakes()}
            <hr className="linhas"/>
            <h1>{`Taxa de ocorrência das bolas com números primos ${totalSweepstakes} sorteios.`}</h1>
            {renderRateBallsCousinInSweepstakes()}
            <hr className="linhas"/>
            {balls()}  
            <h1>{`Período de ocorrência da bola ${ballCurrent}`}</h1>
            {renderGraphicPeriodBall()}
            <hr className="linhas"/>
        </div>
    ) 
}

export default Dashboard