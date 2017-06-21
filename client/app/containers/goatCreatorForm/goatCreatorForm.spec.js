import GoatCreatorFormModule from './goatCreatorForm'
import GoatCreatorFormController from './goatCreatorForm.controller';
import GoatCreatorFormComponent from './goatCreatorForm.component';
import GoatCreatorFormTemplate from './goatCreatorForm.html';

describe('GoatCreatorForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GoatCreatorFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GoatCreatorFormController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(GoatCreatorFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GoatCreatorFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GoatCreatorFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GoatCreatorFormController);
      });
  });
});
