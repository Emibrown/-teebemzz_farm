import type {
  Product,
  Feature,
  Benefit,
  GalleryItem,
  Testimonial,
  FAQItem,
  ContactInfo,
  FooterSection,
} from '@/types';

export const SITE_NAME = 'GreenHarvest';
export const SITE_TAGLINE = 'Fresh from Farm to Table';

export const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  title: 'Fresh from Farm to Table',
  description:
    'Experience the taste of nature with our sustainably raised poultry and fish. We are committed to ethical farming practices and delivering the highest quality products to your family.',
  ctaText: 'Explore Products',
  ctaLink: '#products',
  image: '/hero_image_new.png',
};

export const ABOUT_CONTENT = {
  title: 'About GreenHarvest Farms',
  description:
    'Founded on the principles of sustainability and ethical animal husbandry, GreenHarvest Farms has been a family-owned operation for over three generations. We believe that great food starts with a healthy environment and happy animals. Our commitment to natural farming methods ensures that every product we offer is not only delicious but also wholesome and responsibly produced.',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBIt0vBjSGD0ZxnoRd6nm08KmCAm_jdA5_Tg_UeA1n43dHBJbl8PTgVGRUa4Llr9dysSudYmRC5fYekja1ZcxWZ_HY3GGSqOfg_W1sCSjbeHdYxDUJc97l1arB061Z0W52Ki2RRpoQasYlWDs8149wMAT5h99l4vYJzTEkZT2LH5WiAWtILkFyVkIN87qBQCZAKcb0mPlmgQ7HvaZh3C1R9XfYwmrtAqP5vbac3li3IjoYyMkHKgSUfAmH511zltnn0oUKDBXuDKcVI',
};

