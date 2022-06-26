import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Loading from '../../components/loading/Loading';
import './beer.scss'

function Beer() {
    const { id } = useParams()    
    const [isFetching, setIsFetching] = useState(false)    
    const [item, setItem] = useState()

    useEffect(() => {
        setIsFetching(true)
        fetch(`https://api.punkapi.com/v2/beers/${id}`)
        .then(response => response.json())
        .then( json => {
            setItem(json[0])
            setIsFetching(false)               
        })
        .catch(err => console.log(err))                 
    },[id])

    return ( 
        <div className="body">
            <Header/>
            <main>
                <div className="container">
                    {isFetching ? (
                        <Loading/>
                    ) : (
                        <>
                            <div className="beer__detail">
                                <div className="beer__picture__wrapper">
                                    <img src={item?.image_url} alt={item?.name} className="beer__detail__picture"/>
                                </div>
                                <div className="beer__detail__infos">
                                    <h2>{item?.name}</h2>
                                    <span className="beer__detail__tagline">{item?.tagline}</span>
                                    <span className="beer__detail__description">{item?.description}</span>
                                    <table className='beer__detail__table'>
                                        <tbody>
                                            <tr>
                                                <td>ABV</td>
                                                <td>{item?.abv}</td>
                                            </tr>
                                            <tr>
                                                <td>IBU</td>
                                                <td>{item?.ibu}</td>
                                            </tr>
                                            <tr>
                                                <td>EBC</td>
                                                <td>{item?.ebc}</td>
                                            </tr>
                                            <tr>
                                                <td>SRM</td>
                                                <td>{item?.srm}</td>
                                            </tr>
                                            <tr>
                                                <td>PH</td>
                                                <td>{item?.ph}</td>
                                            </tr>
                                            <tr>
                                                <td>Attenuation level</td>
                                                <td>{item?.attenuation_level}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <span className='beer__detail__food__pairing'>
                                        <strong>Food pairing: </strong>
                                        {item?.food_pairing?.map((food, i) => {                                        
                                            return (
                                                <span key={i}>{`${food}${item.food_pairing.length === i + 1 ? '.' : ', '}`}</span>
                                            )
                                        })}
                                    </span>
                                </div>
                            </div>
                            <a href="/" className="back">Back to all beers</a>
                        </>
                    )}
                </div>
            </main>
            <Footer/>
        </div>
     );
}

export default Beer;