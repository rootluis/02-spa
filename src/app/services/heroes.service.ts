import { Injectable } from "@angular/core";

@Injectable()
export class HeroesService{

    constructor(){
        console.log("Servicio listo para usar...!!!");
    }

    getHeroes():Heroe[]{
        return this.arrHeroes;
    }

    getHeroe( idx:string ){
      let heroeResult;
      for (let heroeGet of this.arrHeroes) {
                if (heroeGet.id == idx) {
                  heroeResult=heroeGet;
                }
      }
      return heroeResult;
    }

    buscarHeroes(termino:string):Heroe[]{
      //Declaramos la variable que devolvera el valor esperado por la funcion
      let heroesArr:Heroe[] = [];

      // Todo valor enviado a la funcion la debemos de pasar a minuscula, esto para asegurar que el valor coincida con el valor de la meta de arrHeroes
      console.log("Este es el valor de termino para pasar a toLowerCase " + termino);
      termino = termino.toLowerCase();

      // Definimos una nueva variable para poder recuperar el valor del arreglo arrHeroes, para ello utilizamos el ciclo for, en el cual ya define la variable 
      // al mismo tiempo que se define el for
      for(let heroeX of this.arrHeroes){

        // Definimos una nueva variable para recuperar el nombre del arreglo arrHeroes, esto para pasarlo a minuscula y poder realizar la validacion
        let nombreX = heroeX.nombre.toLowerCase();

        // Validamos si el nombreX es localizado Vs el termino enviado a la funcion
        if(nombreX.indexOf(termino) >=0){
          // Si si se encuentra el nombre en termino (hay algun nombre de Heroe que contenga termino), lo agregamos al arreglo
          heroesArr.push(heroeX);
        }
      }

      return heroesArr;
    }

    private arrHeroes:Heroe[]=[
        {
          id: "0001",
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          id: "0002",
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          id: "0003",
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          id: "0004",
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          id: "0005",
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          id: "0006",
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          id: "0007",
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];
}

export interface Heroe{
    id:string,
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;            
};