import React, {useState , useEffect} from "react";
import './news.css'


function Main () {
    const [articles, setArticles] = useState([])
    var appleURL = 'https://newsapi.org/v2/everything?q=apple&from=2021-12-01&to=2021-12-03&sortBy=popularity&apiKey=764d4ff2218f4147a1a15be747698952'
    useEffect(function (){
        fetch(appleURL)
        .then(result => result.json())
        .then(jsonData => {
            setArticles(jsonData.articles)
            console.log(articles)
        })
    }, []);
    return (
        <div className="container">
            <h2>NewsAPI</h2>
            <table className="table table-striped table-responsive">
                <tbody className="table table-striped">
                    <tr>
                        <td className="text-center fw-bold">Title</td>
                        <td className="text-center fw-bold">Author</td>
                        <td className="text-center fw-bold">Published</td>
                        <td className="text-center fw-bold">Images</td>
                    </tr>
                {articles.map((data, key) => {
                   return (
                       <tr key={key}>
                           <td className="pt-5">{data.title}<a href={data.url} target="_blank">[Source]</a></td> 
                           <td className="text-center pt-5">{data.author}</td>
                           <td className="text-center pt-5">{new Date(data.publishedAt).toLocaleString()}</td>
                           <td><img className="img-api" src={data.urlToImage} alt="image"/></td>
                       </tr>
                   )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Main ;