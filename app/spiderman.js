class Spiderman{
    constructor (name, age, actor, movies, studio){
        this.name = name
        this.age = age
        this.actor = actor
        this.movies = movies
        this.studio = studio
    }

    getInfo(){
        return `Soy the ${this.name} del Estudio ${this.studio}`
    }
}

module.exports = Spiderman