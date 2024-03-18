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

repositoryTotal.createActivity(1,"Escuchar musica","Me gusta mucho, es divertido y me distrae","https://caracoltv.brightspotcdn.com/dims4/default/108bce9/2147483647/strip/true/crop/2858x1568+0+0/resize/1000x549!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F31%2Fbe%2F20c2de8148e69ab2b6f9cc606a27%2Fcaptura-de-pantalla-2023-09-13-a-las-4.11.15%20p.m..png")

repositoryTotal.createActivity(2,"leer","leer diferentes historias y libros que me agraden","https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/leer-cuidar-vista_2.jpg.webp?itok=__V7FWb7")

repositoryTotal.createActivity(3,"Ver series","Es una gran opcion para pasar el rato","https://elcomercio.pe/resizer/iyDU1wJAStBdPR5MeqDI2FPlrc4=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KW3TKPYU5JCVPDPKJ4XDGIZXSU.jpg")

repositoryTotal.getAllActivities();

repositoryTotal.deleteActivity(1)



