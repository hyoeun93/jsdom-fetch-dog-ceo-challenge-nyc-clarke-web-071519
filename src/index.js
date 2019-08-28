//iterate through fetched and append each to <ing src=></a> tag.
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(data => {
    // Object.keys(data).forEach((key) => {
        
        let lists = data.message;
        // console.log('list', data.message);
        
        lists.forEach((list) => {
        let div = document.querySelector("div#dog-image-container");
        let img = document.createElement("img");
        img.setAttribute("src", list);
        div.appendChild(img);
         })
    // })
});

dogs = []

document.addEventListener('DOMContentLoaded',function() {

    let breedlist = fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
            let breeds = data.message;
            dogs.push(data)
            // console.log('breeds', data.message);
            for(const key in breeds) {
                let ul = document.querySelector('#dog-breeds')
                let li = document.createElement('li');
                li.innerHTML = key;
                ul.appendChild(li);
                
            }
            
    })
//---------------------------------------------------------------------------------------------
    const ul = document.querySelector('#dog-breeds')
    ul.addEventListener('click', function(e) {
        if(e.target.tagName === 'LI') {
            e.target.style.color ='red'; 
        }
    })
//---------------------------------------------------------------------------------------------    
    const dropdown = document.querySelector('#breed-dropdown');
    dropdown.addEventListener('change', filtering)

    function filtering(e) {
        let ul = document.querySelector('#dog-breeds')
        ul.innerHTML = `` //empty the list before filtering
        let allDogs = dogs[0].message
        // selectedDogs = dogs[0].message.map( dog => {
        //     console.log(dog)
        //     // if(dog.charAt(0) === e.target.value)
        // })
        for(const key in allDogs) {
            if (key.charAt(0) === e.target.value) {
                let li = document.createElement('li');
                li.innerHTML = key;
                ul.appendChild(li);
            }
        }
    }

})

