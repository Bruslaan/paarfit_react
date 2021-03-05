import React from 'react'
import './index.css';
import { createStyles, makeStyles, Paper, Theme, Grid } from '@material-ui/core'

const boxWeekStyles = makeStyles((theme: Theme) =>
    createStyles({
            paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          },

    }),
);

export default function BoxWeek() {
    const classes = boxWeekStyles();
    return (
        <Paper className={classes.paper}>	
                            <div className="boxContent">
                                <div className="detailsBoxProg">
                                    <div className="titleBoxProg">
                                         <h2 className="black">WOCHE</h2>
                                         <h3 className="purple1">25.01. - 31.01.01.2021</h3>
                                    </div>
                                    <div className="contentProg mt40">
                                        <div className="boxTimeSchedule">
                                            <div className="tableTimeSchedule">
                                                <div className="calendarLeft">
                                                    <div className="calendarLeftDate">
                                                        <h2 className="gray2">MO</h2>
                                                        <h3 className="blue1">25</h3>
                                                    </div>
                                                </div>
                                                <div className="lineTimeSchedule">
                                                    <div className="ctBoxLine whiteBg">
                                                        <div className="borderBoxLine grayBg2">
                                                            <div className="borderLineIns whiteBg">
                                                                <div className="dotLineCalendar grayBg2"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="detTrainingRight">
                                                    <div className="detTrainingBtnSm">
                                                        <a href="" title="" className="purpleBg1 textWhite"><h2>Paarfit Trainingstag</h2><h3>+150 P.</h3></a>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="boxTimeSchedule">
                                            <div className="tableTimeSchedule">
                                                <div className="calendarLeft">
                                                    <div className="calendarLeftDate">
                                                        <h2 className="gray2">DI</h2>
                                                        <h3 className="blue1">26</h3>
                                                    </div>
                                                </div>
                                                <div className="lineTimeSchedule">
                                                    <div className="ctBoxLine whiteBg">
                                                        <div className="borderBoxLine">
                                                            <div className="borderLineIns whiteBg">
                                                                <div className="dotLineCalendar grayBg2"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="detTrainingRight">
                                                    <div className="detTrainingBtnSm">
                                                        <a href="" title="" className="grayBg1 gray1"><h2>Aktiv-Regeneration</h2><h3>+40 P.</h3></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="boxTimeSchedule">
                                            <div className="tableTimeSchedule">
                                                <div className="calendarLeft">
                                                    <div className="calendarLeftDate">
                                                        <h2 className="gray2">MI</h2>
                                                        <h3 className="blue1">27</h3>
                                                    </div>
                                                </div>
                                                <div className="lineTimeSchedule">
                                                    <div className="ctBoxLine whiteBg">
                                                        <div className="borderBoxLine">
                                                            <div className="borderLineIns whiteBg">
                                                                <div className="dotLineCalendar grayBg2"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="detTrainingRight">
                                                    <div className="detTrainingBtnSm">
                                                        <a href="" title="" className="grayBg1 gray1"><h2>Aktiv-Regeneration</h2><h3>+20 P.</h3></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="boxTimeSchedule">
                                            <div className="tableTimeSchedule">
                                                <div className="calendarLeft">
                                                    <div className="calendarLeftDate">
                                                        <h2 className="gray2X purple1">DO</h2>
                                                        <h3 className="blue1">28</h3>
                                                    </div>
                                                </div>
                                                <div className="lineTimeSchedule">
                                                    <div className="ctBoxLine whiteBg">
                                                        <div className="borderBoxLine purpleBg2">
                                                            <div className="borderLineIns whiteBg">
                                                                <div className="dotLineCalendar blueBg2"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="detTrainingRight">
                                                    <div className="detTrainingBtnLg">
                                                        <a href="" title="" className="blueBg textWhite">
                                                            <h2>Paarfit Trainingstag</h2>
                                                            <div className="contentBtnLg">
                                                                <div className="lineBtn whiteBg"></div>
                                                                <div className="detailsBtnLg">
                                                                    <h3>Training</h3>
                                                                    <h4>+ 115 / 140 P.</h4>
                                                                </div>
                                                                <div className="detailsBtnLg">
                                                                    <h3>Aktivitäten</h3>
                                                                    <h4>+90 P.</h4>
                                                                </div>
                                                            </div>
                                                            <div className="iconWeightBtnLg yellowBg"><img src="images/hantel.svg" alt=""/></div>
                                                            <div className="iconAddBtnLg purpleBg2 textWhite">+</div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="boxTimeSchedule">
                                            <div className="tableTimeSchedule">
                                                <div className="calendarLeft">
                                                    <div className="calendarLeftDate">
                                                        <h2 className="gray2">FR</h2>
                                                        <h3 className="blue1">29</h3>
                                                    </div>
                                                </div>
                                                <div className="lineTimeSchedule">
                                                    <div className="ctBoxLine whiteBg">
                                                        <div className="borderBoxLine">
                                                            <div className="borderLineIns whiteBg">
                                                                <div className="dotLineCalendar grayBg2"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="detTrainingRight">
                                                    <div className="detTrainingBtnSm">
                                                        <a href="" title="" className="grayBg1 gray1"><h2>Aktiv-Regeneration</h2><h3>+40 P.</h3></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="boxTimeSchedule">
                                            <div className="tableTimeSchedule">
                                                <div className="calendarLeft">
                                                    <div className="calendarLeftDate">
                                                        <h2 className="gray2">SA</h2>
                                                        <h3 className="blue1">30</h3>
                                                    </div>
                                                </div>
                                                <div className="lineTimeSchedule">
                                                    <div className="ctBoxLine whiteBg">
                                                        <div className="borderBoxLine">
                                                            <div className="borderLineIns whiteBg">
                                                                <div className="dotLineCalendar grayBg2"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="detTrainingRight">
                                                    <div className="detTrainingBtnSm">
                                                        <a href="" title="" className="grayBg1 gray1"><h2>Aktiv-Regeneration</h2><h3>+40 P.</h3></a>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                        <div className="boxTimeSchedule">
                                            <div className="tableTimeSchedule">
                                                <div className="calendarLeft">
                                                    <div className="calendarLeftDate">
                                                        <h2 className="gray2">SO</h2>
                                                        <h3 className="blue1">31</h3>
                                                    </div>
                                                </div>
                                                <div className="lineTimeSchedule pb122">
                                                    <div className="ctBoxLine whiteBg">
                                                        <div className="borderBoxLine grayBg2">
                                                            <div className="borderLineIns whiteBg">
                                                                <div className="dotLineCalendar grayBg2"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="detTrainingRight">
                                                    <div className="detTrainingBtnSm">
                                                        <a href="" title="" className="purpleBg1 textWhite"><h2>Paarfit Trainingstag</h2></a>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
    )
}

