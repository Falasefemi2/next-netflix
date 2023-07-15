import requests from '@/Request'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Row from '@/components/Row'


const Home = () => {
  return (
    <>
    <Navbar />
    <Main />
    <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
    <Row title="Popular" fetchURL={requests.requestPopular} />
    <Row title="Trending" fetchURL={requests.requestTrending} />
    <Row title="Top Rated" fetchURL={requests.requestTopRated} />
    <Row title="Horror" fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home