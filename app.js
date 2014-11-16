/*global angular */
'use strict';

/**
 * The main app module
 * @name app
 * @type {angular.Module}
 */
var lightApp = angular.module('lightApp', ['angular-underscore/filters', 'schemaForm', 'pascalprecht.translate', 'ui.select', 'ui.sortable'])
.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($controllerProvider, $compileProvider, $filterProvider, $provide) {

    // Notice that the registration methods on the
    // module are now being overridden by their provider equivalents

    lightApp.controller = $controllerProvider.register;
    lightApp.directive  = $compileProvider.directive;
    lightApp.filter     = $filterProvider.register;
    lightApp.factory    = $provide.factory;
    lightApp.service    = $provide.service;

}])
.controller('SelectController', function($scope){
  $scope.schema = {
    type: 'object',
    title: 'Select',
    properties: {
      multiselect: {
        title: 'Multi Select',
        type: 'array',
        format: 'uiselect',
        description: 'Multi single items arre allowd',
        minItems: 1,
        maxItems: 4,
        items: [
          { value: 'one', label: 'label1'},
          { value: 'two', label: 'label2'},
          { value: '#13:02', label: 'label3'},
          { value: 'four', label: 'label4'},
          { value: '#13:01', label: 'label5'}
        ]
      }
    },
    required: ['select', 'select2', 'another', 'multiselect']
  };
  $scope.form = [
     {
       key: 'multiselect'
      }
  ];
  $scope.model = {
    multiselect: ['#13:02', '#13:01']
  };
  $scope.submitted = function(form){
    $scope.$broadcast('schemaFormValidate')
    console.log($scope.model);
  };
});
