import Category1 from '../../public/images/banner/category_1.jpg.png';
import Category2 from '../../public/images/banner/category_2.jpg.png';
import Category3 from '../../public/images/banner/category_3.jpg.png';
import Category4 from '../../public/images/banner/category_4.jpg.png';
import Category5 from '../../public/images/banner/category_5.jpg.png';

import Destination1 from '../../public/images/destination/destination_1.jpg.png';
import Destination2 from '../../public/images/destination/destination_2.jpg.png';
import Destination3 from '../../public/images/destination/destination_3.jpg.png';
import Destination4 from '../../public/images/destination/destination_4.jpg.png';
import Destination5 from '../../public/images/destination/destination_5.jpg.png';

import Recommend1 from '../../public/images/recommend/tour_box_1.jpg.png';
import Recommend2 from '../../public/images/recommend/tour_box_2.jpg.png';
import Recommend3 from '../../public/images/recommend/tour_box_3.jpg.png';
import Recommend4 from '../../public/images/recommend/tour_box_4.jpg.png';

import tour1 from '../../public/images/tour/team_1.jpg.png';
import tour2 from '../../public/images/tour/team_2.jpg.png';
import tour3 from '../../public/images/tour/team_3.jpg.png';
import tour4 from '../../public/images/tour/team_4.jpg.png';

import test1 from '../../public/images/client/testi_1.png.png';
import test2 from '../../public/images/client/testi_2.png.png';
import test3 from '../../public/images/client/testi_3.png.png';

import brand1 from '../../public/images/client/brand_1.svg.svg';
import brand2 from '../../public/images/client/brand_2.svg.svg';
import brand3 from '../../public/images/client/brand_3.svg.svg';
import brand4 from '../../public/images/client/brand_4.svg.svg';
import brand5 from '../../public/images/client/brand_5.svg.svg';
import brand6 from '../../public/images/client/brand_6.svg.svg';
import brand7 from '../../public/images/client/brand_7.svg.svg';
import brand8 from '../../public/images/client/brand_8.svg.svg';

import blog1 from '../../public/images/article/blog-s-1.jpg.png';
import blog2 from '../../public/images/article/blog-s-2.jpg.png';
import blog3 from '../../public/images/article/blog-s-3.jpg.png';

import facebookIcon from '../../public/images/tour/facebook.svg';
import twiterIcon from '../../public/images/tour/twiter.svg';
import instarIcon from '../../public/images/tour/insta.svg';
import youtubeIcon from '../../public/images/tour/youtube.svg';
import phoneIcon from '../../public/images/tour/phone.svg';

import phoneF from '../../public/images/footer/phone.svg.svg';
import mail from '../../public/images/footer/mail.svg';
import location from '../../public/images/footer/location-dot.svg.svg';

import gallery1 from '../../public/images/footer/gallery_1_1.jpg.png';
import gallery2 from '../../public/images/footer/gallery_1_2.jpg.png';
import gallery3 from '../../public/images/footer/gallery_1_3.jpg.png';
import gallery4 from '../../public/images/footer/gallery_1_4.jpg.png';
import gallery5 from '../../public/images/footer/gallery_1_5.jpg.png';
import gallery6 from '../../public/images/footer/gallery_1_6.jpg.png';

export const FILTER_LOCATION = {
  destination: {
    name: 'Destination',
    items: [
      { key: 'paris', label: 'Paris' },
      { key: 'tokyo', label: 'Tokyo' },
      { key: 'london', label: 'London' },
    ],
  },

  activity: {
    name: 'Activity',
    items: [
      { key: 'cycling', label: 'Cycling' },
      { key: 'hiking', label: 'Hiking' },
      { key: 'surfing', label: 'Surfing' },
    ],
  },

  days: {
    name: '0 Days - 6 Days',
    items: [
      { key: '1', label: '0 Days - 1 Day' },
      { key: '3', label: '0 Days - 3 Days' },
      { key: '6', label: '0 Days - 6 Days' },
    ],
  },

  price: {
    name: '$200 - $580',
    items: [
      { key: '200', label: '$200 - $580' },
      { key: '400', label: '$200 - $400' },
      { key: '580', label: '$200 - $580' },
    ],
  },
};

export const TOUR_CATEGORY = [
  {
    image: Category1,
    name: 'Wildlife',
    next: 'See More',
  },
  {
    image: Category2,
    name: 'Walking',
    next: 'See More',
  },
  {
    image: Category3,
    name: 'Cruises',
    next: 'See More',
  },
  {
    image: Category4,
    name: 'Hiking',
    next: 'See More',
  },
  {
    image: Category5,
    name: 'Airbirds',
    next: 'See More',
  },
];

