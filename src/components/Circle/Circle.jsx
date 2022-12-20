// import React from 'react';
// import { useEffect } from 'react';
// import { useRef } from 'react';
// import styles from '../Circle/Circle.module.css';


// export default function Circle({values}) {
//     const circle = useRef(null)
//     console.log(values)
    
//     useEffect(() => {
//         //console.log(values)
//         circle.current.style.width = values[1]
//         circle.current.style.heigth = values[2]
//         circle.current.style.background = values[3]
//         circle.current.style.top = values[4]
//         circle.current.style.left = values[5]
//     }, [])

//     // styles.circle.width = values.width
//     // styles.circle.heigth = values.heigth
//     // styles.circle.background = values.background
//     // styles.circle.top = values.y
//     // styles.circle.left = values.x

//     return (
//         <div 
//             className={styles.circle} 
//             ref={circle} 
//             // style={{
//             //     width: values[1] + 'px',
//             //     height: values[1] + 'px',
//             //     backgroundColor: values[2],
//             //     top: values[3] + 'px',
//             //     right: values[4] + 'px'
//             // }}
//         >o</div>
//     )
// }