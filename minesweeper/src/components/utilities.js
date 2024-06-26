export const CreateEmptyArray = (height, width) => {
    let data = []
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            data[i][j] = {
                y: i,
                x: j,
                isMine: false,
                neighbor: 0,
                isRevealed: false,
                isEmpty: false,
                isFlagged: false
            }
        }
    }
    return data;
}

export const traverseBoard = (y, x, data, height, width) => {
    const el = []
    if (x > 0) el.push(data[y][x - 1]); //checking the left position

    if(y < height - 1 && x > 0) el.push(data[y + 1][x - 1]); //checking the diagonal top left position
    
    if (y < height - 1) el.push(data[y + 1][x]); //checking the top position

    if (y < height -1 && x < width - 1) el.push(data[y + 1][x + 1]) //checking the diagonal top right position

    if (x < width - 1) el.push(data[y][x + 1]); //checking the right position

    if (y > 0 && x < width - 1) el.push(data[y - 1][x + 1]); // checking the diagonal bottom right position

    if (y > 0) el.push(data[y - 1][x]) // checking the bottom poisition 

    if (y > 0 && x > 0) el.push(data[y - 1][x - 1]); // checking the diagonal bottom left position

    return el
}

export const getRandomNumber = (dimension) => {
    return Math.floor((Math.random() * 1000) + 1) % dimension
}

export const plantMines =(data, height, width, mines) => {
    let randomX, randomY, minesPlanted = 0
    while (minesPlanted < mines) {
        randomX = getRandomNumber(width)
        randomY = getRandomNumber(height)
        if (!data[randomY][randomX].isMine) {
            data[randomY][randomX].isMine = true
            minesPlanted++
        }
    }
    return data;
}

export const getNeighborMines = (data, height, width) => {
    let updatedData = data;
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(!data[i][j].isMine) {
                let mine = 0
                const area = traverseBoard(data[i][j].y, data[i][j].x, data, height, width)
                area.forEach(value => {
                    if(value.isMine) {
                        mine++
                    }
                })
                if(mine === 0) {
                    updatedData[i][j].isEmpty = true
                }
                updatedData[i][j].neighbor = mine;
                }
            }
        }
            return updatedData;
    }
