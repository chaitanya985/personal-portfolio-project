import React from "react";
import blog1 from './images/ai.png';
import blog2 from './images/linux.png';
import blog3 from './images/game.png';
import blog4 from './images/open.png';

const Blog = () => {
  const posts = [
    {
      img: blog1,
      title: "AI: Powering Up the Future! 5 Tools Transforming Tech",
      url: "https://medium.com/@chaitanya.panicker98/ai-powering-up-the-future-5-tools-transforming-tech-a6e1a175895f",
    },
    {
      img: blog2,
      title: "Discover 8 Essential Linux Utilities: A Beginner’s Guide",
      url: "https://medium.com/@chaitanya.panicker98/discover-8-essential-linux-utilities-a-beginners-guide-d4cfcd9465b1",
    },
    {
      img: blog3,
      title: "6 Steps to Turning Your Game Idea into Reality",
      url: "https://medium.com/@chaitanya.panicker98/6-steps-to-turning-your-game-idea-into-reality-9a0a6e91c79f",
    },
    {
      img: blog4,
      title: "Top Open-Source Tools to Supercharge Your Productivity",
      url: "https://medium.com/@chaitanya.panicker98/top-open-source-tools-to-supercharge-your-productivity-4e689a483e5a",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32 rounded-2xl" id="blog">
      <div className="container mx-auto mb-8 text-center">
        <h2 style={{fontFamily: "Tahoma"}} className="text-4xl font-bold mb-5 border-b-[5px] w-[104px] border-indigo-600 pb-2 mx-auto">
          Blogs
        </h2>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-4 gap-6">
        {posts.map((item, index) => (
          <a 
            href={item.url} 
            key={index} 
            className="blog-card transform transition duration-300 hover:scale-105 hover:shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-xl" />
            <h3 className="py-5 text-xl">{item.title}</h3>
          </a>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://medium.com/@chaitanya.panicker98"
          className="btn bg-accent border-2 border-[#7477FF] text-white px-8 py-3 hover:bg-transparent inline-block rounded-full"
        >
          See all Blogs
        </a>
      </div>
    </section>
  );
};

export default Blog;