//import logo from './logo.svg';
//import {BrowserRouter as Router,Switch,Route,Link,useHistory,useParams} from "react-router-dom";
import {Router,Switch,Route,Link,useHistory,useParams} from "react-router-dom";
import { useState } from "react";
//import { useHistory } from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
//import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import './App.css';
import { KeyboardArrowDown } from "@mui/icons-material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
//import { CardContent } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppBar, Toolbar } from "@mui/material";
import { useEffect } from "react";
// import { AppBar } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper'; 
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import AddIcon from '@mui/icons-material/Add';
import PaletteIcon from '@mui/icons-material/Palette';
import ContactsIcon from '@mui/icons-material/Contacts';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

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
const INTIAL_MOVIES = [
  {
    Id:100,
    name: "Billa",
    image:
      "https://resizing.flixster.com/EWHoMrPPfGqHsXDmhaDhToqqpaI=/300x300/v2/https://flxt.tmsimg.com/assets/p176421_v_v10_aa.jpg",
    Description:
      "Billa is a 2007 Indian Tamil-language action thriller film directed by Vishnuvardhan. It is a reboot of 1980 Tamil film Billa which itself was a remake of the 1978 Hindi film Don. The film stars Ajith Kumar who plays a double role alongside Nayanthara and Namitha",
     trailer:"https://www.youtube.com/embed/NtfYzw_zs5s",
    },
  {
    Id:101,
    name: "Mankatha",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqdli2H8yY_wGonz-JLrWXISoj54VOlLTbQ&usqp=CAU",
    Description:
      "Mankatha is a 2011 Indian Tamil-language crime action thriller film[6] written and directed by Venkat Prabhu.[7] It stars Ajith Kumar in his 50th film, along with an ensemble cast including Arjun Sarja, Trisha Krishnan, Lakshmi Rai, Anjali, Andrea Jeremiah, Vaibhav Reddy, Premji Amaren, and Mahat Raghavendra",
    trailer:"https://www.youtube.com/embed/vHESM8iR1JE",
    },
  {
    Id:102,
    name: "Veeram",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71FBkE9oDYL._RI_.jpg",
    Description:
      "Veeram (transl. Valour) is a 2014 Indian Tamil-language action comedy film directed by Siva and produced by Vijaya Productions. The film stars Ajith Kumar and Tamannaah, with a supporting cast including Vidharth, Bala, Santhanam, Nassar, Pradeep Rawat and Atul Kulkarni.",
    trailer:"https://www.youtube.com/embed/E2jIoTXQdxY",
    },
  {
    Id:103,
    name: "Viswasam",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso7N77dt5N5U-0qQPS8xAsfkMAEWJvVsKqQ&usqp=CAU",
    Description:
      "Viswasam (transl. Allegiance) is a 2019 Indian Tamil-language action drama film[7] written and directed by Siva. The film stars Ajith Kumar and Nayanthara. Produced by Sathya Jyothi Films",
    trailer:"https://www.youtube.com/embed/TiDyv53adt0",
    },
  {
    Id:104,
    name: "Yennai Arindhaal",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlknHln5bbkQdSgZKHvpyOofPJCtUstW6BqQ&usqp=CAU",
    Description:
      "Yennai Arindhaal is a 2015 Indian Tamil-language action thriller film co-written and directed by Gautham Menon, and produced by A. M. Rathnam. The film stars Ajith Kumar, Arun Vijay, Trisha and Anushka Shetty",
    trailer:"https://www.youtube.com/embed/B7c87SWQg-Y",
    }
];

  localStorage.setItem("movies",JSON.stringify(INTIAL_MOVIES)); 
  const getFromStorage=(key)=>JSON.parse(localStorage.getItem(key));
  //const getFromStorage=(key)=>JSON.parse(localStorage.getItem("movies"));
  const updatedStoredMovies=updateMovies =>localStorage.setItem("movies",JSON.stringify(updateMovies));

  

