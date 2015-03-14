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
      name: {
        title: 'Name',
        type: 'string'
      },
      staticselect: {
        title: 'Static Single Select',
        type: 'string',
        format: 'uiselect',
        description: 'Only single item is allowed',
        items: [
          { value: 'one', label: 'label1'},
          { value: 'two', label: 'label2'},
          { value: 'three', label: 'label3'}
        ]
      },
      numberselect: {
        title: 'Static Number Select',
        type: 'number',
        format: 'uiselect',
        description: 'Only single item is allowed',
        items: [
          { value: 1, label: 'number1'},
          { value: 2, label: 'number2'},
          { value: 3, label: 'number3'}
        ]
      },
      dyanmicselect: {
        title: 'Dynamic Single Select',
        type: 'string',
        format: 'uiselect',
        description: 'Only single item is allowed',
        items: [
          { value: 'one', label: 'label1'},
          { value: 'two', label: 'label2'},
          { value: 'three', label: 'label3'}
        ]
      },
      staticmultiselect: {
        title: 'Static Multi Select',
        type: 'array',
        format: 'uiselect',
        description: 'Multi single items arre allowed',
        minItems: 1,
        maxItems: 4,
        items: [
          { value: 'one', label: 'label1'},
          { value: 'two', label: 'label2'},
          { value: 'three', label: 'label3'},
          { value: 'four', label: 'label4'},
          { value: 'five', label: 'label5'}
        ]
      },
      dynamicmultiselect: {
        title: 'Dyanmic Multi Select',
        type: 'array',
        format: 'uiselect',
        description: 'Multi single items arre allowed',
        minItems: 1,
        maxItems: 2,
        items: [
          { value: 'one', label: 'label1'},
          { value: 'two', label: 'label2'},
          { value: 'three', label: 'label3'},
          { value: 'four', label: 'label4'},
          { value: 'five', label: 'label5'}
        ]
      }
    },
    required: ['staticselect', 'numberselect', 'dyanmicselect', 'staticmultiselect', 'dynamicmultiselect']
  };
  $scope.refreshSelect = function(schema, search) {
    console.log('called');
    console.log(search);
    schema.items = [
      { value: 'refreshed1', label: 'refreshed1'},
      { value: 'refreshed2', label: 'refreshed2'},
      { value: 'refreshed3', label: 'refreshed3'}
    ];
  }
  $scope.form = [
    'name',
     {
       key: 'staticselect',
       options: {
         uiClass: 'short'
       }
     },
     'numberselect',
     {
       key: 'dyanmicselect',
       options: {
         refreshDelay: 100,
         refreshMethod: $scope.refreshSelect
       }
     },
     {
       key: 'staticmultiselect'
     },
     {
       key: 'dynamicmultiselect',
       options: {
         uiClass: 'short',
         refreshDelay: 100,
         refreshMethod: $scope.refreshSelect
       }
      }
  ];
  $scope.model = {
    numberselect: 1,
    staticmultiselect: ['three', 'one']
  };
  $scope.submitted = function(form){
    $scope.$broadcast('schemaFormValidate')
    console.log($scope.model);
  };
});
