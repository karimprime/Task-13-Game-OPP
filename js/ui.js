export class Ui {

  disPlayCatogery(data) {
    let cart = ''
    for (let i = 0; i < data.length; i++) {
      cart += ` 
        <div class="col-md-6 col-lg-4 col-xl-3 d-flex flex-column"">
                   <div class="card flex-grow-1" id='${data[i].id}'>
                       <img src="${data[i].thumbnail}" class="card-img-top " alt=${data[i].title}>
                       <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                           <h5 class="card-title text-white">${data[i].title}</h5>
                           <a href="#" class="btn text-white">free</a>
                        </div>
                         <p class="card-text opacity-50 text-white text-center">${data[i].short_description.split(" ").slice(0, 8).join(",")}</p>
                        
                       </div>
                       <div class="card-footer d-flex justify-content-between">
                           <span class="text-white rounded">${data[i].genre}</span>
                           <span class="text-white rounded">${data[i].platform}</span>
                       </div>
                     </div>
                

               </div>       
               `
    }

    document.getElementById("rowCatogery").innerHTML = cart
  }

  displayDetails(data) {
    let cursolItems = ''
    for (let i = 0; i < data.screenshots.length; i++) {
      cursolItems += ` <div class="carousel-item ${i === 0 ? 'active' : ""}">
                <img src="${data?.screenshots[i]?.image}" class="d-block w-100" alt="screen${i + 1}">
              </div>`

    }

    let details = `
 <div class="col-md-4">
      <div class="detail-img">
        <img src="${data.thumbnail}" alt="${data.title}" class="w-100">
      </div>
    </div>
    <div class="col-md-8">
      <div class="game-details text-white">
        <h3 >Title: ${data.title}</h3>
        <p class="text-white">Category: <span class="badge text-bg-info">${data.genre}</span></p>
        <p class="text-white">Platform: <span class="badge text-bg-info">${data.platform}</span></p>
        <p class="text-white">Status: <span class="badge text-bg-info">${data.status}</span></p>
        <p class="text-white desc">
         ${data.description}
        </p>
        <a class="btn btn-outline-warning text-capitalize text-white" href="${data.game_url}" target="_blank">show game</a>
      </div>
    </div>
<div class="col-md-8 m-auto py-4">
    
      <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner" >
    ${cursolItems}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
  <i class="fa-solid fa-circle-chevron-left"></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <i class="fa-solid fa-circle-chevron-right"></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

</div>
    `
    document.getElementById("datailsData").innerHTML = details
  }
}