export const POPULAR_DESTINATION = [
  {
    image: Destination3,
    title: 'Thailand',
    amount: 22,
  },
  {
    image: Destination1,
    title: 'Nepal',
    amount: 22,
  },
  {
    image: Destination2,
    title: 'Island',
    amount: 22,
  },
  {
    image: Destination4,
    title: 'Maldives',
    amount: 22,
  },
  {
    image: Destination5,
    title: 'Belgium',
    amount: 22,
  },
  {
    image: Destination1,
    title: 'Nepal',
    amount: 22,
  },
  {
    image: Destination2,
    title: 'Island',
    amount: 22,
  },
];

export const RECOMMEND_PLACE = [
  {
    image: Recommend1,
    name: 'Ghorepani Poon Hill Trek',
    place: 'Bhutan, Pokhara',
    price: 569.0,
    day: 5,
  },
  {
    image: Recommend2,
    name: 'Langtang Valley Trekking',
    place: 'Bhutan, India, Pokhara',
    price: 600.0,
    day: 6,
  },
  {
    image: Recommend3,
    name: 'Short Trek around Pokhara',
    place: 'Bhutan, India, Tibet',
    price: 250.0,
    day: 6,
  },
  {
    image: Recommend4,
    name: 'Island Peak Climbing',
    place: 'Nepal, Pokhara, Tibet',
    price: 569.0,
    day: 3,
  },
];

export const STATISTIC_TRAVEL = [
  {
    amount: '12',
    text: 'Years Experience',
    position: 125,
  },
  {
    amount: '97%',
    text: 'Retention Rate',
    position: 20,
  },
  {
    amount: '8k',
    text: 'Tour Completed',
    position: 125,
  },
  {
    amount: '19k',
    text: 'Happy Travelers',
    position: 20,
  },
];

export const TOUR_GUIDE = [
  {
    avatar: tour1,
    name: 'Jane Cooper',
    carer: 'Tourist Guide',
  },
  {
    avatar: tour2,
    name: 'Guy Hawkins',
    carer: 'Tourist Guide',
  },
  {
    avatar: tour3,
    name: 'Jenny Wilson',
    carer: 'Tourist Guide',
  },
  {
    avatar: tour4,
    name: 'Jacob Jones',
    carer: 'Tourist Guide',
  },
];

export const CLIENT_RATING = [
  {
    rating: 5,
    avatar: test1,
    name: 'Angelina Rose',
    carer: 'Traveler',
    comment: `“Solar panels adorn the roof, harnessing renewable
energy to power the home and even feed excess
electricity back into the grid. High-performance
insulation and triple-glazed”`,
  },
  {
    rating: 5,
    avatar: test2,
    name: 'Andrew Simon',
    carer: 'Traveler',
    comment: `“A home that perfectly blends sustainability with luxury until
discovered Ecoland Residence. The moment I stepped
community, I knew it was where I wanted to live.”`,
  },
  {
    rating: 5,
    avatar: test3,
    name: 'Maria Doe',
    carer: 'Traveler',
    comment: `“The home boasts sleek, contemporary architecture
with clean lines and expansive windows, allowing
natural light to flood the interiors It incorporates passive
design principles”`,
  },
];

export const BRAND = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];

export const ARTICLE = [
  {
    avatar: blog1,
    createdAt: 'Jul 11, 2024',
    minute: '3 min read',
    description: 'Enrich Your Mind Envision Your Future Education for Success',
  },
  {
    avatar: blog2,
    createdAt: 'Jul 10, 2024',
    minute: '5 min read',
    description: 'Exploring The Green Spaces Of Real art Residence Harmony with',
  },
  {
    avatar: blog3,
    createdAt: 'Jul 09, 2024',
    minute: '7 min read',
    description: 'Living sustainability: A day in the life of real art residence',
  },
];

export const SOCIAL_ICON = [
  {
    icon: facebookIcon,
    isDisplay: true,
  },
  {
    icon: twiterIcon,
    isDisplay: true,
  },
  {
    icon: youtubeIcon,
    isDisplay: true,
  },
  {
    icon: phoneIcon,
    isDisplay: false,
  },
  {
    icon: instarIcon,
    isDisplay: true,
  },
];

export const GET_IN_TOUCH = [
  {
    icon: phoneF,
    text1: '+01 234 567 890',
    text2: '+09 999 999 999',
  },
  {
    icon: mail,
    text1: 'mailinfo00@tours.com',
    text2: 'support24@tours.com',
  },
  {
    icon: location,
    text1: '789 Inner Lane, Holy park, California, USA',
  },
];

export const POST_INS = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
