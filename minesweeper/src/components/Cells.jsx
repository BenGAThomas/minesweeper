/* eslint-disable react/prop-types */


    const Cell = ({value, onClick, cMenu}) => {

        const getValue = () => {
            if(!value.isRevealed) {
                return value.isFlagged ? "🚩" : null;
            }
            if (value.isMine) {
                return "💣";

            }
            if (value.neighbor === 0) {
                return null;
            }
            return value.neighbor;

        }

        let className = 'cell' +
        (value.isRevealed ? "" : " hidden") +
        (value.isMine ? " is-mine" : "") +
        (value.isFlagged ? " is-flag" : "") +
        (() => {
            switch(value.neighbor) {
                case 1: return " blue"
                case 2: return " green"
                case 3: return " red"
                case 4: return " green"
                default: return " purple"
            }
        })

        return(
            <div onClick={onClick} 
                className={className}
                onContextMenu={cMenu}>
              {
                getValue()
              }  
            </div>
        )
    }

    export default Cell;