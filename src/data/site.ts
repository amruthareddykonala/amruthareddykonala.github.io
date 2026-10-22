// One place for every fact and setting the pages share.
// Fill the empty values when the accounts exist (Day 0 / Day 1 items); empty values hide their links.

export const SITE = {
  // Change to the final address before deploying (e.g. https://<username>.github.io).
  url: 'https://amruthareddykonala.github.io',
  name: 'Amrutha Reddy Konala',
  alternateName: 'Konala Amrutha Reddy', // form used on the certificate and older records
  pronoun: 'she',
  roleLine: 'Strategic Advisor · Fractional CMO · Author',
  description:
    'Amrutha Reddy Konala is a strategic advisor, fractional CMO and the author of Structural Marketing, a 10-volume work that treats marketing as one structure: competition, strategy, customer, value, pricing, channels, timing, execution and measurement.',
  email: 'amruthareddykonala05@gmail.com',
  city: 'Hyderabad, India',
  // Form backend: free Web3Forms access key (https://web3forms.com, sends submissions to the email above).
  // While empty, forms are replaced by a plain email link so no enquiry is lost.
  web3formsKey: '6228494d-d063-4bc1-9268-778662922ad9',
  // Booking page (Cal.com free). Empty = button hidden.
  bookingUrl: '',
  // Newsletter (D5, default Kit free). Empty = "launching soon" note.
  newsletterFormUrl: '',
  // Profiles (Day 1, d01.o2). Empty = not shown.
  profiles: {
    linkedin: '',
    x: '',
    instagram: '',
    youtube: '',
    wikipedia: '', // her Wikipedia user page
  } as Record<string, string>,
  // D6: licence line.
  licence: 'All rights reserved. Short quotations with credit and a link are welcome.',
};

export const PILLARS = [
  { name: 'COMPETE', q: 'Where can we win, and against whom?' },
  { name: 'WHY', q: 'What are we choosing, and what are we refusing?' },
  { name: 'WHO', q: 'Which customers create value worth serving?' },
  { name: 'WHAT', q: 'What do we promise, and how do we prove it?' },
  { name: 'HOW MUCH', q: 'How do we price and capture the value we create?' },
  { name: 'WHERE', q: 'Where do customers find, buy and use it?' },
  { name: 'WHEN', q: 'When do we move, and in what order?' },
  { name: 'HOW', q: 'How does the organisation actually execute?' },
  { name: 'SO WHAT', q: 'What did it produce, in the language of the P&L?' },
];
