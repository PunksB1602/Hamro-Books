
searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}




/* profile dropdown toggle*/
document.querySelector('#login-btn').addEventListener('click', function() {
  document.querySelector('.profile-dropdown-container').classList.toggle('active');
});

document.addEventListener('click', function(event) {
  const dropdownContainer = document.querySelector('.profile-dropdown-container');
  const isClickInside = dropdownContainer.contains(event.target);
  
  if (!isClickInside && event.target.id !== 'login-btn') {
      dropdownContainer.classList.remove('active');
  }
});


