// external imports
import React from 'react'
// local imports
import './reset.css'
import styles from './styles'
import { Diagram, Sidebar, Title, Toolbar } from '..'
import DevTools from 'components/DevTools'

// App must be a class-based component because it will recieve a ref
const App = () => (
    <main style={styles.container}>
        <Title style={styles.overlay}/>
        <Toolbar style={styles.overlay}/>
        <Sidebar />
        <Diagram />
    </main>
)

export default App
