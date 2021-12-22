import Box from './Box';
import './game.css';
import {useState, useEffect} from 'react';

function Main () {
    const [boxes, setBoxes] = useState([]);
    const [selectedBox, setSelectedBox] = useState([]);
    const [matches, setMatches] = useState([]);
    const [win, setWin] = useState(false);

    useEffect(() => {
        const randomized = {};
        const tempBoxes = [];

        let valid = false;

        while (!valid) {
            let angkaRandom = Math.floor(Math.random() * 100) % 18;
            if (!randomized[angkaRandom] && tempBoxes.indexOf(angkaRandom) !== -1) {
                tempBoxes.push(angkaRandom);
                randomized[angkaRandom] = true;
            }
            if (!randomized[angkaRandom] && tempBoxes.indexOf(angkaRandom) === -1) {
                tempBoxes.push(angkaRandom);
            }
            if (tempBoxes.length === 36) {
                valid = true;
            }
        }

        setBoxes(tempBoxes);
    }, []);
    

    function selectBox (boxNumber, index) {
        // Jika sudah match, tidak lakukan apapun
        if (matches.indexOf(boxNumber) !== -1) { // jika indexOf -1 artinya salah/false, !== -1 artinya benar/true
            return;
        }

        // Jika sudah dua kali mengklik dan gambar tidak match, maka box akan ter reset
        if (selectedBox.length == 2) { // jika sudah di klik 2x
            setSelectedBox([index]); // dan gambar tidak match maka klik selanjutnya akan ter reset
            return;
        }

        // Menyimpan box yg terpilih jika gambar sudah matches
        var newSelected = [...selectedBox];
        newSelected.push(index);
        setSelectedBox(newSelected);

        // Jika pilihan benar, simpan ke dalam matches
        const angkaBoxPertama = boxes[newSelected[0]];
        const angkaBoxKedua = boxes[newSelected[1]];
        const newMatches = [...matches];
        if (newSelected.length == 2 && angkaBoxPertama == angkaBoxKedua) { // jika sudah mengklik 2x gambar dan gambarnya benar
            newMatches.push(boxNumber);
            setMatches(newMatches); // simpan ke matches
        }

        // Jika semua box sudah matches, maka tampilkan you WIN!
        if (newMatches.length == 18) {
            setWin(true);
        }
    }

    return (
        <div>
            <h2>The Memory Game</h2>
            <div>Selected index saat ini: [{selectedBox.join(', ')}]</div>
            <div>Matches saat ini: [{matches.join(', ')}]</div>
            <div>BOXES: [{boxes.join(', ')}]</div>
            <div>
                <div className="row box-row">
                    {boxes.map((boxNumber, boxIndex) => {
                        return(
                            <Box boxNumber={boxNumber} 
                                 index={boxIndex}
                                 selectBox={selectBox} 
                                 isOpen={selectedBox.indexOf(boxIndex) !== -1}
                                 isMatched={matches.indexOf(boxNumber) !== -1} />
                        );
                    })}
                </div>
                {win && (<h3>You WIN!</h3>)}
            </div>
        </div>
    );
}

export default Main;