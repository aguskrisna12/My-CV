import Box from './Box';
import './game.css';
import {useState, useEffect} from 'react';
import images from './Images'

function Main () {
    const [boxes, setBoxes] = useState([]);
    const [selectedBox, setSelectedBox] = useState([]);
    const [matches, setMatches] = useState([]);
    const [win, setWin] = useState(false);
    const [count, setCount] = useState(0)
    const [isClean, setIsClean] = useState(true)

    function randomize () {
        const randomized = {};
        const tempBoxes = [];

        let valid = false;

        while (valid === false) {
            let angkaRandom = Math.floor(Math.random() * 100) % 18;

            // Cek jika angkaRandom sudah pernah muncul 1 kali
            // Maka simpan angkaRandom ke boxes dan
            // set randomized[angkaRandom] = true
            if (!randomized[angkaRandom] && tempBoxes.indexOf(angkaRandom) !== -1) {
                tempBoxes.push(angkaRandom);
                randomized[angkaRandom] = true;
            }
            // Cek jika angkaRandom belum pernah muncul samasekali
            // Maka simpan angkaRandom ke boxes
            if (!randomized[angkaRandom] && tempBoxes.indexOf(angkaRandom) === -1) {
                tempBoxes.push(angkaRandom);
            }

            // Cek jika box sudah terisi 36 kali
            // Maka set valid = true, sehingga berhenti dari looping
            if (tempBoxes.length === 36) {
                valid = true;
            }
        }
        setBoxes(tempBoxes);

    }

    useEffect(() => {
        randomize()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    function selectBox (boxNumber, index) {

        setIsClean(false);

        setCount(count + 1);

        if(selectedBox.length === 1 && selectedBox.indexOf(index) !== -1){
            return;
        }

        // Jika sudah match, tidak lakukan apapun
        if (matches.indexOf(boxNumber) !== -1) { // jika indexOf -1 artinya salah/false, !== -1 artinya benar/true
            return;
        }

        // Jika sudah dua kali mengklik dan gambar tidak match, maka box akan ter reset
        if (selectedBox.length === 2) { // jika sudah di klik 2x
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
        if (newSelected.length === 2 && angkaBoxPertama === angkaBoxKedua) { // jika sudah mengklik 2x gambar dan gambarnya benar
            newMatches.push(boxNumber);
            setMatches(newMatches); // simpan ke matches
        }

        // Jika semua box sudah matches, maka tampilkan you WIN!
        if (newMatches.length === 18) {
            setWin(true);
        }
    }

    function reset () {
        setCount(0);
        setWin(false);
        randomize();
        // setBoxes([]);
        setMatches([]);
        setSelectedBox([]);
        setIsClean(true);
    }

    return (
        <div>
            <h2 className='d-flex justify-content-center'>The Memory Game</h2>
            <div className='d-flex justify-content-center'> <h5>Klik: {count} <button disabled={isClean} onClick={reset} className='btn btn-primary'>Reset</button></h5></div>
            {/* <div className='d-flex justify-content-center'>Selected index saat ini: [{selectedBox.join(', ')}]</div>
            <div className='d-flex justify-content-center'>Matches saat ini: [{matches.join(', ')}]</div>
            <div className='d-flex justify-content-center'>BOXES: [{boxes.join(', ')}]</div> */}
            <div className='d-flex justify-content-center'>
                <div className="row box-row">
                    {boxes.map((boxNumber, boxIndex) => {
                        return(
                            <Box boxNumber={boxNumber} 
                                 index={boxIndex}
                                 selectBox={selectBox} 
                                 isOpen={selectedBox.indexOf(boxIndex) !== -1}
                                 isMatched={matches.indexOf(boxNumber) !== -1} 
                                 imageSource={images[boxNumber]}/>
                        );
                    })}
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                {win && (<h3>You WIN!</h3>)}
            </div>
        </div>
    );
}

export default Main;