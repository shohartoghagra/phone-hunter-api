const loadPhone = async(searchText, isShowAll)=>{
const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
const data=await res.json();
const phones=data.data;
console.log(phones);
phoneDisplay(phones,isShowAll);

}

const phoneDisplay=(phones,isShowAll)=>{
const phoneContainer=document.getElementById('phone-container');
phoneContainer.innerText='';

const showContainer=document.getElementById('show-container');
if(phones.length>12 && !isShowAll){
  showContainer.classList.remove('hidden');
}else{
  showContainer.classList.add("hidden");
}
// phoneDisplay first only 12 not show all
if(!isShowAll){
  phones=phones.slice(0,12);
}

phones.forEach(phone => {
console.log(phone);
const phoneCard=document.createElement('div');
phoneCard.classList=`card py-3  bg-gray-400 shadow-xl gap-4`;
phoneCard.innerHTML=`
<figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button onclick="showDetails ()" class="btn btn-primary">Show Details</button>
          </div>
        </div>`;
phoneContainer.appendChild(phoneCard);

});
toggleSpinner(false);
toggleSpinner(false);

}

// show details button
const showDetails =()=>{
  console.log("is click");
  };

// search handle button
const searchHandle=(isShowAll)=>{
const searchField=document.getElementById('search-field');
toggleSpinner( true);
const searchText=searchField.value;

loadPhone(searchText,isShowAll)

}
const searchHandle2=()=>{
  const searchField2=document.getElementById('search-field2');
  toggleSpinner(true);
  const searchText2=searchField2.value;
  loadPhone(searchText2)
}

const toggleSpinner=(isLoading)=>{
  const loadingSpinner=document.getElementById('loading-spinner');
  
if(isLoading){
  loadingSpinner.classList.remove('hidden');
}else{
loadingSpinner.classList.add('hidden');

}
};


const handleShowAll=()=>{
searchHandle(true);

}

// loadPhone();