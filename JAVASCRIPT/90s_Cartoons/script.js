const mainDiv = document.getElementById("cartoon");
const Cartoons = [
    { "name": "Johny Bravo",
      "year": "1997-2004",
      "creator": "Van Partible",
      "url": "https://m.media-amazon.com/images/M/MV5BODI4NzdkMDQtNWRiMC00NjYxLWFhNmEtYjNkMzlmYjk2MjI3XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_QL75_UX100_CR0,1,100,148_.jpg" ,
      "Rating": "7.2/10"},
    
    { "name": "Teenage Mutant Ninja Turtles",
      "year": "1987-1996",
      "creator": "Kevin Eastman and Peter Laird",
      "url":"https://m.media-amazon.com/images/M/MV5BMTkwNWY2YmEtZDBjOC00Y2U4LTkyODUtMmZhZGJkMWUxMDlhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UY148_CR2,0,100,148_.jpg",
      "Rating": "7.9/10"},
    
    { "name": "Batman: The Animated Series",
      "year": "1992-1995",
      "creator": "Bruce Timm and Eric Radomski",
      "url": "https://m.media-amazon.com/images/M/MV5BYTc5NGZhNjktOTVhNi00NzBmLTk1MTgtMjEzNDI0OWYxYWVlXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_QL75_UX100_CR0,2,100,148_.jpg" ,
      "Rating": "9/10"},
    
    { "name": "Powerpuff Girls",
      "year": "1998-2004",
      "creator": "Craig McCracken",
      "url": "https://m.media-amazon.com/images/M/MV5BYjM4YmFkOTItMDY1ZS00YzdkLWFhODgtNzZjNGIwZDAwNzlkXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_QL75_UX100_CR0,1,100,148_.jpg" ,
      "Rating": "7.3/10"},
    
    { "name": "Recess",
      "year": "1997-2001",
      "creator": "Paul Germain and Joe Ansolabehere",
      "url": "https://m.media-amazon.com/images/M/MV5BMThkNmIxNzAtM2Q3OC00ZjIxLWE1MjMtZjQxODRhZjU5ZTFkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_QL75_UY213_CR1,0,144,213_.jpg" ,
      "Rating": "7.8/10"},
    
    { "name": "Dexter's Laboratory",
      "year": "1996-2003",
      "creator": "Genndy Tartakovsky",
      "url":"https://m.media-amazon.com/images/M/MV5BMTM1NWMzNzMtMzlhZi00ZDBhLWFkODktZjlhZDczMDM2NGE0XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_QL75_UX100_CR0,1,100,148_.jpg" ,
      "Rating": "7.9/10"},
    
    { "name": "Courage the cowardly Dog",
      "year": "1999-2002",
      "creator": "John Dilworth",
      "url":"https://m.media-amazon.com/images/M/MV5BMTU4MGEyNTItNzg5ZS00ZGU0LTk4NmEtODM0Y2UxYTY2YTUyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UY148_CR1,0,100,148_.jpg" ,
      "Rating": "8.3/10"},
    
    { "name": "The Scooby-Doo Show",
      "year": "1969-1978",
      "creator": "Joe Ruby and Ken Spears",
      "url":"https://m.media-amazon.com/images/M/MV5BN2EyMmIyMWItZTRiYy00MmE1LTkyOTAtMTliMzYwZGJlYmFjXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_QL75_UX100_CR0,1,100,148_.jpg",
      "Rating": "7.9/10"},
    
    { "name": "Looney Tunes",
      "year": "2019-2023",
      "creator": "Leon Schlesinger and Hugh Harman",
      "url": "https://m.media-amazon.com/images/M/MV5BYzAxZjQ2ZDItYThlZi00NWU5LWEzM2ItMWYxMzc2ODZlNjMzXkEyXkFqcGdeQXVyMTYwODE3NTA3._V1_QL75_UY148_CR3,0,100,148_.jpg" ,
      "Rating": "8/10"},
    
    { "name": "Tom & Jerry",
      "year": "2011-2022",
      "creator": "William Hanna and Joseph Barbera",
      "url": "https://m.media-amazon.com/images/M/MV5BNGEzMDU2ZjQtN2NlNC00YjQ0LWJjZmYtY2RkZDFlZjRmNmJhXkEyXkFqcGdeQXVyMTYwODE3NTA3._V1_QL75_UX100_CR0,1,100,148_.jpg" ,
      "Rating": "7.1/10"},
    
    { "name": "The Flintstones",
      "year": "1960-1966",
      "creator": "William Hanna",
      "url":"https://m.media-amazon.com/images/M/MV5BZmYxZjE2MDYtYTQ2OC00NmUwLTkzNDEtNjFkZmEyM2E5ODBmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UY148_CR6,0,100,148_.jpg",
      "Rating": "7.5/10"},
    
    { "name": "The Popeye Show",
      "year": "1960-1962",
      "creator": "E.C.Segar",
      "url": "https://m.media-amazon.com/images/M/MV5BNGY1YjJlMjMtY2Y5OC00MWU1LWI2ODAtNGU2NGNmYjJlOTk3XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_QL75_UY148_CR25,0,100,148_.jpg",
      "Rating": "7.6/10"},
    
    { "name": "The Road Runner Show",
      "year": "1966-1973",
      "creator": "Chuck Jones",
      "url": "https://m.media-amazon.com/images/M/MV5BYzRkYWU2ZTUtOWZiYy00ZGRkLTkxOTgtODg5ZTEzNGM3ZDdmXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_QL75_UX100_CR0,1,100,148_.jpg",
      "Rating": "7.9/10"},
    
    { "name": "Pokemon",
      "year": "1997-2023",
      "creator": "Satoshi Tajiri",
      "url": "https://m.media-amazon.com/images/M/MV5BNDcwZDc2NTEtMzU0Ni00YTQyLWIyYTQtNTI3YjM0MzhmMmI4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_QL75_UX100_CR0,1,100,148_.jpg",
      "Rating": "7.5/10"},
    
    { "name": "SpongeBob Squarepants",
      "year": "1999",
      "creator": "Stephen Hillenburg",
      "url": "https://m.media-amazon.com/images/M/MV5BNTk2NzEyNTQtZTQ5MS00MjAyLTgzMDMtNDNkYTBkM2M2OTU3XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_QL75_UY148_CR0,0,100,148_.jpg",
      "Rating": "8.2/10"},
    
    { "name": "Pingu",
      "year": "1980-2006",
      "creator": "Otmar Gutmann",
      "url": "https://m.media-amazon.com/images/M/MV5BNWYzZjZiNTEtODU1MC00NGM4LWI4ZmEtNjgzYTA1OWM3NzIyXkEyXkFqcGdeQXVyMTQ4NTcxNTI0._V1_QL75_UY148_CR1,0,100,148_.jpg",
      "Rating": "7.4/10"},
    
    { "name": "Timon & Pumba",
      "year": "1995-1999",
      "creator": "Tony Bancroft",
      "url": "https://m.media-amazon.com/images/M/MV5BYmJlY2ZhOGQtZmUxOS00ZGMwLTkzYzUtNzk0MDExODE5NTM0XkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_QL75_UX100_CR0,1,100,148_.jpg",
      "Rating": "7/10"},
    
    { "name": "Aladdin",
      "year": "1994-1995",
      "creator": "Antoine Galland",
      "url": "https://m.media-amazon.com/images/M/MV5BOTIzZDBlYmItMWZjYy00MTI3LTkyYmMtODc5MzJjOGUxN2EzXkEyXkFqcGdeQXVyODgyODIzNDc@._V1_QL75_UX100_CR0,9,100,148_.jpg",
      "Rating": "7.3/10"},
    
    { "name": "The New Adventures of Winnie The Pooh",
      "year": "1988-1991",
      "creator": "A.A.Milne and E.H.Shepard",
      "url": "https://m.media-amazon.com/images/M/MV5BZjFkZDkwYjktMmZkNi00ZTVkLWI5ZmItZWI2MmI1NjQ1Y2U0XkEyXkFqcGdeQXVyOTg4MDk3MTQ@._V1_QL75_UX100_CR0,1,100,148_.jpg",
      "Rating": "7.6/10"},
    
    { "name": "Mr Bean : The Animated Series",
      "year": "2022",
      "creator": "Rowan Atkinson and Richard Curtis",
      "url": "https://m.media-amazon.com/images/M/MV5BMTY2NGRlZTgtZWU1ZC00NzhkLTgyMmYtYTQyZDgzYmE0ZmYzXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_QL75_UX100_CR0,1,100,148_.jpg",
      "Rating": "6.8/10"},
    
    { "name": "The Smurfs",
      "year": "1981-1989",
      "creator": "Peyo",
      "url": "https://m.media-amazon.com/images/M/MV5BZDE3YjY5MzEtYzJlYS00ZjgyLWIzYWUtZmU4Mjk4Y2JhOTQwXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_QL75_UY148_CR1,0,100,148_.jpg",
      "Rating": "7.1/10"},
    
    { "name": "The Pink Panther",
      "year": "2006",
      "creator": "Blake Edwards",
      "url": "https://m.media-amazon.com/images/M/MV5BZDI2NmJmMjEtNTY2Zi00OTJhLTkyOTItZmM1MDIyOTIyYmE5XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_QL75_UX100_CR0,1,100,148_.jpg",
      "Rating": "5.7/10"}
    ]
   Cartoons.forEach(function(cartoon){
    console.log(cartoon);
    let cartDiv = document.createElement('div');

    const image = document.createElement('img');
    image.src=cartoon.url;
    cartDiv.appendChild( image);
    image.height = "215";
    image.width = "150";

    const name = document.createElement('h2');
    name.textContent=cartoon.name;
    cartDiv.appendChild( name);
    name.style.color = "black";
    
    
    const creator = document.createElement('h3');
    creator.textContent= "Creator:  " + cartoon.creator;
    cartDiv.appendChild( creator);
    creator.style.color = "white";
    creator.style.fontFamily = "ariel"
   
    const year = document.createElement('h4');
    year.textContent=cartoon.year;
    cartDiv.appendChild( year);
    year.style.color = "white";

    cartDiv.classList.add('cartlist')
    mainDiv.appendChild(cartDiv);
   }) 
    
    