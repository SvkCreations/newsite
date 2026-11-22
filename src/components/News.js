import React, { useState, useEffect } from 'react';
import {Button} from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

export default function News() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = 'https://newsapi.org/v2/everything?q=latest&apiKey=b9703d5f6695444e8b9f383d22bbf1e8'
    const [news, setNews] = useState(null)
    

    useEffect(() => {

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong!');

                }
                return response.json();
            })
            .then(data => {
                setNews(data.articles)
                setLoading(false)
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });

    }, []);


    if (loading) return <h3>Loading...</h3>;

    if (error) return <h3>Error: {error}</h3>;
    return (
        <>
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url("${news[0].urlToImage}")`, backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'left', }} >
                <div className="col-md-6 px-0 mb-auto">
                    <h1 className="display-6">{news[0].title}</h1>
                    <p className="lead my-3">{news[0].description}</p>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {
                    news.map((news, index) => (
                        <ScrollAnimation animateIn='fadeInUp' duration={.5} className="col" key={index} style={{textAlign:'left'}}>
                            <div className="card shadow-sm">
                                <img src={news.urlToImage} height='200px' className='bd-placeholder-img card-img-top' width="100%" />

                                <div className="card-body">
                                    <p className='lead fw-bold'>{news.title.length > 40 ? `${news.title.slice(0, 45)}...` : news.title}</p>
                                    <p className="card-text" style={{ textAlign: 'left' }}>{news.description.length > 80 ? `${news.description.slice(0, 80)}...` : news.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            {news.url && (
                                                <Button
                                                    variant="outline-primary"
                                                    size="sm"
                                                    href={news.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Read Article
                                                    <span className="ms-2">
                                                        →
                                                    </span>
                                                </Button>
                                            )}
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))
                }



            </div>

        </>

    )
}
