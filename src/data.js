import peepoeats from "./img/peepo/peepoeats.PNG";
import peepoeats1 from "./img/peepo/peepoeats1.PNG";

import peepocharts from "./img/peepo/peepocharts.PNG";
import peepocharts1 from "./img/peepo/peepocharts1.PNG";
import peepomoney from "./img/peepo/peepomoney.PNG";
import peepocountdown from "./img/peepo/peepocountdown.PNG";
import mccorgi from "./img/peepo/mccorgi.PNG";
import mccorgi1 from "./img/peepo/mccorgi1.PNG";
import baitoto from "./img/peepo/baitoto.PNG";
import baitoto1 from "./img/peepo/baitoto1.PNG";
import photototo from "./img/peepo/photototo.PNG";
import photototo1 from "./img/peepo/photototo1.PNG";
import peepobitcoin from "./img/peepo/peepobitcoin.PNG";
import peepobitcoin1 from "./img/peepo/peepobitcoin1.PNG";

import ignite from "./img/peepo/ignite.PNG";
import peeposuite from "./img/peepo/peeposuite.PNG";

function PeepoData() {
  return [
    {
      id: 101,
      name: "PeepoEats Reset",
      year: 2020,
      framework: "Angular",
      site: "https://peepoeats-reset.netlify.app/",
      description:
        "Similar to PeepoEats, this can be used to rank food items. However, this was done without any backend. As such, when the page is refreshed, all food items will start at their original rating of 1200.",
      imgPath: peepoeats,
      platforms: ["Angular", "Bootstrap", "Netlify"],
      screenshot: peepoeats1,
    },
    {
      id: 102,
      name: "PeepoEats",
      year: 2020,
      framework: "Angular",
      site: "https://peepoeats.netlify.app/",
      description:
        "This was the first site that I published on my own using a framework. I had previously completed a Leave Calculator using only JavaScript and I wanted to try out something greater in scale. At that time, Angular was the only framework that I knew. Inspired by FaceMash made by Mark Zukerburg, I decided to come up with something similar, but this time, with local food. The algorithm used is based on the Chess Elo rating system, where the difference between the ratings of the winner and loser determines the total number of points gained or lost after a game. This was quite extensive, as I had a makeshift backend using Firebase, that keeps track of individual food ratings, as well as the total number of comparisons made.",
      imgPath: peepoeats,
      platforms: ["Angular", "Bootstrap", "Firebase", "Netlify"],
      screenshot: peepoeats1,
    },
    {
      id: 201,
      name: "PeepoCharts",
      year: 2020,
      framework: "Vue",
      site: "https://peepocharts.netlify.app/",
      description:
        "My first site using Vue! This was a smaller scale website that I created to generate charts for fake stock data. I embarked on this to try out Vue, as well as Google Charts. You can adjust the Starting Price and the Volatility of the stock price, and watch its changes too.",
      imgPath: peepocharts,
      platforms: ["Vue", "Bootstrap", "Netlify"],
      screenshot: peepocharts1,
    },
    {
      id: 202,
      name: "PeepoMoney",
      year: 2020,
      framework: "Vue",
      site: "https://peepomoney.netlify.app/",
      description:
        "Did this on a whim. An idea just popped into my head. What if I'm able to see my money grow every second based on my monthly savings? And so, I just decided to create this over the evening.",
      imgPath: peepomoney,
      platforms: ["Vue", "Bootstrap", "Netlify"],
    },
    {
      id: 203,
      name: "PeepoCountdown",
      year: 2020,
      framework: "Vue",
      site: "https://peepocountdown.netlify.app/",
      description:
        "It's a countdown app! So this was kinda inspired when one of my friends told me that he was intending to quit his job on a certain date, and was looking forward to it. I just thought, oh! I could create a countdown app to that date!",
      imgPath: peepocountdown,
      platforms: ["Vue", "Bootstrap", "Netlify"],
    },
    {
      id: 204,
      name: "PeepoBitcoin",
      year: 2021,
      framework: "Vue",
      site: "https://peepobitcoin.netlify.app/",
      description:
        "PeepoBitcoin was created to track your total returns from Bitcoin without having to login to your Binance account. Simply enter how much money you have invested, how many Bitcoins you have bought, and click on 'Update.' Data will only be stored locally on your device. The next time you visit the site, you can immediately view how much gains/losses you have made on your Bitcoin purchase!",
      imgPath: peepobitcoin,
      platforms: ["Vue", "Bootstrap", "Netlify"],
      screenshot: peepobitcoin1,
    },
    {
      id: 205,
      name: "BaiToto",
      year: 2021,
      framework: "Vue",
      site: "https://baitoto.netlify.app/",
      description:
        "This was a website I made over the weekend for my cousin! My cousin has 2 puppies, Bailey and Toto, and I could never tell them apart. So I got inspired to make this 'Find Toto' game after learning some CSS card tricks online. Please visit her YouTube channel, BaiToto! She makes quality videos, and it's definitely worth subscribing! I also really wanted to practice using Vue with the CLI and Vue Router. Initially, I wanted to do this with React, but after having learnt both, Vue was simply the much more enjoyable choice to code in.",
      imgPath: baitoto,
      platforms: ["Vue", "Bootstrap", "Netlify"],
      screenshot: baitoto1,
    },
    {
      id: 206,
      name: "Photo Toto",
      year: 2022,
      framework: "Vue",
      site: "https://photo-toto.netlify.app/",
      description:
        "A website that I decided to make after some inspiration from typical memory flashcard games. Originally, this did not have a scoring system and it only had the feature to flip and unflip. After a while, I decided to replicate Wordle's Guess Distribution for this game as well. This was done using Charts.css, which provided an easy-to-implement system to put charts on your website, using classes just like Bootstrap.",
      imgPath: photototo,
      platforms: ["Vue", "Bootstrap", "Netlify"],
      screenshot: photototo1,
    },
    {
      id: 207,
      name: "Merry Christmas Corgi",
      year: 2022,
      framework: "Vue",
      site: "https://merry-christmas-corgi.netlify.app/",
      description:
        "This was a simple site that I created, testing out the Unsplash API to fetch images of random Corgis. Every time the image flips to the Christmas tree, it will post a GET request to the API to fetch another Corgi image.",
      imgPath: mccorgi,
      platforms: ["Vue", "Bootstrap", "Netlify"],
      screenshot: mccorgi1,
    },
    {
      id: 301,
      name: "Ignite",
      year: 2021,
      framework: "React",
      site: "https://ignite-zschuah.netlify.app/",
      description:
        "This was one of the very first sites that I did using React. It uses the RAWG video games database API, and fetches Upcoming, Popular and New games. It also allows you to search for any game on any platform available, and provides a rating for each game. If you realise that it's very similar to PeepoSuite, you are absolutely right! Both sites use the same styling that I learnt from Dev Ed's React course. I think his React course is worth a look, even if you already know React. He goes through Framer Motion, Styled Components and Intersection Observer, which are things that can be added into your React project. Seriously, Framer Motion is REALLY amazing. If you are considering having animations in your project, consider using React with Framer Motion.",
      imgPath: ignite,
      platforms: ["React", "Netlify"],
    },
    {
      id: 302,
      name: "PeepoSuite",
      year: 2021,
      framework: "React",
      site: "https://peeposuite.netlify.app/",
      description:
        "And yes, this site was made using React! To be honest, I've always wanted to come up with a project using React, but React just felt very unnatural to me, especially when I just got used to Vue. I LOVED using Vue, and there wasn't a reason for me to use React, until I learnt about Framer Motion. When I saw that animations could be done so easily, I knew I had to try it out. It is one of the few websites that I did without Bootstrap, and used React's Styled Components instead. I've also made this mobile responsive using React Responsive. On mobile devices, there will be no popup of details when clicked, but you will be brought to the site instead.",
      imgPath: peeposuite,
      platforms: ["React", "Netlify"],
    },
  ];
}

export default PeepoData;
