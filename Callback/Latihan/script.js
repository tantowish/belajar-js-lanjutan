$.ajax({
    url: 'http://www.omdbapi.com/?i=tt3896198&apikey=d75c4ccc&s=avengers',
    success: response =>{
        const movies = response.Search
        let cards = ''
        movies.forEach(movie => {
            cards += `
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="${movie.Poster}" alt="">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl">${movie.Title}</div>
                    <div class="text-sm mb-2 text-slate-400">${movie.Year}</div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                        Details
                    </button>
                </div>
            </div>
            `
        });

        $('#cards-container').append(cards)
    },
    error: (e)=>{
        console.log(e.responseText)
    }
})