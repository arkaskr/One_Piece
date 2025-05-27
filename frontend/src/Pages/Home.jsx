import Banner from '../Components/Banner'
import LatestCollection from '../Components/LatestCollection'
import BestSellers from '../Components/BestSellers'
import OurPolicy from '../Components/OurPolicy'
import NewsletterBox from '../Components/NewsletterBox'
import CollectAccessories from '../Components/CollectAccessories'

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellers/>
      <CollectAccessories/>
      <LatestCollection/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home