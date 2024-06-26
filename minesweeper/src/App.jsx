import './App.css'
import { useState, useEffect } from 'react'
import GameInfo from './components/GameInfo'
import Board from './components/Board'


const Game = () => {
    const [height] = useState(8);
    const [width] = useState(10);
    const [mines] = useState(10);
    const [gameData, setGameData] = useState([]);
    const [gameStatus, setGameStatus] = useState(["Game in Progress"]);
    const [mineCount, setMineCount] = useState(mines);
    const[key, setKey] = useState(false);


    //rendering the game board
    useEffect(() => {
        setGameData(initGameData(height, width, mines))
    }, [height, width, mines, key])
    
    const initGameData = (height, width, mines) => {
        let data = createEmptyArray(height, width)
        data = plantMines(data, height, width, mines)
        data = getNeighborMines(data, height, width)
        return data
    }

    //plant mines

    //store initial state of the grid in our variable
}