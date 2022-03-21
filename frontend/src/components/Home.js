import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
var bool = true;

const Home = (props) => {
    const [data, setData] = useState([])
    const [searhQuery, setSearchQuery] = useState("pythoncourse")
    const [readMore, setReadMore] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost:5000/search?search_query=${searhQuery}`).then(resp => {
            setData(resp.data)
        }).catch(error => {
            console.log(error);
        })

        console.log(data);
    }, [searhQuery])

    const Search = (e) => {
        e.preventDefault = true
        setSearchQuery(e.target.value)
        console.log(searhQuery);
    }
    return (
        <>
            <div className="container">

                <div className="container w-50">
                    <div className="main">
                        <div className="form-group has-search mt-5 mb-5 d-flex justify-content-between">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control" placeholder="Enter Channel Name" onChange={Search} />
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    {data.map((items, key) =>

                        <div className="card m-3" key={key}>
                            <iframe
                                width="340"
                                height="300"
                                src={`https://www.youtube.com/embed/${items.id.videoId}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{items.snippet.title.substring(0, 38)}...</h5>
                                <p className="card-text">{items.snippet.description.substring(0, 60)}....</p>
                                <p className="card-text"><small className="text-muted">{items.snippet.channelTitle}</small></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home;

