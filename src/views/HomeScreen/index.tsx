'use client';

import Article from './component/Article';
import Banner from './component/Banner';
import ClientRating from './component/ClientRating';
import PopularDestination from './component/PopularDestination';
import RecentGallery from './component/RecentGallery';
import RecommendPlace from './component/RecommendPlace';
import StatisticTravel from './component/StatisticTravel';
import TourCategory from './component/TourCategory';
import TourGuide from './component/TourGuide';
import TripWithUs from './component/TripWithUs';

const HomeScreen = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <Banner />
      <TourCategory />
      <PopularDestination />
      <TripWithUs />
      <RecommendPlace />
      <RecentGallery />
      <StatisticTravel/>
      <TourGuide/>
      <ClientRating/>
      <Article/>
    </div>
  );
};

export default HomeScreen;
