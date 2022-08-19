const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
var movieName;
var moviePrice;

function getMovie(movie, price) {
  movieName = movie;
  moviePrice = price;
}

console.log('movie' + moviePrice);
//document.getElementById('movie-title').innerHTML = movieName;
//const moviePrice = document.getElementById('BulletTrain');
//const ticketPrice = moviePrice;
const ticketPrice = +moviePrice;
populateUI();

//let ticketPrice = +moviePrice.value;

function updateSelectedCount() {
  
  const selectedSeatsPremium = document.querySelectorAll('.row.P .seat.selected');
  const selectedSeatsExclusive = document.querySelectorAll('.row.E .seat.selected');
  const selectedSeatsNormal = document.querySelectorAll('.row.N .seat.selected');

  const seatsIndexPremium = [...selectedSeatsPremium].map(function(seat) {
    return [...seats].indexOf(seat);
  });

  const seatsIndexExclusive = [...selectedSeatsExclusive].map(function(seat) {
    return [...seats].indexOf(seat);
  });

  const seatsIndexNormal = [...selectedSeatsNormal].map(function(seat) {
    return [...seats].indexOf(seat);
  });

  localStorage.setItem('selectedSeatsPremium', JSON.stringify(seatsIndexPremium));
  localStorage.setItem('selectedSeatsExclusive', JSON.stringify(seatsIndexExclusive));
  localStorage.setItem('selectedSeatsNormal', JSON.stringify(seatsIndexNormal));

  const selectedSeatsCountPremium = selectedSeatsPremium.length;
  const selectedSeatsCountExclusive = selectedSeatsExclusive.length;
  const selectedSeatsCountNormal = selectedSeatsNormal.length;

  count.innerText = selectedSeatsCountPremium + selectedSeatsCountExclusive + selectedSeatsCountNormal;
  total.innerText = selectedSeatsCountPremium * (ticketPrice+200) + selectedSeatsCountExclusive * (ticketPrice+100) + selectedSeatsCountNormal * ticketPrice;
}

function populateUI() {
  const selectedSeatsPremium = JSON.parse(localStorage.getItem('selectedSeatsPremium'));
  const selectedSeatsExclusive = JSON.parse(localStorage.getItem('selectedSeatsExclusive'));
  const selectedSeatsNormal = JSON.parse(localStorage.getItem('selectedSeatsNormal'));

  if(selectedSeatsPremium !== null && selectedSeatsPremium.length > 0) {
    seats.forEach((seat, index) => {
      if(selectedSeatsPremium.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  if(selectedSeatsExclusive !== null && selectedSeatsExclusive.length > 0) {
    seats.forEach((seat, index) => {
      if(selectedSeatsExclusive.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  if(selectedSeatsNormal !== null && selectedSeatsNormal.length > 0) {
    seats.forEach((seat, index) => {
      if(selectedSeatsNormal.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
}

container.addEventListener('click', (e) => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
  }

  updateSelectedCount();
})

updateSelectedCount();