export const FEATURES: Feature[] = [
  {
    id: '1',
    icon: 'spa',
    title: 'Sustainable Practices',
    description: 'We use renewable resources and minimize our environmental impact.',
  },
  {
    id: '2',
    icon: 'health_and_safety',
    title: 'Animal Welfare',
    description: 'Our animals are raised in spacious, clean, and stress-free environments.',
  },
  {
    id: '3',
    icon: 'verified',
    title: 'Quality Assured',
    description: 'From feed to final product, we maintain the highest standards of quality.',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Broilers',
    description: 'Tender, juicy, and raised on a natural diet for superior flavor.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2ZTeb4xiGhwcx3Y2Dm1mxkSvrc8MX9NqeilCqzkN5EjMCk7uiqwzvdxkN1-OrltcbAI0LK2E26TcTIhBXi7MKxOV3PG2bP3T7thSS-Hxx8Il4WqCZhm0lmKyEHjpylXAE_ZoyY_4B3i4mlTa5KnhaWMGR0awURbjQ40RhlbpgPtXN9XanCaUwQ85LaFIJcu7IaA81-7lP9phJzqcSP6_Vxns-G52wjNQKhsJaBo3VBjP3vTOJ2urMYy53Qmb0Z06RzK2Zct-JRTZr',
  },
  {
    id: '2',
    name: 'Turkey',
    description: 'Perfect for holidays or any special meal, our turkeys are rich and succulent.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGN_88_oDbrcQ_6I-_a3AqXWV7JA2TO_NFbJ7jYy9dgcsGT5zF41ds4Q18h4GSNx9IkBREM66fwg84VxeXJMU7b5ybykahQLWSLKY_6mMufk7kQ3MoKNkICRymT8HYC4zZuJEswFGS-kipoXfbeoerQ0Tc7rHO9iUAT-r9G1xIBcA1fgGOisTQVmK--8xOQNeKs4RUpI1Snh9xW7T6HBDo9gaKZe0oAS4YKsl_EiwxTEeyEShhwt8rw9EurcLgbt5wSXTGoGTnb-Be',
  },
  {
    id: '3',
    name: 'Layers (Eggs)',
    description: 'Farm-fresh eggs from our happy, free-roaming hens.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBcVCfFcewDPx869LKC71xo0Zm5kYs8GG0CJ0pm6FBEfGJS8EpQ0zjYvxIR5_hymRFVOVVISKuxSzuBpn8CHVtPf8CiAxHUFCxo8xHR6A5NRijFGWOREfQFGJISZg4r7hACk68sDBHmX9E2YGQq081c4sWTy761jEq0DJfe-NmxezKRXbjG5KCdOKDCtfn8Cyimz6mz3RfpjJ9AmkXQYPgHeJNUOyd3Yb77JCyBNvLnAJ3NRiXcaTq3thzQrxXd0lnyjQPRTjCPVZeL',
  },
  {
    id: '4',
    name: 'Catfish',
    description: 'Sustainably farmed in clean, fresh water for a mild, sweet taste.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBM2GXjiAt8rYLTwLRJCY6feu_ZV5fT0XmOG0iNUNpg1f3VkT-XjF8z93sT7n1MxKNJ-HXvgMPZg5cDfrACP5BWxHIujl6nSlcJ9g0NdmKwMpnNhdO1gY0FbGq-V9YUJ3_6V72GdXt9UEooH5aY-ZclU3I3NjdHp6Ex5ZgvnX8M_pyB3J9cfW9tk8PlblmtNmB7JCY_eukMh4u4ZSnFc9372-HYvsgJhPjQgXntavBACGzuoDxvJGF_oteyOQO0coHAMVm8RwYJ2y4E',
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: '1',
    icon: 'energy_savings_leaf',
    title: 'Healthy, Organic Feed',
    description:
      'Our animals are nourished with non-GMO, organic feed, ensuring they are healthy and the food you eat is pure.',
  },
  {
    id: '2',
    icon: 'compost',
    title: 'Eco-Friendly Practices',
    description:
      'We are committed to sustainability, using methods that enrich the land and preserve our natural resources for future generations.',
  },
  {
    id: '3',
    icon: 'local_shipping',
    title: 'Fast Delivery & Pickup',
    description:
      'Get your farm-fresh products quickly and conveniently. We offer flexible delivery options and easy on-farm pickup.',
  },
  {
    id: '4',
    icon: 'groups',
    title: 'Trusted by Community',
    description:
      'We are a proud local business, supported by and dedicated to our community, providing transparent and honest service.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Happy Hens, Healthy Eggs',
    description:
      'Our free-roaming hens enjoy spacious, clean environments, foraging on natural grasses and grains. This stress-free lifestyle results in nutrient-rich eggs with vibrant yolks, a true taste of farm-fresh quality.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBcVCfFcewDPx869LKC71xo0Zm5kYs8GG0CJ0pm6FBEfGJS8EpQ0zjYvxIR5_hymRFVOVVISKuxSzuBpn8CHVtPf8CiAxHUFCxo8xHR6A5NRijFGWOREfQFGJISZg4r7hACk68sDBHmX9E2YGQq081c4sWTy761jEq0DJfe-NmxezKRXbjG5KCdOKDCtfn8Cyimz6mz3RfpjJ9AmkXQYPgHeJNUOyd3Yb77JCyBNvLnAJ3NRiXcaTq3thzQrxXd0lnyjQPRTjCPVZeL',
    feature: 'Pasture-Raised & Free-Roaming',
    featureIcon: 'grass',
    order: 'normal',
  },
  {
    id: '2',
    title: 'Sustainable Fish Ponds',
    description:
      'Our catfish are raised in pristine, sustainably managed ponds that mimic their natural habitat. We maintain excellent water quality, ensuring our fish are healthy, flavorful, and free from contaminants.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBM2GXjiAt8rYLTwLRJCY6feu_ZV5fT0XmOG0iNUNpg1f3VkT-XjF8z93sT7n1MxKNJ-HXvgMPZg5cDfrACP5BWxHIujl6nSlcJ9g0NdmKwMpnNhdO1gY0FbGq-V9YUJ3_6V72GdXt9UEooH5aY-ZclU3I3NjdHp6Ex5ZgvnX8M_pyB3J9cfW9tk8PlblmtNmB7JCY_eukMh4u4ZSnFc9372-HYvsgJhPjQgXntavBACGzuoDxvJGF_oteyOQO0coHAMVm8RwYJ2y4E',
    feature: 'Clean, Fresh Water Habitats',
    featureIcon: 'water_drop',
    order: 'reverse',
  },
  {
    id: '3',
    title: 'Dedicated to Our Craft',
    description:
      "Our passionate team works tirelessly to uphold the highest standards of animal welfare and sustainable farming. It's this dedication that brings the freshest, highest-quality products from our family farm to your table.",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKflyHZTW2dOdwuGulsUOe15Rzhx0WAGYpO2pD335aCA0qGk4fkhVcv0EbwtqI8ZIaHDX0RASY8LtlsgQ6mFv2I0xW9tZc_sR055bgD2WdN_deeCkdj4ScN9978MaEmCtoiJjMornrKXZCWvH_P3fBJwHG1nHl2j_0Y40FcujTVzNgay0BdP6uGVkXUmpQEdt4fNTFXChcxxOQn0Y5W5H4fpB17ezn6-QTuTxxGyJaUG5QEDfmWuUy1OMf_TqRWHpJAj-nzLbtfw9e',
    feature: 'Family-Owned & Operated',
    featureIcon: 'groups',
    order: 'normal',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      "The quality of the chicken from GreenHarvest is unmatched. You can truly taste the difference. It's so fresh and flavorful, my family won't eat anything else! We are customers for life.",
    author: 'Sarah L.',
    role: 'Chef & Home Cook',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKflyHZTW2dOdwuGulsUOe15Rzhx0WAGYpO2pD335aCA0qGk4fkhVcv0EbwtqI8ZIaHDX0RASY8LtlsgQ6mFv2I0xW9tZc_sR055bgD2WdN_deeCkdj4ScN9978MaEmCtoiJjMornrKXZCWvH_P3fBJwHG1nHl2j_0Y40FcujTVzNgay0BdP6uGVkXUmpQEdt4fNTFXChcxxOQn0Y5W5H4fpB17ezn6-QTuTxxGyJaUG5QEDfmWuUy1OMf_TqRWHpJAj-nzLbtfw9e',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    question: 'Are your products organic?',
    answer:
      'While we are not certified organic, we follow sustainable and natural farming practices. Our animals are raised on non-GMO feed without the use of antibiotics or hormones, ensuring a product that is both healthy and wholesome.',
  },
  {
    id: '2',
    question: 'Where can I buy your products?',
    answer:
      'You can purchase our products directly from our farm store, at select local farmers\' markets, or through our online ordering system for local delivery. Check our "Contact" section for our address and market schedule.',
  },
  {
    id: '3',
    question: 'Do you offer farm tours?',
    answer:
      'Yes, we love to show our community where their food comes from! We offer guided farm tours on weekends. Please book in advance through our website to ensure a spot. We look forward to welcoming you!',
  },
  {
    id: '4',
    question: 'What are your delivery options?',
    answer:
      'We offer local delivery within a 25-mile radius of our farm for a small fee. Orders can also be placed online for convenient on-farm pickup. We currently do not offer nationwide shipping but are exploring options for the future.',
  },
];

export const CONTACT_INFO: ContactInfo = {
  address: '123 Sustainable Way, Garde Valley, AG 45678',
  phone: '(555) 123-4567',
  email: 'contact@greenharvest.farm',
};

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Products', href: '#products' },
      { label: 'About Us', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'FAQs', href: '#' },
    ],
  },
  {
    title: 'Our Products',
    links: [
      { label: 'Broilers', href: '#' },
      { label: 'Turkey', href: '#' },
      { label: 'Fresh Eggs', href: '#' },
      { label: 'Catfish', href: '#' },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
];

