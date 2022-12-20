import styles from '../TimePicker/TimePicker.module.css';
import TimeButton from '../TimeButton/TimeButton.jsx';
import React from 'react';


export default function TimePicker({setTime, isOnScreen}) {
    let screenUp = (e, time) => {
        e.preventDefault()
        setTime(time)
        isOnScreen(true)
        let screen = e.target.parentNode.parentNode.parentNode
        screen.classList.add(styles.up)
    }
 
    return (
        <div className={styles.screen}>
            <h1>Choose time</h1>
            <ul className={styles.timeList} id="time-list">
                <TimeButton time={10} handleClick={screenUp}/>
                <TimeButton time={30} handleClick={screenUp}/>
                <TimeButton time={50} handleClick={screenUp}/>
                <TimeButton time={70} handleClick={screenUp}/>
            </ul>
        </div>
    );
}