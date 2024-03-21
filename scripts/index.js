class Activity {
    constructor(id,title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
       
    }
}

class Repository {
    constructor (){
        this.activities = [];
    }
    createActivity (id,title,description,imgUrl){
        const newActivity = new Activity (id,title,description,imgUrl)
        this.activities.push (newActivity);
    }   
    getAllActivities(){
        return this.activities 
    }
    deleteActivity(id){
      const activitiesTotal = this.activities.filter( activity => activity.id !== id)
       return activitiesTotal;
    }
    
}
const repositoryTotal = new Repository();

function createActivity(activity) {
    const {id,title,description,imgUrl} = activity;

    const titleCard = document.createElement('h3');
    titleCard.innerHTML = title;
    titleCard.classList.add('classTitle');

    const descriptionCard = document.createElement('p');
    descriptionCard.innerHTML = description;

    const imgCard = document.createElement('img');
    imgCard.src = imgUrl;
    imgCard.classList.add('img');

    const contenedorCards = document.createElement('div');
    contenedorCards.appendChild(titleCard);
    contenedorCards.appendChild(descriptionCard);
    contenedorCards.appendChild(imgCard);
    contenedorCards.className= 'card-item';

    return contenedorCards;
}

function activitiesToHtml () {
    const activitiesToHtml = document.getElementById("div-cards") ;
    activitiesToHtml.innerHTML = '';

    const activities = repositoryTotal.getAllActivities();
    const activitiesHtml = activities.map ((activity) => createActivity(activity));

    activitiesHtml.forEach(activitiesTotal => {
        activitiesToHtml.appendChild(activitiesTotal);
    })
}

function buttonGo (){
    
  const tituloInp =  document.getElementById("Titulo");
  const descripInp = document.getElementById("descripcion");
  const imgInp = document.getElementById("imagen");

  const tituloValor = tituloInp.value ;
  const DescripcionValor = descripInp.value;
  const imgValor = imgInp.value;

  console.log("VALOR IMAGEN", imgValor);

  if (!tituloValor || !DescripcionValor || !imgValor) {
    return alert ("Se requiere la informacion completa para continuar");
  }

  repositoryTotal.createActivity('actividad',tituloValor,DescripcionValor,imgValor);
  activitiesToHtml();
}
const boton = document.getElementById("Guardar");
boton.addEventListener("click",buttonGo);

                                                                                                                                                                                                                                                                                                                 