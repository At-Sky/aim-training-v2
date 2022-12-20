import React, { useEffect, useRef, useState } from 'react';
import styles from '../Board/Board.module.css';
//import Circle from '../Circle/Circle.jsx';


export default function Board({timer, isOnScreen}) {
    const [circles, setCircles] = useState([])
    const [counter, setCounter] = useState(0)

    let board = useRef(null)
    let timerId = useRef(null)
    let endTitle = useRef(null)

    useEffect(() => {
        startGame()

        const intervalId = setInterval(() => {
            decreaseTime()
            
            if (timer === 0 && isOnScreen) {
                finishGame()
                clearInterval(intervalId)
            }
        }, 1000);
    }, [isOnScreen])

    useEffect(() => {
        circles.forEach(item => board.current.append(item))
    }, [circles])


    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max- min) + min)
    }

    function randomiseColor() {
        let random = (min, max) => {
            return min + Math.floor(Math.random() * (max - min + 1));
        }
    
        let r = random(0, 255)
        let g = random(0, 255)
        let b = random(0, 255)
    
        return `rgb(${r},${g},${b})`
    }

    function createRandomCircle() {
        const circle = document.createElement('div')
        const size = getRandomNumber(10, 60)
        const {width, height} = board.current.getBoundingClientRect()
        const x = getRandomNumber(0, width - size)
        const y = getRandomNumber(0, height - size)
        const background = randomiseColor()

        circle.classList.add(styles.circle)
        circle.style.width = `${size}px`
        circle.style.height = `${size}px`
        circle.style.top = `${y}px`
        circle.style.left = `${x}px`
        circle.style.background = background
        circle.onclick = scoreCounter
        setCircles([...circles, circle])

    }

    function startGame() {
        createRandomCircle()
        setGameTime(timer)
    }

    function decreaseTime() {
        if (timer !== 0) {
            --timer
            setGameTime(timer)
        }
    }

    function setGameTime() {
        timerId.current.innerHTML = `00:${timer < 10 ? '0' + timer : timer}`
    }

    function scoreCounter(e) {
        e.target.style.display = 'none'
        setCounter(prev => prev + 1)
        createRandomCircle()
    }

    function finishGame() {
        endTitle.current.classList.add(styles.show)
        board.current.childNodes.forEach(item => {
            if (item.className.split('_').includes('circle')) {
                item.classList.add(styles.hide)
            }
        })

    }

    return (
        <div className={styles.screen}>
            <h3 className={styles.boardTitle} ref={timerId}>Осталось <span>00:00</span></h3>
            <div className={styles.board} ref={board}>
                <h1 className={styles.endTitle} ref={endTitle}>Счет:<span className={styles.primary}>{counter}</span></h1>
            </div>
        </div>
    )
}