"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const rendorCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  // countriesContainer.textContent = " ";
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

// // // Our First AJAX Call: XMLHttpRequest
// const getCountryData = function (country) {

//     const request = new XMLHttpRequest();
//     request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);

//         const html = `
//             <article class="country">
//                 <img class="country__img" src="${data.flag}" />
//                 <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//             ).toFixed(1)} people</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//                 </div>
//             </article>
//   `;
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');
// getCountryData('bharat');

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

/*
// //! Our First AJAX Call: XMLHttpRequest
const getCountryDataAndNeighbour = function (country) {
    //AJAX call country 1
    const request = new XMLHttpRequest();
    request.open(
        "GET",
        `https://countries-api-836d.onrender.com/countries/name/${country}`
    );
    request.send();

    request.addEventListener("load", function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        //!render country 1
        rendorCountry(data);

        //!get neighbour country
        const [neighbour] = data.borders;

        if (!neighbour) return;

        //!ajax call country 2
        const request2 = new XMLHttpRequest();
        request2.open(
            "GET",
            `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
        );
        request2.send();

        request2.addEventListener("load", function () {
            // console.log(this.responseText);

            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            rendorCountry(data2, "neighbour");
        });
    });
};

// getCountryDataAndNeighbour("portugal");
// getCountryDataAndNeighbour("usa");
// getCountryDataAndNeighbour("germany");
getCountryDataAndNeighbour("bharat");
*/

//!fatch
//? this is what we used to do it.
// const request = new XMLHttpRequest();
// request.open( "GET", `https://countries-api-836d.onrender.com/countries/name/${country}`
// );
// request.send();

//? now with fetch() function.
// const request = fetch("https://countries-api-836d.onrender.com/countries/name/bharat");

// console.log(request);

// const getCountry = function (country) {
//     fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`).then(function (responce) {
//         console.log(responce);

//         return responce.json()
//     }).then(function (data) {
//         console.log(data);
//         rendorCountry(data[0])
//     })
// }

// getCountry("bharat")

// const getCountry = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then((responce) => responce.json())
//     .then((data) => rendorCountry(data[0]));
// };

// getCountry("bharat");

//? now adding neighbour countries
// const getCountry = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then((responce) => responce.json())
//     .then((data) => {
//       rendorCountry(data[0]);

//       const neighbour = data[0].borders?.[0]; //we use optional chaining here for countries for 0 border

//       if (!neighbour) return;

//       //country 2 (neighbour)
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       );
//     })
//     .then((responce) => responce.json())
//     .then((data) => rendorCountry(data, "neighbour"));
// };

// getCountry("bharat");

////////////////////////////////////
// const getCountry = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(
//       (response) => {
//         if (!response.ok)
//           throw new Error(`country not found ${response.status}`);
//         return response.json();
//       } // , error=>alert(error)
//     )
//     .then((data) => {
//       rendorCountry(data[0]);
//       //   const neighbour = data[0].borders?.[0];
//       const neighbour = "jgvvwejgg";
//       if (!neighbour) return;

//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       );
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error(`country not found ${response.status}`);

//       return response.json();
//     })
//     .then((data) => rendorCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err} 🎇🎇🎇`);
//       renderError(`something went wrong 🎇🎇 ${err.message} try again`);
//     })
//     .finally(() => {
//       //countriesContainer.style.opacity = 1;
//     });
// };

