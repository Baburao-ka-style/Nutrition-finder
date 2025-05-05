
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be583954f5msh7fba861eae86777p122bd3jsna375da80c799',
		'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
	}
};

const food = (query)=>{
    fetch('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=' + query, options)
    .then((response) =>{ return response.json()})
    .then((data) => { console.log(data)
                    document.getElementById("foodName").innerHTML = data[0].name
                    document.getElementById("serving_value").innerHTML = data[0].serving_size_g
                    document.getElementById("calories_value").innerHTML = data[0].calories
                    document.getElementById("carbohydrates_value").innerHTML = data[0].carbohydrates_total_g
                    document.getElementById("cholesterol_value").innerHTML = data[0].cholesterol_mg
                    document.getElementById("fat_value").innerHTML = data[0].fat_total_g
                    document.getElementById("fiber_value").innerHTML = data[0].fiber_g
                    document.getElementById("protein_value").innerHTML = data[0].protein_g
                    document.getElementById("sodium_value").innerHTML = data[0].sodium_mg
                    document.getElementById("sugar_value").innerHTML = data[0].sugar_g
          
})
}
submit.addEventListener("click", (event)=>{
    event.preventDefault()
    food(query.value)
})
food("egg")