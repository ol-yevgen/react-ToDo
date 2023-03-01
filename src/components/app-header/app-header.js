// import { Component } from 'react';
import logo from '../../assets/clipboard-list-svgrepo-com.svg'

import './app-header.css';

const AppHeader = (props) => {
    let { userName, date, time, greetingsName, onUpdateTime } = props;
    
    const storageName = localStorage.getItem('userName') || '';

    if (storageName !== '') {
        userName = JSON.parse(storageName)
    }

    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt="todo" />
            </div>
            <div className='title-text'>
                <h1 className='greetings'
                    onLoad={onUpdateTime()}
                > Good {time},
                    <input type="text"
                        placeholder="Name here"
                        className='name'
                        value={userName}
                        onChange={greetingsName} />
                </h1>
                <h2 className='date'>It's {date}</h2>
            </div>
        </header>
    )
}

// class AppHeader extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userName: '',
//             time: '',
//             date: new Date().toDateString().replace(/\s/, ', '),
//             hours: +(new Date().toLocaleTimeString().slice(0, 2))
//         }
//     }

//     greetingsName = (e) => {
//         e.preventDefault();
//         this.setState({
//             userName: e.target.value,
//         })
//     }

//     onUpdateTime = () => {
//         const { hours } = this.state;

//         window.onload = () => {
//             if (hours < 12) {
//                 this.setState(() => {
//                     return { time: "morning" }
//                 })

//             } else if (hours > 11 && hours < 17) {
//                 this.setState(() => {
//                     return { time: "afternoon" }
//                 })
//             } else {
//                 this.setState(() => {
//                     return { time: "evening" }
//                 })
//             }
//         }   
//     }

//     render() {
//         const { userName, time, date } = this.state;
//         return (
//             <header className='header'>
//                 <div className='logo'>
//                     <img src={logo} alt="todo" />
//                 </div>
//                 <div className='title-text'>
//                     <h1 className='greetings'
//                         onLoad={this.onUpdateTime()}> Good {time},
//                         <input type="text"
//                             placeholder="Name here"
//                             className='name'
//                             value={userName}
//                             onChange={this.greetingsName} />
//                     </h1>
//                     <h2 className='date'>It's {date}</h2>
//                 </div>
//             </header>
//         )
//     }
// }

export default AppHeader;