const getJson = function (url, errorMsg = "something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

//? implement same with making a new getJson function()

const getCountry = function (country) {
  getJson(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    "country not found"
  )
    .then((data) => {
      rendorCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      // const neighbour = "jgvvwejgg";
      if (!neighbour) throw new Error("No neighbour found");

      return getJson(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
        "neighbour country not found"
      );
    })
    .then((data) => rendorCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 🎇🎇🎇`);
      renderError(`something went wrong 🎇🎇 ${err.message} try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountry("bharat");
});

// getCountry("australia")

//!asyncronous javaScript behaviour
// console.log("Task start");
// setTimeout(() => console.log("0 second timer"), 0)
// Promise.resolve("resolved promise 1").then(res => console.log(res));
// console.log("Task end");

//output in this manner
/*
    Task start
    Task end
    resolved promise 1
    0 second timer
    
*/

//! NOTE --> if microqueue is taking more time than setTimeout has to wait more than its input time means in above timeout function we give 0 second as default time but in case if microtask queue take more time than callback queue has to wait so indeed settimeout has to wait.

// console.log("Task start");
// setTimeout(() => console.log("0 second timer"), 0)
// Promise.resolve("resolved promise 1").then(res => console.log(res));
// Promise.resolve("resolved promise 2").then(res => {
//     for (let i = 0; i < 10000000000; i++) { }
//     console.log(res)
// });
// console.log("Task end");

//! so here this will console timeout after long time because microtask take more time.

// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log("lottery draw is happening");

//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve("you win 💸");
//         } else {
//             reject(new Error("you lost money 💩"));
//         }
//     }, 2000);
// });

// lotteryPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

//!promisifying settimeout
// const wait = function (seconds) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// wait(2)
//     .then(() => {
//         console.log("1 seconds passed");
//         return wait(1);
//     })
//     .then(() => {
//         console.log("2 seconds passed");
//         return wait(1);
//     })
//     .then(() => {
//         console.log("3 seconds passed");
//         return wait(1)
//     })
//     .then(() => {
//         console.log("4 seconds passed");
//     });

//! without above syntax we used to write this for the same.
// setTimeout(() => {
//   console.log("1 seconds");
//   setTimeout(() => {
//     console.log("2 seconds");
//     setTimeout(() => {
//       console.log("3 seconds");
//       setTimeout(() => {
//         console.log("4 seconds");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise.resolve("abc").then(x => console.log(x));
// Promise.resolve(new Error("problem")).then(x => console.error(x));

// navigator.geolocation.getCurrentPosition(
//   (position) => {
//     console.log(position);
//     // const {coords} = position;
//     // // const {latitude,longitude} = coords;
//     // const {latitude,longitude} = position.coords;
//     // console.log(latitude,longitude)

//   },
//   (err) => console.error(err)
// );

// console.log("getting position");

//! get position
// const getposition = function(){
//     return new Promise(function(resolve, reject){
//         // navigator.geolocation.getCurrentPosition(
//         //  position => resolve(position),
//         //  err => reject(err)
//         // );

//         //? we can do this
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// }

// getposition().then(pos=>console.log(pos));

// fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(
//       (response) => {
//         if (!response.ok)
//           throw new Error(`country not found ${response.status}`);
//         return response.json();
//       } // , error=>alert(error)
//     )
//     .then((data) => {
//       rendorCountry(data[0]);

//! async await

const getposition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = async function () {
//   //Geolocation
//   const pos = await getposition();
//   const { latitude: lat, longitude: lng } = pos.coords;

//   //reverse Geocoding
//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=101412573570974e15634372x21694`);

//   const dataGeo = await resGeo.json();

//   //country data
//   const res = await fetch(
//     `https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`
//   );

//   const data = await res.json();
//   rendorCountry(data[1]);
// };

// whereAmI();
// console.log("First");

////////////////////////////////////////////

/*
//? now catching error in async await with try catch block
const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getposition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //reverse Geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=101412573570974e15634372x21694`
    );
    const dataGeo = await resGeo.json();

    //country data
    const res = await fetch(
      `https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`
    );

    if (!res.ok)
      throw new Error(`problem getting locating data`);

    const data = await res.json();
    rendorCountry(data[1]);

    return `you are in ${dataGeo.country}, ${dataGeo.city}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`something went wrong 💥 ${err.message}`);

    //Reject promise returned from async function 

    throw err;
  }
};



console.log("1:will get location");
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then((city) => console.log(city))
//   .catch((err) => console.error(`2: ${err.message}`, "ook"))
//   .finally(() => console.log("3: finished getting location"))


  (async function () {
    try {
      const city = await whereAmI();
      console.log(`2:${city}`)
    } catch (err) {
      console.error(`2: ${err.message}`, "ook");
    }

    console.log("3: finished getting location")

  })();

*/

//* DO API CHAINING WITH ASYNC AWAIT SYNTAX

////////////////////////////////////////////

//! running promises in parallel
//! if promise don't depandent one to another and you want to run on same time than use Promise.all()  "parallel promises"
//! Promise.all() is combinator function.


const get3Countries = async function (c1, c2, c3) {
  try {
    //? here all the request run one after other
    /*
      1-----
            2-----
                  3-----
    */

    // const [data1] = await getJson(`https://countries-api-836d.onrender.com/countries/name/${c1}`);

    // const [data2] = await getJson(`https://countries-api-836d.onrender.com/countries/name/${c2}`);

    // const [data3] = await getJson(`https://countries-api-836d.onrender.com/countries/name/${c3}`);

    //? here all the promise run on the same time
    /*
      1-----
      2-----
      3------
    */

    const data = await Promise.all([
      getJson(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
      getJson(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
      getJson(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
    ]);

    //? if 1 promise reject then all promise.all rejected.

    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries("portugal", "canada", "tanzania");








