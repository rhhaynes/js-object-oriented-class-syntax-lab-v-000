class BoardMember {
  constructor(name, homeState, training){
    this.name      = name;
    this.homeState = homeState;
    this.training  = training;
  }
  veto(){return "No, I must disagree"}
  approve(){return "You can do that!"}
  doCharity(){return "I like to help people."}
  releasePressStatement(){"You will see great things from Scuber."}
  sayHi(){}
}

class Ceo extends BoardMember {
  hireEmployee(){
    return "Welcome aboard!";
  }
}