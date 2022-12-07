import NavBar from "../components/NavBar";
import {useState, useEffect, useContext} from "react";
import Card from 'react-bootstrap/Card';
import { NameContext } from '../App';
import { EmailContext } from '../App';


//Dashboard page for showing APi calls
export default function Dashboard(props) {
    const [dog, setDog] = useState([]);
    const [song, setSong] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        dogsAPI(Math.floor(Math.random() * 1000))
            .then ((result) =>{
                setDog(result[0]);
                setSong(result[1]);
                console.log(result[0]);
                console.log(result[1]);
            },
            (error) => {
                setError(true);
                console.log(error);
            }
            )
    }, [])
    if (!error) {
        return (
            <div className="Dashboard">
                <NavBar/>
                <div className="Dashboard-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={dog} />
                    <Card.Body>
                        <Card.Text>
                        This dog likes this youtube video
                        </Card.Text>
                    </Card.Body>
                    <iframe src = {song} allow="autoplay; encrypted-media" allowFullScreen
                            title="video"/>
                </Card> 
                </div>
            </div>
    );
    } else {
        return (
            <div className="Error-page"> 
                API ERROR
            </div>
        )
}
}

function dogsAPI(id) {
    const dogPromise = new Promise((resolve, reject) => {
        // makes a request to random dog api for an image
          fetch("https://dog.ceo/api/breeds/image/random")
          .then(res => res.json())
          .then(
            (data) => {
                resolve(data.message);
            }).catch(error => { 
                console.log(error);
                reject(error);
            })
        })
        const songPromise = new Promise((resolve, reject) => {
            // makes a request to my song api using the random id
              fetch("https://api.hiphop2020.org/songs?id=" + id)
              .then(res => res.json())
              .then(
                (data) => {
                    //because songs are returned in a array, index to first element if just one song
                    //only care about youtube video
                    
                    let youtube_url = data.songs[0].youtube_url;
                    youtube_url = youtube_url.replace('watch?v=', 'embed/') + '?modestbranding=1'; 
                    youtube_url = youtube_url.replace('http', 'https');
                    resolve(youtube_url);
                }).catch(error => { 
                    console.log(error);
                    reject(error);
                })
            })
        return Promise.all([dogPromise, songPromise]);
}
