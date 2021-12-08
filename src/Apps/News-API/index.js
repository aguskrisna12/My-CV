import React, {useState , useEffect} from "react";
import './news.css'


function Main () {
    const [articles, setArticles] = useState([]),
          [isLoading, setIsLoading] = useState(false),
          [keyword, setKeyword] = useState("");
    function queryData () {
        if(!keyword) {
            return
        }
        var url = `https://newsapi.org/v2/everything?q=${keyword}&from=2021-12-01&to=2021-12-03&sortBy=popularity&apiKey=764d4ff2218f4147a1a15be747698952`
        setIsLoading(true);
        fetch(url)
        .then(result => result.json())
        .then(jsonData => {
            setArticles(jsonData.articles);
            console.log(articles);
            setIsLoading(false);
        })
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            queryData();
          console.log('do validate')
        }
      }

    useEffect(function (){
        queryData();
    }, []);
    return (
        <div className="container">
            <div className="d-flex">
            <h2>NewsAPI</h2>
                <input type="text" onKeyDown={handleKeyDown} className="form-group ms-auto" name="keyword" 
                onChange={e => setKeyword (e.target.value)} value={keyword}/>
                <button onClick={queryData} className="btn btn-success"> <i className="bi bi-search"></i></button>   
            </div>
            <table className="table table-striped table-responsive">
                <tbody className="table table-striped">
                    <tr>
                        <td className="text-center fw-bold">Title</td>
                        <td className="text-center fw-bold">Author</td>
                        <td className="text-center fw-bold">Published</td>
                        <td className="text-center fw-bold">Images</td>
                    </tr>
                    {isLoading && ( <tr> 
                        <td colSpan="4" align="center">
                            <div class="spinner-border text-muted"></div>
                        </td>
                    </tr>)}
                {!isLoading && articles.map((data, key) => {
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