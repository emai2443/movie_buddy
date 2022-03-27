import React,{useEffect,useState} from 'react';
import { Movie } from './Movie';
import {genres} from './Genres';
import ButtonList from './ButtonList';
import { TEST_API, clearBtn } from './Button';


export const Filter = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    clearBtn()
    filter()
  }, [])

  const getMovies = (url) => {
    fetch(url).then(res => res.json()).then(data => {
      if(data.results.length !== 0) { //If there are movies with selected genre, show them
        setMovies(data.results);
        let v = document.getElementById('emptyResult')
        v.innerHTML = ``;
      } else { //If no movies with selected genre, show message "No Results"
        setMovies(data.results);
        let v = document.getElementById('emptyResult')
        v.innerHTML = `<h1 class="no-result">No Results</h1>`;
        //console.log('empty!');
        // setMovies([])
      }

    })
  }

  const filter = () => {
    getMovies(TEST_API)
    // selectedGenre = []
  }

  return (<div>
    <h1 className='filterTitle'>Filters</h1>
    <ButtonList genres={genres}/>
    <div className='filterACButton'>
      <div className='filterButton'><button onClick={() => filter()} className='applyButton'>Apply</button></div>
      <div className='filterButton'><button onClick={() => (clearBtn(),getMovies(TEST_API))} className='applyButton'>Clear x</button></div>
    </div>
    <div id='emptyResult'></div>
    <div className='movie-container'>
      {movies.length > 0 && movies.map((movie)=> 
      <Movie key={movie.id} {...movie}/>)}
    </div>
  </div>);
}










  // makeGenres()
  // function makeGenres() {
  //   const item = document.getElementById('tags');
  //   genres.forEach(genre => {
  //       const t = document.createElement('div');
  //       t.classList.add('tagtag');
  //       t.id = genre.id;
  //       t.innerText = genre.name;

  //       t.addEventListener('click', () => {
  //         if(selectedGenre.length == 0) {
  //           selectedGenre.push(genre.id);
  //         } else {
  //           if(selectedGenre.includes(genre.id)){
  //             selectedGenre.forEach((id, idx) => {
  //               if(id == genre.id) {
  //                 selectedGenre.splice(idx, 1);
  //               }
  //             })
  //           } else {
  //             selectedGenre.push(genre.id);
  //           }
  //         }
  //         console.log(selectedGenre)
  //         //getMovies(API_URL + '&with_genres=' + encodeURI(selectedGenre.join(',')));
  //         TEST_API += '&with_genres=' + encodeURI(selectedGenre.join(','));
  //         //getMovies(TEST_API);
  //       })
  //       document.body.append(t);
  //       //item.appendChild(t);
  //   });
  // }

  //  getMovies(API_URL);



// const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`

// const API_KEY = 'api_key=4f2efbc6d360da7dfad19dd3d13f1d09';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
// const IMG_URL = 'https://image.tmdb.org/t/p/w500';
// const searchURL = BASE_URL + '/search/movie?'+API_KEY;
// var lastUrl = '';


// const genres = [
//   {
//     "id": 28,
//     "name": "Action"
//   },
//   {
//     "id": 12,
//     "name": "Adventure"
//   },
//   {
//     "id": 16,
//     "name": "Animation"
//   },
//   {
//     "id": 35,
//     "name": "Comedy"
//   },
//   {
//     "id": 80,
//     "name": "Crime"
//   },
//   {
//     "id": 99,
//     "name": "Documentary"
//   },
//   {
//     "id": 18,
//     "name": "Drama"
//   },
//   {
//     "id": 10751,
//     "name": "Family"
//   },
//   {
//     "id": 14,
//     "name": "Fantasy"
//   },
//   {
//     "id": 36,
//     "name": "History"
//   },
//   {
//     "id": 27,
//     "name": "Horror"
//   },
//   {
//     "id": 10402,
//     "name": "Music"
//   },
//   {
//     "id": 9648,
//     "name": "Mystery"
//   },
//   {
//     "id": 10749,
//     "name": "Romance"
//   },
//   {
//     "id": 878,
//     "name": "Science Fiction"
//   },
//   {
//     "id": 10770,
//     "name": "TV Movie"
//   },
//   {
//     "id": 53,
//     "name": "Thriller"
//   },
//   {
//     "id": 10752,
//     "name": "War"
//   },
//   {
//     "id": 37,
//     "name": "Western"
//   }
// ]

