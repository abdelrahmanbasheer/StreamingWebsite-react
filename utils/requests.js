const API_KEY="3a37fda9c777a4585a7e9b0d4c083533"
export default{
    fetchTrending:{
        title:"Trending",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/movie/top_rated?api_key=${API_KEY}&with_genres=28`
    },
    fetchActionMovies:{
        title:"Action",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedyMovies:{
        title:"Comedy",
       url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies:{
        title:"Horror",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies:{
        title:"Romance",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery:{
        title:"Mystery",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi:{
        title:"Sci-Fi",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern:{
        title:"Western",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation:{
        title:"Animation",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTV:{
        title:"TV Movie",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
    fetchPG:{
        title:"PG",
        url:`/discover/movie?api_key=${API_KEY}&include_adult=false`
    },
  
   
}