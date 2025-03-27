// src/utils.js

export const VERSION_CONTROL = "Version Alpha v2.1.0";

export const CATEGORY_SELECTION = [
    'Restaurant', 'Library', 'Retail', 'Service', 'Healthcare', 'Technology',
    'Education', 'Finance', 'Real Estate', 'Construction', 'Manufacturing',
    'Transportation', 'Entertainment', 'Wholesale', 'Personal Care', 'Hospitality',
    'Fitness', 'Legal', 'Consulting', 'Insurance', 'Agriculture', 'Arts and Crafts',
    'Automotive', 'Energy', 'Food Services', 'Non-Profit', 'Fashion',
    'Marketing & Advertising', 'Media & Publishing', 'Telecommunications',
    'Pharmaceuticals', 'Biotechnology', 'Logistics & Distribution', 'Tourism & Travel',
    'Consumer Electronics', 'Ecological Services', 'Gaming', 'Sports & Recreation',
    'Home & Garden', 'Health & Wellness', 'E-commerce', 'Data Analytics',
    'Event Planning', 'Accounting', 'Cybersecurity', 'Art Gallery', 'Café',
    'Bakery', 'Bars & Nightclubs', 'Charity', 'Government Services', 'Religious Organization',
    'Auto Repair', 'Grocery', 'Clothing Stores', 'Electronics Store', 'Beauty Salon',
    'Spas', 'Jewelry', 'Interior Design', 'Bookstore', 'Pet Services', 'Pharmacy', 
    'Dental Clinic', 'Veterinary Services', 'Childcare & Daycare', 'Senior Care Services', 
    'Tattoo & Piercing', 'Barber Shop', 'Funeral Services', 'Gas Station', 'Car Wash', 
    'Locksmith', 'Laundromat', 'Dry Cleaning', 'Car Rental', 'Pawn Shop', 'Coworking Space', 
    'Photography', 'Video Production', 'Music & Performing Arts', 'Park & Recreation', 
    "Painting", "Lawn Maintenance"
];

export const KEYWORD_SELECTION = [
    "Coffee", "Brunch", "Outdoor Seating", "Dine-In",
    "Takeaway",
    "Family Friendly",
    "Vegan Options",
    "Fast Delivery",
    "Open Late",
    "Live Music",
    "Reservations",
    "WiFi",
    "Parking",
    "Pet Friendly",
    "Kids Menu",
    "Gluten-Free",
    "Organic",
    "Locally Sourced",
    "Happy Hour",
    "Drive-Thru",
];

export const STRIPE_PACKAGES = [
  {
    packageName: "Starter Setup Monthly",
    price: "$49.99 (Monthly)",
    stripeLink: "https://buy.stripe.com/4gw29odeP9xB1HO7sN",
  },
  {
    packageName: "Starter Setup Annually",
    price: "$539.88 (Annually)",
    stripeLink: "https://buy.stripe.com/bIYdS65Mn115cms28u",
  },
  {
    packageName: "Advanced Setup Monthly",
    price: "$99.99 (Monthly)",
    stripeLink: "https://buy.stripe.com/8wM5lA8Yz7ptaekbJc",
  },
  {
    packageName: "Advanced Setup Annually",
    price: "$1,079.88 (Annually)",
    stripeLink: "https://buy.stripe.com/dR6eWafmXbFJ728aF9",
  },
  {
    packageName: "Professional Revamp Monthly",
    price: "$44.99 (Monthly)",
    stripeLink: "https://buy.stripe.com/6oEaFUgr1fVZ86c4gI",
  },
  {
    packageName: "Professional Revamp Annually",
    price: "$399.99 (Annually)",
    stripeLink: "https://buy.stripe.com/6oEaFU2AbbFJ7283cN",
  },
  {
    packageName: "Standard Package Monthly",
    price: "$199.99 (Monthly)",
    stripeLink: "https://buy.stripe.com/6oE4hw2Abh030DK4gV",
  },
];

export const PAYPAL_PACKAGES = [
  {
    packageName: "Starter Setup Monthly",
    price: "$49.99 (Monthly)",
    paypalLink:
      "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-2JS91766G6110130RM5JEZIY",
  },
  {
    packageName: "Starter Setup Annually",
    price: "$539.88 (Annually)",
    paypalLink:
      "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8K26323796537934EM5JFAVQ",
  },
  {
    packageName: "Advanced Setup Monthly",
    price: "$99.99 (Monthly)",
    paypalLink:
      "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-91081387UM580043TM5JFCHQ",
  },
  {
    packageName: "Advanced Setup Annually",
    price: "$1,079.88 (Annually)",
    paypalLink:
      "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-2DX8940294236090NM5JFDIQ",
  },
  {
    packageName: "Professional Revamp Monthly",
    price: "$44.99 (Monthly)",
    paypalLink:
      "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-7RT28047U6240935EM5JFELQ",
  },
  {
    packageName: "Professional Revamp Annually",
    price: "$399.99 (Annually)",
    paypalLink:
      "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3SG86075BS189571RM5JFFMQ",
  },
  {
    packageName: "Standard Package Monthly",
    price: "$199.99 (Monthly)",
    paypalLink:
      "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-2SP19717FN632193WM5JFJHA",
  },
];

export const WEB_DEV_PRICING = [
  {
    serviceName: "Starter Setup Monthly",
    price: "$49.99 (Monthly)",
  },
  {
    serviceName: "Starter Setup Annually",
    price: "$539.88 (Annually)",
  },
  {
    serviceName: "Advanced Setup Monthly",
    price: "$99.99 (Monthly)",
  },
  {
    serviceName: "Advanced Setup Annually",
    price: "$1,079.88 (Annually)",
  },
  {
    serviceName: "Professional Revamp Monthly",
    price: "$44.99 (Monthly)",
  },
  {
    serviceName: "Professional Revamp Annually",
    price: "$399.99 (Annually)",
  },
  {
    serviceName: "Standard Package Monthly",
    price: "$199.99 (Monthly)",
  },
];

export const MOCK_BUSINESSES = [
  {
    showIcon: true,
    name: "Micky's Auto Garage",
    trackingLog: "biz-fc1906d99o",
    agentName: "Jordan, M.",
    createdOn: "February 24, 2025 at 08:36:25 AM",
  },
  {
    showIcon: true,
    name: "Mr. Bean Realtor",
    trackingLog: "biz-fc1906d98o",
    agentName: "Jordan, M.",
    createdOn: "February 24, 2025 at 08:36:25 AM",
  },
  {
    showIcon: true,
    name: "Spongebob Burger Machine",
    trackingLog: "biz-fc1906d97o",
    agentName: "Pipen, S.",
    createdOn: "February 24, 2025 at 08:36:25 AM",
  },
];

export const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

export const PAYMENT_GATEWAY = [
  { value: "Stripe", label: "Stripe" },
  { value: "Paypal", label: "Paypal" },
  { value: "Others", label: "Others" },
]

export function groupCategoriesByFirstLetter(categories) {
  const sorted = [...categories].sort((a, b) => a.localeCompare(b));

  return sorted.reduce((acc, category) => {
    const firstLetter = category[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(category);
    return acc;
  }, {});
}