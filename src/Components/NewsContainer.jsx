import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import '../App.css'
import axios from "axios";

const NewsContainer = () => {
    const [articles, setArticles]= useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError]= useState(null)

    const apiKey= process.env.MY_API_KEY;
    console.log(apiKey)
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    useEffect(()=>{
        const fetchNews= async() => {
            try {
                const response = await axios.get(url);
                console.log(response)
                setArticles(response.data.articles);
                setLoading(false);
            } catch (error) {
                setError('Error occured')
                setLoading(false)
            }
        };
        fetchNews();
    },[articles])
    if(loading){
        return <p>Loading..</p>
    };
    if(error){
        return <p>{error}</p>
    };
   

  return (
    <div>
      <div className="heading">
        <h1>Top 10 Headlines</h1>
      </div>
      <div className="main-content">
      <NewsCard articles= {articles}/>
      </div>
      
    </div>
  );
};

export default NewsContainer;
