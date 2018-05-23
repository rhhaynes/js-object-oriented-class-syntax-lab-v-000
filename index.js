class BoardMember{
  constructor(name, homeState, training){
    this.name      = name;
    this.homeState = homeState;
    this.training  = training;
  }
}

class Ceo extends BoardMember {
  hireEmployee(){
    return "Welcome aboard!";
  }
}