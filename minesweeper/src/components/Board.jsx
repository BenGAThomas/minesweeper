/* eslint-disable react/prop-types */
import Cell from "./Cells";

const Board = ({data, handleCellClick, handleContextMenu}) => {
    return (
        //creating 2 loops for the board. One vertical and one horizontal
        <div className="board">
            {
                data.map(datarow => 
                    datarow.map(dataitem => 
                        <div key={`${dataitem.y}-${dataitem.x}`}>
                            <Cell 
                            value={(dataitem)} 
                            onClick={() => handleCellClick(dataitem.y, dataitem.x)} 
                            cMenu={() => handleContextMenu(e, dataitem.y, dataitem.x)}/>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Board;