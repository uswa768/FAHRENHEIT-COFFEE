import React from 'react';

const reviewsData = [
  {
    name: "Solveig P.",
    meta: "Local Guide · 48 reviews",
    text: "The coffee is delicious and the owner made us feel extra special by remembering our order from the day before! Bonus point for the vegan cookie and for speaking French!"
  },
  {
    name: "Shaghayegh Yas",
    meta: "Local Guide · 27 reviews",
    text: "There were three different coffee blends, and we tried two of them. Both were tasty and unique. On top of that, the welcoming and lovely vibe of the people in the café made the visit even more enjoyable."
  },
  {
    name: "David Lister",
    meta: "1 review",
    text: "Really enjoyed my experience at Fahrenheit Coffee. The coffee tasted fresh and smooth, and you can tell they actually care about quality here. The atmosphere was cozy, not too loud, and perfect."
  },
  {
    name: "Cindy Hum",
    meta: "Local Guide · 362 reviews",
    text: "Delicious drinks, quick service, comfortable and calm ambiance. The london fog had strong tea flavour and was nice and foggy - one of the better ones in the city! Latte was also tasty."
  },
  {
    name: "Aim B",
    meta: "Local Guide · 25 reviews",
    text: "Didn't order any food, but our drinks were really well made and delicious. Liked the overall vibe of the place, can be a bit tight if it's busy. Otherwise, seems like a wonderful find for barista made coffee."
  },
  {
    name: "Daniel",
    meta: "11 reviews",
    text: "We absolutely loved the coffee and the snacks! A special thank you to Samir and Tracy for their warm hospitality — you made us feel very welcome. We had such a lovely time."
  },
  {
    name: "Amaan Malik",
    meta: "Local Guide · 29 reviews",
    text: "Phenomenal. I’ve lived in the area for 3 years and this is simply the best cup of joe. The owner Sameer is a great conversationalist and all the baristas are exceptionally skilled and friendly."
  },
  {
    name: "Trenton Fuller",
    meta: "Local Guide · 20 reviews",
    text: "Took my golden retriever Biscuit here a couple of weeks ago and was so relieved to find they actually welcome dogs on the patio — the staff even brought out a little water bowl without me asking."
  },
  {
    name: "Octane Valerie",
    meta: "Local Guide · 9 reviews",
    text: "Soooo yummy, best coffee ever. I got The lemon currant scone and the chocolate babka, so pleasant. The staff is really nice too !"
  }
];

export default function Reviews() {
  // We duplicate the array to create a seamless infinite loop
  const marqueeItems = [...reviewsData, ...reviewsData];

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2>The Word on the Street</h2>
      </div>
      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeItems.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="stars">
                ★★★★★
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <h4>{review.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
