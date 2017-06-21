class GoatsListController {
  constructor() {
    this.name = 'goatsList';
    console.log("We are in goatsList component")
  }

  $onInit(){
    console.log(this.goats);
  }
}

export default GoatsListController;
