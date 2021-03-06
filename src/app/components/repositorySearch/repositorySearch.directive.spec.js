describe('directive repositorySearch', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(($compile, $rootScope) => {

    element = angular.element(`
      <repository-search></repository-search>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instanciate members', () => {
    expect(vm).toEqual(jasmine.any(Object));
  });
});