// fetch("https://61230caad4462800170549c8.mockapi.io/movies")
//  .then((data)=>data.json())
//  .then((mvs)=>console.log(mvs));

  // const [movies,setMovies]=useState([]);
  // const [movieName, setMovieName] = useState("");
  // const [moviePoster, setMoviePoster] = useState("");
  // const [movieDescription, setMovieDescription] = useState("");
  // const [movietrailer, setMovietrailer] = useState("");
  // const history=useHistory();

    //  const [movies, setMovies] = useState (
    //   JSON.parse(localStorage.getItem("movies"))
    //   );
  // const  getmovies=()=>{
  //   fetch("https://61230caad4462800170549c8.mockapi.io/movies")
  //   .then(res => res.json())
  //   .then(data=>setMovies(data))
  // }
  
  /*const getMovies=()=>{
    fetch("https://61230caad4462800170549c8.mockapi.io/movies/",{
      method:"GET",
    })
    .then((data)=>data.json())
    .then((mvs)=>setMovies(mvs));
  };
useEffect(getMovies, []);*/

//    useEffect(()=>{
//    fetch("https://61230caad4462800170549c8.mockapi.io/movies",{
//      method:"GET",
//    })
//   .then((data)=>data.json())
//   .then((mvs)=>setMovies(mvs));
//  }, []);

