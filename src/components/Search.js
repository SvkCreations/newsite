import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Loading from './Loading'
import { useSearchParams } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Spinner
} from "react-bootstrap";
import '../News.css'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Search() {
  const [searchParams] = useSearchParams()
  const searchValue = searchParams.get("query")
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=b9703d5f6695444e8b9f383d22bbf1e8`
  const [news, setNews] = useState(null)

  useEffect(() => {
setLoading(true)
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        return response.json();
      })
      .then(data => {
        setNews(data.articles)
        console.log(data.articles)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });

  }, [searchValue]);


  
  if (error) return <h3>Error: {error}</h3>;
  return (
    <div style={{ textAlign: 'left' }}>
      <Sidebar />
      <main className="main-content">
        <Navbar />

        <div className="container-fluid">
          {loading ? (
            <Loading/>
          ) : (
            <Container className="news-results py-4">

            {/* Heading */}
            <div className="d-flex justify-content-between
                align-items-center mb-4 flex-wrap gap-2">

              <div>

                <p className="text-muted mb-0">
                  {searchValue && <> <strong>"{searchValue}"</strong></>}
                </p>
              </div>

              <Badge bg="primary" className="px-3 py-2">
                {news.length} Results
              </Badge>

            </div>

            {/* News Cards */}
            <Row className="g-4 row">

              {news.map((news, index) => (

                <Col xs={12} key={news.article_id || index}>

                  <Card className="news-result-card border-0 shadow-sm">

                    <Row className="g-0">

                      {/* News Image */}
                      <Col md={4}>

                        <div className="news-image-wrapper">

                          <Card.Img
                            src={
                              news.urlToImage ||
                              "https://placehold.co/600x400?text=News"
                            }
                            alt={news.title}
                            className="news-result-image" style={{cursor:'pointer'}}
                          />

                        </div>

                      </Col>

                      {/* News Content */}
                      <Col md={8}>

                        <Card.Body className="p-4">

                          <div className="d-flex
                                            justify-content-between
                                            align-items-center mb-3">

                            <Badge bg="light" text="primary">
                              {searchValue}
                            </Badge>

                            <small className="text-muted">
                              {news.publishedAt
                                ? new Date(news.publishedAt)
                                  .toLocaleDateString()
                                : "Recently published"}
                            </small>

                          </div>

                          <Card.Title className="news-result-title">
                            {news.title}
                          </Card.Title>

                          <Card.Text className="text-muted
                                            news-result-description">
                            {news.description ||
                              "No description available."}
                          </Card.Text>

                          <div className="d-flex
                                            justify-content-between
                                            align-items-center flex-wrap gap-3">

                            <div className="news-source">
                              <small className="fw-semibold">
                                {news.source.name ||
                                  "News Source"}
                              </small>
                            </div>

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

                        </Card.Body>

                      </Col>

                    </Row>

                  </Card>

                </Col>

              ))}

            </Row>

          </Container>
          )}

          
        </div>

      </main>
    </div>
  )
}
