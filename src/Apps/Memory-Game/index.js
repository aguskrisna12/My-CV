import Box from './Box';
import './game.css';
import {useState} from 'react';

function Main () {
    var boxes = [];
    const [selectedBox, setSelectedBox] = useState([]);
    const [matches, setMatches] = useState([]);
    const [win, setWin] = useState(false);

    for (let i=0; i < 18; i++) {
        boxes.push(i, i);
    }

    function selectBox (boxNumber, index) {
        // Jika sudah match, jangan lakukan apapun
        if (matches.indexOf(index) !== -1) {
            return;
        }

        // Jika sudah dua terpilih, maka reset box terpilih
        if (selectedBox.length == 2) {
            return setSelectedBox([index]);
        }

        // Menyimpan box terpilih
        var newSelected = [...selectedBox];
        newSelected.push(index);
        setSelectedBox(newSelected);

        // Jika pilihan benar, simpan ke dalam matches
        if (newSelected.length == 2 && boxes[newSelected[0]] == boxes[newSelected[1]]) {
            const newMatches = [...matches];
            newMatches.push(...newSelected);
            setMatches(newMatches);
        }

        // Jika semua box sudah matches, tampilkan you WIN!
        if (matches.length == 36) {
            setWin(true);
        }
    }

    return (
        <div>
            <h2>The Memory Game</h2>
            <div>
                <div className="row box-row">
                    {boxes.map((box, index) => {
                        return(
                            <Box boxNumber={box} 
                                 index={index}
                                 selectBox={selectBox} 
                                 isOpen={selectedBox.indexOf(index) !== -1}
                                 isMatched={matches.indexOf(index) !== -1} />
                        );
                    })}
                </div>
                {win && (<h3>You WIN!</h3>)}
            </div>
        </div>
    );
}

export default Main;