/*const deleteMovie=(id)=>{
console.log("deleting api id",id)
fetch("https://61230caad4462800170549c8.mockapi.io/movies/" +id,{
      method:"DELETE",
    })
    .then((data)=>data.json())
    .then((data)=>getMovies());
};

const createMovie=(newMovie)=>{
  fetch("https://61230caad4462800170549c8.mockapi.io/movies/",{
        method:"POST",
        body:JSON.stringify(newMovie),
        headers:{'Content-type':'application/json'}
      })
      .then((data)=>data.json())
      .then((data)=>setMovies()).then(data=>history.push("/movies"))
  };

  const addMovie = () => {

    const newMovie = {
      name: movieName,
      image: moviePoster,
      Description: movieDescription,
      trailer:movietrailer,
    };*/
      //  setMovies([...movies,newMovie]);
      //  updatedStoredMovies([...movies,newMovie]);
      //  history.push("/movies");
      // localStorage.setItem("movies",JSON.stringify([movies]));
    /*createMovie(newMovie);
    console.log(movies);
    console.log("updated movies",...movies);
  };
  const editMovie = () => {

    const newMovie = {
      name: movieName,
      image: moviePoster,
      Description: movieDescription,
      trailer:movietrailer,
    };
    setMovies([...movies,newMovie]);
      updatedStoredMovies([...movies,newMovie]);
      localStorage.setItem("movies",JSON.stringify([movies]));
    console.log(newMovie);
  };*/
  
  export default function App() {
    const [darkMode,setDarkMode]=useState(false);
      const theme = createTheme({
         palette: {
          mode: darkMode ? "dark" :"light",
        },
      });
    const [movies,setMovies]=useState([]);
    const [movieName, setMovieName] = useState("");
    const [moviePoster, setMoviePoster] = useState("");
    const [movieDescription, setMovieDescription] = useState("");
    const [movietrailer, setMovietrailer] = useState("");
    const history=useHistory();

    const getMovies=()=>{
      fetch("https://61230caad4462800170549c8.mockapi.io/movies/",{
        method:"GET",
      })
      .then((data)=>data.json())
      .then((mvs)=>setMovies(mvs));
    };
  useEffect(getMovies, []);
  const deleteMovie=(id)=>{
    console.log("deleting api id",id)
    fetch("https://61230caad4462800170549c8.mockapi.io/movies/" +id,{
          method:"DELETE",
        })
        .then((data)=>data.json())
        .then((data)=>getMovies());
    };
    
    const createMovie=(newMovie)=>{
      fetch("https://61230caad4462800170549c8.mockapi.io/movies/",{
            method:"POST",
            body:JSON.stringify(newMovie),
            headers:{'Content-type':'application/json'}
          })
          .then((data)=>data.json())
          .then((data)=>setMovies()).then(data=>history.push("/movies"))
      };
    
      const addMovie = () => {
    
        const newMovie = {
          name: movieName,
          image: moviePoster,
          Description: movieDescription,
          trailer:movietrailer,
        };
        createMovie(newMovie);
        console.log(movies);
        console.log("updated movies",...movies);
      };
      const editMovie = () => {
    
        const newMovie = {
          name: movieName,
          image: moviePoster,
          Description: movieDescription,
          trailer:movietrailer,
        };
        setMovies([...movies,newMovie]);
          updatedStoredMovies([...movies,newMovie]);
          localStorage.setItem("movies",JSON.stringify([movies]));
        console.log(newMovie);
      };
  return (
     <ThemeProvider theme={theme}>
    <div className="App">
      <Paper elevation={4} style={{minHeight:"100vh"}}>
      <section>
        <AppBar position="static">
        <Toolbar className="main-menu">
            <Link to="/">
              <p className="menu-link">
              <HomeIcon />Home 
              </p>
            </Link>  
            <Link to="/home">Home</Link>
            <Link to="/movies"><p className="menu-link">
              <MovieIcon />Movies 
              </p>
            </Link>
            <Link to="/about"><p className="menu-link">
              <ContactsIcon />About 
              </p></Link>
            <Link to="/color-game"><p className="menu-link">
              <PaletteIcon />Color-game 
              </p></Link>
            <Link to="/add-movies"><p className="menu-link">
              <AddIcon />Add movies 
              </p></Link>
              <Button startIcon={darkMode ? <Brightness7Icon/> :<Brightness4Icon/>}style={{marginLeft:"auto"}} color="inherit" onClick={()=>setDarkMode(!darkMode)}>{darkMode ? "Light" :"Dark"}mode</Button>
        </Toolbar>
        </AppBar>
          <Switch>
          <Route exact path="/Home">Welcome to our Page
            </Route>
            <Route exact path="movies/edit/:id">
              Edit Movie
            </Route> 
            <Route  exact path="/movies">
              {movies.map((name, index) => (
         <div>
          <Msg   
          deleteMovieButton={
            <IconButton className="movie-delete-button"
            onClick={() => {
              // const removeIdx = index;
              // console.log("deleting", removeIdx);
              // setMovies(movies.filter((mv, idx) => idx != removeIdx));
              // updatedStoredMovies(movies.filter((mv, idx) => idx != removeIdx));
              deleteMovie(name.id);
              //console.log("api deleting id",name.id)
            }}
            color="error" aria-label="Delete movie" component="span">
      <DeleteIcon/>
    </IconButton>
          }
          editMovieButton={
    //         <IconButton className="movie-delete-button"
    //         onClick={() =>history.push('/movies/edit/button' +index)} 
    //         color="secondary" aria-label="Edit movie">
    //   <EditIcon/>  
    // </IconButton>
     <IconButton className="movie-delete-button"
     onClick={() =>history.push('/movies/edit/' +index)} 
     color="secondary" aria-label="Edit movie">
       {/* <MovieDetails/> */}
<EditIcon/>  
</IconButton>
          }
            key={index}
            name={name.name}
            image={name.image}
            Description={name.Description}
            idx={name.movieid}
          />
        </div>
      ))}  
            </Route>
              {/* <Route exact path="movies/edit/:index">
            </Route>  */}
            {/* <Route exact path="movies/edit/:id">
              Edit Movie
            </Route>  */}
             {/* <Route path="/movies/:idx">
              <MovieDetails/>
              </Route>  */}
            <Route  path="/About">
            </Route>
            <Route path="/color-game">
              <Color/>
            </Route>
            <Route exact path="/movies/:id">Movie details</Route>
            {/* <Route exact path="/movies/:id/newpage">Movie details</Route> */}
            <Route path="/add-movies">
            <div className="movie-form">
          <TextField   value={movieName}
            onChange={(event) => setMovieName(event.target.value)} label="MovieName" variant="outlined" />
          <TextField  value={moviePoster}
            onChange={(event) => setMoviePoster(event.target.value)}
            label="MovieUrl" variant="outlined" />
          <TextField value={movieDescription}
            onChange={(event) => setMovieDescription(event.target.value)} label="MovieDescription" variant="outlined" />
          <TextField value={movietrailer}
            onChange={(event) => setMovietrailer(event.target.value)} label="Movietrailer" variant="outlined" />

          <Button  onClick={addMovie} variant="contained">Add movie</Button>
  </div>
  </Route>
          </Switch>
          </section>
          </Paper>
        {/*<div className="movie-form">
          
          <TextField   value={movieName}
            onChange={(event) => setMovieName(event.target.value)} label="MovieName" variant="outlined" />
          <TextField  value={moviePoster}
            onChange={(event) => setMoviePoster(event.target.value)}
            label="MovieUrl" variant="outlined" />
          <TextField value={movieDescription}
            onChange={(event) => setMovieDescription(event.target.value)} label="MovieDescription" variant="outlined" />
          <Button  onClick={addMovie} variant="contained">Add Movie</Button>
  </div>*/}      
        {/* {INTIAL_MOVIES.map((name, index) => (
         <div>
          <Msg  
          deleteMovieButton={
            <IconButton className="movie-delete-button"
            onClick={() => {
              const removeIdx = index;
              console.log("deleting", removeIdx);
              //console.log(movies.filter((mv, idx) => idx === removeIdx));
              setMovies(movies.filter((mv, idx) => idx != removeIdx));
              //updatedStoredMovies(movies.filter((mv, idx) => idx != removeIdx));
            }}
            color="error" aria-label="Delete movie" component="span">
      <DeleteIcon/>
    </IconButton>
          }
          editMovieButton={
            <IconButton className="movie-delete-button"
            onClick={() =>history.push('/movies/edit/button' +index)}
            color="secondary" aria-label="Edit movie">
      <EditIcon/>
    </IconButton>
          }
            key={index}
            name={name.name}
            image={name.image}
            Description={name.Description}
            idx={index}
          />
        </div>
      ))} */}
        </div>
      </ThemeProvider>
  );
} 