// var selectedGenre = []

// // setGenre()
// function setGenre() {
//   // tagsEl.innerHTML='';
//   genres.forEach(genre => {
//     const t = document.createElement('div');
//     t.classList.add('tagtag');
//     t.id = genre.id;
//     t.innerText = genre.name;

//     t.addEventListener('click', () => {
//       if(selectedGenre.length == 0) {
//         selectedGenre.push(genre.id);
//       } else {
//         if(selectedGenre.includes(genre.id)){
//           selectedGenre.forEach((id, idx) => {
//             if(id == genre.id) {
//               selectedGenre.splice(idx, 1);
//             }
//           })
//         } else {
//           selectedGenre.push(genre.id);
//         }
//       }
//       console.log(selectedGenre)
//       // getMovies(API_URL + '&with_genres=' + encodeURI(selectedGenre.join(',')));
//     })
//     // tagsEl.append(t);
//   })
// }

// const addEvent = (e) => {
//   const parent = document.createElement('div');
//   parent.id = 'tags';
//   genres.forEach(genre=>{
//     const t = document.createElement('div');
//     t.classList.add('tagtag');
//     t.id = genre.id;
//     t.innerText = genre.name;

//     t.addEventListener('click', () => {
//       if(selectedGenre.length == 0) {
//         selectedGenre.push(genre.id);
//       } else {
//         if(selectedGenre.includes(genre.id)){
//           selectedGenre.forEach((id, idx) => {
//             if(id == genre.id) {
//               selectedGenre.splice(idx, 1);
//             }
//           })
//         } else {
//           selectedGenre.push(genre.id);
//         }
//       }
//       console.log(selectedGenre)
//       // getMovies(API_URL + '&with_genres=' + encodeURI(selectedGenre.join(',')));
//     })

//     parent.append(t);
//   })
//   document.body.append(parent)
// }

// // getMovies(API_URL)
// // function getMovies(url) {
// //   lastUrl = url;
// //   fetch(url).then(res => res.json()).then(data => {
// //     console.log(data.results)
// //     if(data.results.length !== 0) {
// //       setMovies(data.results);
// //     } else {
// //       console.log('no movies');
// //     }
// //   })
// // }


// addEvent();
// export const Filter = () => {
//   const [movies, setMovies] = useState([]);


//   useEffect(() => {
//     fetch(FEATURED_API).then(res => res.json())
//     .then(data => {
//         setMovies(data.results);
//             // console.log(data.results);

//             //console.log(movies);
//     }
    
//     );
//   }
//   ,[]);


//   return (<>
//     <h1 className='filterTitle'>Filters</h1>
//     <div id='tags'>
//       <div className='tagtag'>wooord</div>
//     </div>
//     {/* <div id='tags'>
//       <div className='tagtag' id='28'>Action</div>
//       <div className='tagtag' id='12'>Adventure</div>
//       <div className='tagtag' id='16'>Animation</div>
//       <div className='tagtag' id='35'>Comedy</div>
//       <div className='tagtag' id='80'>Crime</div>
//       <div className='tagtag' id='99'>Documentary</div>
//       <div className='tagtag' id='18'>Drama</div>
//       <div className='tagtag' id='10751'>Family</div>
//       <div className='tagtag' id='14'>Fantasy</div>
//       <div className='tagtag' id='36'>History</div>
//       <div className='tagtag' id='27'>Horror</div>
//       <div className='tagtag' id='10402'>Music</div>
//       <div className='tagtag' id='9648'>Mystery</div>
//       <div className='tagtag' id='10749'>Romance</div>
//       <div className='tagtag' id='878'>Science Fiction</div>
//       <div className='tagtag' id='10770'>TV Movie</div>
//       <div className='tagtag' id='53'>Thriller</div>
//       <div className='tagtag' id='10752'>War</div>
//       <div className='tagtag' id='37'>Western</div>
//     </div> */}
    
//     <div className='movie-container'>
//         {movies.length > 0 && movies.map((movie)=> 
//         <Movie key={movie.id} {...movie}/>)};
//     </div>

//     </>
//   )
// };
