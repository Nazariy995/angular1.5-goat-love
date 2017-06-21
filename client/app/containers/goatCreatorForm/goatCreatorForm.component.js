import template from './goatCreatorForm.html';
import controller from './goatCreatorForm.controller';
import './goatCreatorForm.scss';

let goatCreatorFormComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default goatCreatorFormComponent;