function MovieDetails() {
  const {movieid}=useParams()
  const history=useHistory()
    //const movie=JSON.parse(localStorage.getItem('movies'))
    //const movie=getFromStorage("movies")[movieid];
  
  //console.log(movie);
  const [movie,setMovie]=useState([]);
  const getMovie=()=>{
    fetch("https://61230caad4462800170549c8.mockapi.io/movies/" +movieid)
    .then((data)=>data.json())
    .then((mvs)=>setMovie(mvs));
  };
useEffect(getMovie, []);

  return(
  <div>
    <iframe width="759"
     height="506" 
    src={movie.trailer}
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
    <div className="movie-detail-container">
   <h1>Movie details {movie.name}</h1>;
   <p>{movie.Description}</p>
   <Button variant="contained" onClick={()=>history.goBack()} startIcon={<ArrowBackIcon/>}>Back</Button>
  </div>
  </div>
  ); 
}

function Msg({ name, image, Description,deleteMovieButton,idx,editMovieButton }) {
  const [show, setShow] = useState(false);
  const[nice,setNice]=useState("");
  const history=useHistory();
  // useEffect(()=>{
  //   console.log("state or props is changed",nice,show);
  //   },[show]);
  return (
    <Card className="movie-container">
      <input onChange={event=>setNice(event.target.value)}/>
      {nice}
      <img height="300px" src={image} className="poster" alt={name}/>
      <CardContent>
      <h1 className="name">{name} </h1> 
      <IconButton
      onClick={()=>history.push("/movies/" + idx)}
      color="primary"
      aria-label="Detailed info about movie"
      >
      <InfoIcon/>
       </IconButton>
      {show ? <p>{Description}</p> : ""}
      <CardActions>
      <Counter />{deleteMovieButton}{editMovieButton}
      <IconButton onClick={() => setShow(!show)} color="primary" aria-label="Deletemovie">
         {show ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}
         
      </IconButton>
      {/* <IconButton color="primary"
      aria-label="editing the movie">
      <EditIcon onClick={()=>history.push("/movies/edit/" +idx)} edit movie/>
      </IconButton>  */}
      </CardActions>
      
      </CardContent>
      

    </Card>
  );
}
function Counter() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const incrementlike = () => setlike(like + 1);
  const incrementdislike = () => setdislike(dislike + 1);
  const styles={
    fontSize:"30px",
    color:"black",
  };
  return (
    <div>
      <IconButton  style={styles} onClick={incrementlike} aria-label="like">
        <Badge badgeContent={like} color="primary">
      👍
      </Badge>
      </IconButton>
      <IconButton style={styles} onClick={incrementdislike} aria-label="dislike">
        <Badge badgeContent={dislike} color="error">
        👎
      </Badge>
      </IconButton>
    </div>
  );
}

function Color()
{
  const [color,setColor]=useState("orange");
  const styles=
 {
   backgroundColor:color,
   fontSize:"1.5rem",
   fontWeight:"bold"
  }; 

const INITIAL_COLORS=["crimson","orange","skyblue","pink"];
const [colors,setColors]=useState(INITIAL_COLORS);
return(
<div>
  <input value={color} style={styles} onChange={(event)=>setColor(event.target.value)} placeholder="enter a color"/>
  {/*<p>{color}</p>*/}
  <button onClick={()=>setColors([...colors,color])}>Add color</button>
  {colors.map((clr)=>(
    <ColorBox color={clr}/>
  ))}
  
  </div>
);
}
function ColorBox({color})
{
 const styles={
  backgroundColor:color,
  height:"100px",
  width:"150px",
 }; 

return <div style={styles}></div>

}
