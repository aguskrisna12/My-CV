// import click1 from './Audio/1.mp3'
// import click2 from './Audio/2.mp3'
// import click3 from './Audio/3.mp3'
// import { Howl, howler } from 'howler';


// function Main () {
//     const audio = [
//         {sound : click1, label : "tik"},
//         {sound : click2, label : "tok"},
//         {sound : click3, label : "tuk"}
//     ]

//     SoundPlay = (src) => {
//         const sound = new Howl({
//             src
//         })
//         sound.play();
//     }

//     renderButtonSound = () => {
//         return audio.map((soundObj,index) => {
//             return (
//                 <button key={index} onClick={() => {this.SoundPlay(soundObj.sound)}}>
//                     {soundObj.label}
//                 </button>
//             )
//         })
//     }
//     howler.volumee(1.0)
//     return (
//         <div>
//             {this.renderButtonSound()}
//             Hello
//         </div>
//     )
// }

// export default Main;

// function Main () {

//     const play = (src) => {
//         const sound = new Howl({
//             src: src,
//             html5: true,
//             format: ['mp3']
//         })
//         sound.play();
//     }
//     return (
//         <div>
//             hellow
//             <button onClick={() => play(click1)}>Howl1</button>
//             <button onClick={() => play(click2)}>Howl2</button>
//             <button onClick={() => play(click3)}>Howl3</button>
//         </div>
//     )
// }

function Main () {
    return (
        <div>
            counter
        </div>
    )
}


export default Main;