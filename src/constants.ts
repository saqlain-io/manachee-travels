import { Tour, Destination, Testimonial } from './types';

export const TOURS: Tour[] = [
  {
    id: 'kenya-safari',
    title: 'Great Migration Safari',
    location: 'Kenya & Tanzania',
    duration: '12 Days',
    price: 8450,
    rating: 4.9,
    reviews: 128,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbkZE5XHvFlPrcntT91UWlooPe4XzBufJ3yCTInaEVNpRGjQuY-y41jcdKyHj6AcPuLkYxgXAMDUTwm7s0ztwamWJlcafipM4e4xteyAft9WdLvWPAkLDMhWR_cbR0jzYDUI8TldW_M8B1VMplSbq5O16y6wXgLQbOMLguvOAtkp0ECydmeW6TtUEv0JuAAsX2h0jL33uegRUnn5PcR2Gx5FAbmZiYBuVhnNKULeOvkofWRGYVjB0K0XLH96LKw1QESBRt3zL92rc',
    featured: true,
    bestseller: true,
    description: "Witness the earth's greatest theater, where millions of hooves thunder across the Serengeti in a timeless cycle of life and survival.",
    category: 'Adventure'
  },
  {
    id: 'maldives-escape',
    title: 'Luxury Escape in the Maldives',
    location: 'Maldives',
    duration: '7 Days',
    price: 6800,
    rating: 5.0,
    reviews: 94,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB84OcRH-FAly77NPYzFv3czgy-WaSJ2dZY1x8-mfSBGm-eH-CUI-WjApYbJzA-tWWYBMs5ACWeO3DkGT6DZ7HKA3scy0yr8IWqvI__fwWqiWZyjdIqLNBVNdTMQ3TumFbYNMrUop08jqizztj32Ex1CN4K9R2BDpvhh1p1o9OM0kt1UMEIIo8Wz6NdcKGjcw0b6tvxMRwqkTFRZHnubx_VF31nhKXmLcn8XMaJjhphRDad5Fy854QmbtArEBfz8EpoEZy-K4tss8c',
    featured: true,
    description: 'A neon-lit odyssey where ancient traditions meet the pulse of the future.',
    category: 'Luxury'
  },
  {
    id: 'kyoto-cultural',
    title: 'Cultural Wonders of Kyoto',
    location: 'Kyoto, Japan',
    duration: '10 Days',
    price: 3100,
    rating: 4.8,
    reviews: 76,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFDH7LTR6YomxVXbZC32_bSYwXyQKLvh-6Nfp7XuQfLinipghV6qb5kUvazv5gP0Yweal-KiJeupCO1UCuwHHaHaD1a8TEvpjECclj5GveokpPPmyz2N-g6-wDs3MddN6kes2shFTC3C1f9Jk-uYc_65HKaD_iI5QtOZqXny3TNPcF1JgsqQ5kM68ZW7Mpcy183PePafJhUo7tMIkqiLUiwojKC-v8mAjMsnEPIKh12PWiX-EAGeNzJ64CFe3ZWak4emq9mxP1JNA',
    featured: true,
    description: 'Immerse yourself in the heart of Japanese tradition.',
    category: 'Cultural'
  },
  {
    id: 'alps-trek',
    title: 'Japanese Alps Trek',
    location: 'Nagano Region, Japan',
    duration: '8 Days',
    price: 4200,
    rating: 4.8,
    reviews: 54,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3ydYtcuAXzKxJ6pXD7Jf49u1GuaS83TJ1Epz8OtpTlTwBQh01RsYDgYCFdJbD0rUJmN5674PwmUMRDjxJ7Utyhw-3VohP0l0lfpJYY7mZvd67LEoTO1BBPuSbhAO-rbcdx2Z3oGtduPv-LGVaKywx1bMbpQ_lIACgd_Q4er7q8dO62oajBwiUFvK-BEkHUeOsVp_0NlPJBiWZnsS6aF2uNd5khUkaTfCHY--kO5STPGizcMvSKBl2lHjbfunLy5rMokIChptkWtE',
    description: 'Dramatic snow-capped peaks and crystal clear mountain lakes.',
    category: 'Adventure'
  },
  {
    id: 'amalfi-luxury',
    title: 'Amalfi Coast Luxury Escape',
    location: 'Positano • Capri, Italy',
    duration: '7 Days',
    price: 12900,
    rating: 5.0,
    reviews: 42,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDCBoqPMr_m0ii_B7tMhqGtXRm4-ntsPerIaxCGtallBdvEYi8ukZp-nUXlNHBCfGQDWyb6URf84dS3Q6OlivVXA5Od-4Ttasaj41GBE2a_dH21SuV49paGInnbDyPxMmK5nHiRyhGCXiLuCpBwI4V0YROZ7PatjmM6GdKTGxiHjrJn33xxJYhajvXiICa54cT137pnfvYYo1qMPC8cgSUBviBw5pD6DXBtiQ4EQPpat-sOV4opAuIefmetMuHd5gtAX0euskRoPk',
    description: 'Vibrant coastal towns and turquoise Mediterranean waters.',
    category: 'Luxury'
  },
  {
    id: 'highlands-trail',
    title: 'Highlands Heritage Trail',
    location: 'Scotland',
    duration: '12 Days',
    price: 5800,
    rating: 4.7,
    reviews: 38,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNnAei5YWKxDy-y296UeFXqp-iCO0I4sbkkkPnjqrGiHWdIPuKhx8ItBxDV6z69xSPg999lQ110dZQBD_gYF5i4Gyg7C7WQNjhElFGlfSBEYfzHY99xJmxg9D-WLuBkZJ7RhxeRMwbpNkicClbNnWyY8ZXzX-Sd5BGBPY05iY4M5--ZpDUShUxFElTSbVuhjbos0Tk-cmXRAlWQUGJf2q_fOzIhgnghV6UhEAadS8KpnlqKklz_RzWsdWDdwmjB2URtdhjJym7NiM',
    description: 'Misty mornings and stone castles beside dark mirror-like lochs.',
    category: 'Cultural'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'serengeti',
    name: 'The Serengeti',
    region: 'Africa • Tanzania',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvmodr5_4a5ynDj7ToYix6J7kfzX5Xz7ls2a4V2qFzJQRVn0pehnzNt1YfHtneoBTWIoqHsC0-HTtkUeB6dwLF8Nru_W6QeoQx1tJxdxVW9OgPiBRIQnxij6xJV7N0MdZls9M4UlOlhBaVouRVFsipFOtp6Z6kkNBy6xMDDdNlTHXddSTFDsSrJeu8TUnoJTcW4JiFDAbKw4BlGYEJXfTOYadHyoBRJpykX7r8QS2fEoKaNqymSVfxuzInqgS9NhSrzxav_jd2wwk',
    description: 'Witness the eternal rhythm of the Great Migration and the majestic silence of the savannah.'
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    region: 'Asia • Japan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzQ0bLLfckKA_U7Sf0m80SvzXddGtKWPmzalkVW2P9r4IgJ2EXq-P7F3lWEktsesZkIpvUaYGUei2a-PCROTynDETZFdVpXjUSxd5J67vtywj_HTM-4XjjqvHsw82Ug4D96jds_FEywyWnGFRUF1T_t59W9EpVnDopKd6XReWM5bqWyRMANG9JNVDP4Ea3rmubuh0I3EV6c9_Pd_IH29zkhXYk8WpDX7Hcx2O36Il70FW6EeffIXFpPAFwpwM1E7lzgwc9zPHIjZo',
    description: 'A neon-lit odyssey where ancient traditions meet the pulse of the future.'
  },
  {
    id: 'santorini',
    name: 'Santorini',
    region: 'Europe • Greece',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8OOQRyubaTf1zpkFPiGgbpTdmxB4xGJuO_FK28IgWaD6SGz4xb-difPeYuNjCCsKOv0sf-pP9tmoKvpp-RdRXmIMCObRlD6hV0VGkIM0PFhVq71gdTup8LEgodZAKHn330u-tU1YXOamgWyyZsByPtawQeA_w-PMxURQw8LegqlE3TuRj9DxKZIGDZjzVFdRYHwPpzHk9KEiOVxMrbEutvtM9XSj7zoSBA8CYd5jFh2UFZGj2knGMFYi0ihCjNK9uZMddt1HbQk4',
    description: 'Azure domes and caldera sunsets in the heart of the Cyclades.'
  },
  {
    id: 'patagonia',
    name: 'Patagonia',
    region: 'Americas • Chile',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJZfSD-YLXsQhpnWXK6jBfFsyIfoRqoeQIudjA9td_suMECWex6T2MfOXLrNe6b-ZmSnpOZk_pTaiIOqgKW4jas5AUgHTYqfrJI_zi34Y_DBszaGUrID4hO2dwv_rGXTeWNYJoOUXdegAYWjSJrGFqg7xy2lGYDUql_lHX6d3O0Cg4Os-3kP03gqyChTNRwQXBpRhGtdchkipC6cz1M8QPEHSyHhwUfGX8XPW7Im1yiU38vVm3A0h1p3_qXg-adYzjd42t_Hk8tEA',
    description: 'Adventure at the edge of the world amidst granite spires and glacial lakes.'
  },
  {
    id: 'reef',
    name: 'The Reef',
    region: 'Oceania • Australia',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5iZk82kx_QwHTGTea9H_q-AS_uNzYWQ7qqe1QiltMrTy4haqoy5zQEYVj11VrDMbN-JGth9LX6VKcFA17H430q1x_qH6J4VKU7yPZkpQJOugHtqUgb1JFdjFWFQ6aTkImh3DN0FuSSYgTmW2rJdsh458LKjDpRPtHPUG0LLGJ6wCltpkHLuh0qa3V3jIdhFnuztMZaseLlHW-lJBUEm47XsM63ykdV-DcMSTk741Rvzt-tcn2GrrY4SUrmIsYNaaV88gJDo1zqww',
    description: "Dive into a kaleidoscope of marine life in the world's largest coral ecosystem."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'London, UK',
    text: 'The Kenya safari was life-changing. Manachee Travels handled every detail perfectly, allowing us to truly immerse ourselves in the magic of the savanna.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtx0r-XVSVH2OwyokesqE8jXWQRIBN-6Uw17WkoshJloEcFP5S_-SUnyKQbBGtv6avUBaovmqa0B76RrbFg98fQqvAuNlBs9I0ec489UX3dFwqJDo_2peTZBpjf9gGPi595dPrfWIC2L8YNUoxUrFNc_S4rKF4c6tcERevxam3LrN3Lgj-EndJdDmiNsYTEA8Kuid4EfrQ1PfLX9q8GGHVmQEIX43CfdWjtkptNPJNgo7tfRMomFpKzsLtTXKNG9ds48CTwLcZROo',
    rating: 5
  },
  {
    id: '2',
    name: 'David Martinez',
    location: 'San Francisco, CA',
    text: 'Booking our honeymoon through Manachee was the best decision. The Maldives escape they curated was beyond luxury – it was spiritual. Highly recommend their bespoke services.',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhkfdYRVpAUmUrSFHUujC4fK8fk9k0SUuOo017J3FbvQ-kpUqNP0bDNHWFOF7cMWMoc1I4ppW7PhRJ4KzgDbzywXf7NYUh15tNBtRDekCkwSimQiO24ESCcdUljLmZ_phMpDiot48dJdN5MAK_xOzvi4koIOSEeiJ2eq1thEHl0Lh4xYjkyfk-lr3lbfHA77ZNTvXBUHp1XQTNeNRKk32iuvpA_QOikhWba2ocqTHDR7SRizMU7cFw79pr0A31rZj_Bng5LfhWVfw',
    rating: 5
  }
];
