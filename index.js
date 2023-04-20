// class Pile{    
//     #items
//     constructor(){
//         this.#items=[]
//     }
//      push(element){
//         this.#items.push(element);
//      }
//      getItems(){
//         return this.#items;
//      }
//      pop(){
//         this.#items.pop();
//      }apprenant
// }

// class File{
//     #items
//     constructor(){
//         this.#items=[]
//     }
//      push(element){
//         return this.#items.unshift(element);
//      }

//      getItems(){
//         return this.#items;apprenant
//      }
//      pop(){
//         return this.#items.pop();
//      }
// }
// let maPile= new File();
// console.log(maPile.getItems());
// maPile.push("debora");
// console.log(maPile.getItems());
// maPile.push("sele");
// console.log(maPile.getItems());
// maPile.pop();
// console.log(maPile.getItems());
// // maPile.#items.shift()
// maPile.push("eveline");
// console.log(maPile.getItems());
// maPile.push("romain");
// console.log(maPile.getItems());


// const apprenant=["heritier", "debora","ketsia","romain"];
// for(const pass of apprenant){
//       console.log('apprenant' +' : '+pass);
//    }

// const somme=0;

// function Moyenne(tableau){
//    let sum=0;
//    for(let tab of tableau){
//          sum+= tab
//    }
// return sum;
// }

// function Moyenne(tableau){
//    let sum=0;
//    let taille=tableau.length;
//    for(let i in tableau){
//         ( sum+= tableau[i])
//    }

// return sum/taille;
// }

// const monTable=[2,3,4,5];

// console.log(Moyenne(monTable));

// class BankCompte{
//    constructor(nom,balance){
//       this.nom=nom;
//       this.balance=balance;
//    }
//    ShowNom() {
//       console.log('votre nom est :'+ this.nom);
//    }
//    ShwoBalance(){
//       console.log('votre balance est :'+ this.balance+'$');
//    }
//    depot(montant){
//       this.balance+=montant;
//       this.ShwoBalance();
//       console.log('vous avez fait un depot de :'+' '+ montant +'le new balance est :'+this.balance);
      
//    }
//    retrait(montant){
//       if(montant>this.balance){
//          console.log('solde insuffisant');
//       }
//       else {
//          this.balance-=montant
//          console.log('vous avez retirez'+':'+ montant);
//       }
//    }
   
// };

// const MyCompte=new BankCompte('Joe',20000);
// console.log(MyCompte.balance);
// console.log(MyCompte.ShowNom());
// console.log(MyCompte.depot(10000));
// console.log(MyCompte.ShwoBalance());
// console.log(MyCompte.retrait(500));
// console.log(MyCompte.ShwoBalance());

// methode static  

// class SendMessage{

//    static sayHello(){
//       console.log('hello KDA');
//    }
//    static helloTo(nom){
//       console.log('hello '+':'+nom);
//    }
// }

// const jambo=SendMessage.helloTo("joe")
// console.log(jambo);

// const words='je suis à la formation';
// const word= words.trim();
// console.log(word);
// console.log('ton mot contient :',word.split("").join("").length,'lettres');


// function year(entier){
//    console.log(entier+' '+'Ans');
//    console.log(entier+'ans'+'comprend'+ entier*12 +'mois');
// }

// const years=year(1);
// console.log(years);

// const champ=[2,6,8,9,0];

// for (const i in champ){
      
// if(champ[i]===0){
//    console.log('element à la position'+i+' '+'est'+0);
//    return true;
// }
// else{
//    console.log('erreur');
// }
// }

// function facto(number){
//     if(number<=1){
//       return 1;
//     }
//     else {
//        return (number*(facto(number-1)));
//     }   
// }


// const factorielle=facto(6);
// console.log('factorielle est '+factorielle);

// class ForetDense {
//   static minimumRainFall = 60;
// }

// let congo = ForetDense.minimumRainFall=80;
// console.log(congo);


// const nameArray=['totos' ,'jean','papyes'];
// const firstName=nameArray[0];
// const secondName=nameArray[1];
// const organize=nameArray.filter((e)=>{
//   return e.length <=4;
// })
// console.log(nameArray[0].length);

// console.log(organize);

// // const noms='toto';
// // console.log(Array.from(noms));

// // console.log(Math.floor(3%2)); 

// const phrase= 'mon \'ecole\'';
// console.log(phrase);


const sum=(...numbers)=>{
    let additional=0;
    let i=0;
    for(i of numbers){
        additional+=i;
    }
    return additional;
}
console.log(sum(1,2));

// desturation 

const user={name:'jean', age:26};
const{name,age}=user;

