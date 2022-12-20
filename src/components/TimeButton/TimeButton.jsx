import React from 'react';
import styles from  '../TimeButton/TimeButton.module.css';

export default function TimeButton({time, handleClick}) {

    return (
        <li>
            <button className={styles.timeBtn} onClick={e => handleClick(e, time)}>
                {time + ' sec'}
            </button>
        </li>
    )
}