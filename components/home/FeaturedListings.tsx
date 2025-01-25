import React from "react";
import Badge from "../common/Badge";
import TextLarge from "../common/TextLarge";
import HomeCarousel from "../subcomponents/featuredlistings/HomeCarousel";

const FeaturedListings = () => {
  return (
    <div className="text-center mt-24 py-20 bg-slate-200 featured-listings">
      <div className="badge my-8">
        <Badge text="Properties" />
      </div>
      <div className="heading my-6">
        <TextLarge text="Featured Listings" />
      </div>
      <div className="my-4 container mx-auto">
        <HomeCarousel />
      </div>
      <div className="my-8">
        <a
          href="https://aibot-frontend-32zs.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 px-8 inline-flex items-center justify-center bg-brown-600 text-white rounded-lg hover:bg-brown-700 transition font-bold shadow-lg"
        >
          Phoenix AI
        </a>
      </div>
    </div>
  );
};

export default FeaturedListings;
