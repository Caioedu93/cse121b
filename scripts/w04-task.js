/* LESSON 3 - Programming Tasks */

/* Profile Object  */     
let myProfile = {
    name: "Caio Eduardo",
    photo: "images/me.jpg", 
    favoriteFoods: [
        'Lasangna',
        'Pizza',
        'Hamburguer',
        'Roast Beef',
        'Lemon Pie'
    ],
    hobbies: [
        'play games',
        'listen to music',
        'watch movies in family'
    ], 
    placesLived: []
  };



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: 'São Paulo, SP',
    length: '25 years'
  }, {
    place: 'Salvador,BA',
    length: '6 months'
  },{ 
    place: 'Feira de Santana, BA',
    length: '8 months'
  }, {
    place: 'Embu Guaçu,SP',
    length: '3 years'
});


/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

/* Name */
document.querySelector('#photo').alt = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    
    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
