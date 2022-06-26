import "./home.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import Pagination from "react-js-pagination";

function Home() {  

    const [items, setItems] = useState()
    const [page, setPage] = useState(1)
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        setIsFetching(true)
        fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`)
        .then(response => response.json())
        .then( json => {
            setItems(json)
            setIsFetching(false)            
        })
        .catch(err => console.log(err))                 
    },[page])

    const handlePageClick = (pageNumber) => {
        setPage(pageNumber)            
      };

  return (
    <div className="body">
      <Header/>
      <main>
        <div className="container">
            <h1 className="title">Our beers</h1>            
            <span className="subtitle">Check the details about each beer made by BrewDog</span>
            {isFetching ? (                
                <Loading/>
            ) : (
                <>
                    <ul className="beer__list">
                        {items?.map(item => {
                            return (
                                <li key={item.id}>
                                    <a href={`/beer/${item.id}`} className="beer__card">
                                        <img src="/beer-icon.png" alt="Cerveja" className="beer__icon" />
                                        <div className="beer__infos">
                                            <span className="beer__name">{item.name}</span>
                                            <span className="beer__tagline">{item.tagline}</span>
                                        </div>
                                    </a>
                                </li>
                            )
                        })}                        
                    </ul>
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={10}
                        totalItemsCount={325}
                        pageRangeDisplayed={5}
                        prevPageText="<"
                        nextPageText=">"
                        onChange={handlePageClick}
                    />
                </>
            )}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
