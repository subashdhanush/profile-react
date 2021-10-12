//import logo from './logo.svg';
import { useState } from "react";
import './App.css';

/*function App() {
  return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


//import "./styles.css";

export default function App() {
  const names = [
    {
      name: "Billa",
      image:
        "https://resizing.flixster.com/EWHoMrPPfGqHsXDmhaDhToqqpaI=/300x300/v2/https://flxt.tmsimg.com/assets/p176421_v_v10_aa.jpg",
      Description:
        "Billa is a 2007 Indian Tamil-language action thriller film directed by Vishnuvardhan. It is a reboot of 1980 Tamil film Billa which itself was a remake of the 1978 Hindi film Don. The film stars Ajith Kumar who plays a double role alongside Nayanthara and Namitha"
    },
    {
      name: "Mankatha",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqdli2H8yY_wGonz-JLrWXISoj54VOlLTbQ&usqp=CAU",
      Description:
        "Mankatha is a 2011 Indian Tamil-language crime action thriller film[6] written and directed by Venkat Prabhu.[7] It stars Ajith Kumar in his 50th film, along with an ensemble cast including Arjun Sarja, Trisha Krishnan, Lakshmi Rai, Anjali, Andrea Jeremiah, Vaibhav Reddy, Premji Amaren, and Mahat Raghavendra"
    },
    {
      name: "Veeram",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71FBkE9oDYL._RI_.jpg",
      Description:
        "Veeram (transl. Valour) is a 2014 Indian Tamil-language action comedy film directed by Siva and produced by Vijaya Productions. The film stars Ajith Kumar and Tamannaah, with a supporting cast including Vidharth, Bala, Santhanam, Nassar, Pradeep Rawat and Atul Kulkarni."
    },
    {
      name: "Viswasam",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso7N77dt5N5U-0qQPS8xAsfkMAEWJvVsKqQ&usqp=CAU",
      Description:
        "Viswasam (transl. Allegiance) is a 2019 Indian Tamil-language action drama film[7] written and directed by Siva. The film stars Ajith Kumar and Nayanthara. Produced by Sathya Jyothi Films"
    },
    {
      name: "Yennai Arindhaal",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlknHln5bbkQdSgZKHvpyOofPJCtUstW6BqQ&usqp=CAU",
      Description:
        "Yennai Arindhaal is a 2015 Indian Tamil-language action thriller film co-written and directed by Gautham Menon, and produced by A. M. Rathnam. The film stars Ajith Kumar, Arun Vijay, Trisha and Anushka Shetty"
    }
  ];
  return (
    <div className="App">
      {names.map((name, index) => (
        <Msg
          key={index}
          name={name.name}
          image={name.image}
          Description={name.Description}
        />
      ))}
    </div>
  );
}

function Msg({ name, image, Description }) {
  return (
    <div>
      <img src={image} className="poster" height="300px" alt={}/>
      <h1>{name}!!!</h1>
      <h2>{Description}</h2>
      <Counter />
    </div>
  );
}
function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const incrementlike = () => setlike(like + 1);
  const incrementdislike = () => setdislike(dislike + 1);
  return (
    <div>
      <button onClick={incrementlike}>👍{like}</button>
      {/*<p>{like}</p>*/}
      <button onClick={incrementdislike}>👎{dislike}</button>
    </div>
  );
}


