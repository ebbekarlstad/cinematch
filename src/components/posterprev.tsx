import React from "react";

// Creates component of movie previews for simplicity
function PosterPreview() {
  return (
    <div className="grid grid-cols-4 gap-4 z-50 translate-y-12">
      {/* Image 1*/}
      <div className="w-52 h-78 bg-gray-200 rounded-3xl shadow-black shadow-xl">
        <img
          src="/img/poster-prev-1.jpg"
          alt="Movie Poster 1"
          className="w-full h-full object-cover rounded-3xl border-t-1 border-white select-none"
        />
      </div>
      {/* Image 2*/}
      <div className="w-52 h-78 bg-gray-200 rounded-3xl shadow-black shadow-xl">
        <img
          src="/img/poster-prev-3.jpg"
          alt="Movie Poster 2"
          className="w-full h-full object-cover rounded-3xl border-t-1 border-white select-none"
        />
      </div>
      {/* Image 3*/}
      <div className="w-52 h-78 bg-gray-200 rounded-3xl shadow-black shadow-xl">
        <img
          src="/img/poster-prev-2.jpg"
          alt="Movie Poster 3"
          className="w-full h-full object-cover rounded-3xl border-t-1 border-white select-none"
        />
      </div>
      {/* Image 4*/}
      <div className="w-52 h-78 bg-gray-200 rounded-3xl shadow-black shadow-xl">
        <img
          src="/img/poster-prev-4.jpg"
          alt="Movie Poster 4"
          className="w-full h-full object-cover rounded-3xl border-t-1 border-white select-none"
        />
      </div>
    </div>
  );
}

export default PosterPreview;
