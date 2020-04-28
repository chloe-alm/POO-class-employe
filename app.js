const myFormulaire= document.getElementById('le_formulaire');

function getInputs(event){
    event.preventDefault();
    LeMatricule
}
class Employe {
    constructor(matricule, nom, prénom, dateNaissance, dateEmbauche, salaire){
        this.matricule= matricule;
        this.nom=nom;
        this.prenom=prénom;
        this.dateNaissance =dateNaissance;
        this.dateEmbauche=dateEmbauche;
        this.salaire=salaire;
       
    }
get Age(){
    var diff = Date.now()= new Date(this.dateNaissance).getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear()-1970);
}
get Anciennete(){
    var diff = Date.now() - new Date(this.dateEmbauche).getTime();
    var embauche = new Date(diff);
    return Math.abs(embauche.getUTCFullYear()-1970);
}
AugmenterSalaireByAncienne(){
    if (this.Anciennete <5){
        return this.salaire * 1.02;

    }else if (this.Anciennete < 10){
        return this.salaire * 1.05;
    }else {
        return this.salaire *1.1;
    }
}
AfficherEmploye(){
    var NOM = this.nom.toUpperCase();
    console.log(NOM)
    var Prenom = this.prenom.slice(0,1).toUpperCase() + this.prenom.slice(1)
    console.log(Prenom)
    return`Matricule: ${this.matricule}
    Nom complet : ${this.NOM}  ${this.Prenom} 
    Ancienneté : ${this.Anciennete} ans
    Salaire : ${this.AugmenterSalaireByAncienne()} €`;

}

}
let salarie = new Employe(123,"dar","chloé",1987,2019,2000);
console.log(salarie.AfficherEmploye());



