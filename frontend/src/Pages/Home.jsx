import Banner from '../Components/Banner'
import LatestCollection from '../Components/LatestCollection'
import BestSellers from '../Components/BestSellers'
import OurPolicy from '../Components/OurPolicy'
import NewsletterBox from '../Components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Banner/>
      <LatestCollection/>
      <BestSellers/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home