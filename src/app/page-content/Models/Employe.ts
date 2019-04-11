export class Employe {

public  id:string ;
public  Nom :string;
public Prenom :string;
  public Age :number;
  public Salary:number;
public  email:string;

    constructor( ){
 
    }


     
 public   generateId(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var possible2="123456789";
    var text2="";
    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      for (var i = 0; i < 2; i++)
      text2 += possible2.charAt(Math.floor(Math.random() * possible2.length));
  

     let a= text+text2;
     this.id=a;
 
 }
 public  Getemail():string{
        return this.email;
    }
 public  GetNom():string{
     return this.Nom;
 }

 public GetPrenom():string{
     return this.Prenom
 }

 public getAge():number {
     return this.Age;
 }


 public getSalary():number{
     return this.Salary;
 }

 public getid(){
     return this.id;
 }

 public setNom(Nom:string){
     this.Nom=Nom;
 }

 public setPrenom(Prenom:string){
     this.Prenom=Prenom;
 }

 public setAge(Age:number){
     this.Age=Age;
 }
 public setemail(email:string){
     this.email=email
 }
 public setSalary(salary:number){
     this.Salary=salary;
 }
public setid(id:string){
    this.id=id;
}
public clone(emp:Employe){
    this.Age=emp.Age;
    this.email=emp.email;
    this.id=emp.id;
    this.Nom=emp.Nom;
    this.Prenom=emp.Prenom
    this.Salary=emp.Salary

}






}