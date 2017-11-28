angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/uiselect/multi.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\" ng-init=\"form.select_models=(form.schema.items| whereMulti : \'value\' : ($$value$$||[]))\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div class=\"form-group\" ng-controller=\"UiSelectController\">\n    <ui-select multiple sortable-options=\"{{form.sortableOptions}}\" ng-if=\"!(form.options.tagging||false)\" ng-model=\"form.select_models\" theme=\"bootstrap\" on-select=\"$$value$$.push($item.value)\" on-remove=\"$$value$$.splice($$value$$.indexOf($item.value), 1)\" class=\"{{form.options.uiClass}}\">\n      <ui-select-match class=\"ui-select-match\" placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">{{$item.label}}</ui-select-match>\n      <ui-select-choices class=\"ui-select-choices\" refresh=\"fetchResult(form.schema, form.options, $select.search)\"\n         refresh-delay=\"form.options.refreshDelay\" group-by=\"form.options.groupBy\"  repeat=\"item in form.schema.items | propsFilter: {label: $select.search, description: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\">\n        <div ng-bind-html=\"item.label | highlight: $select.search\"></div>\n        <div ng-if=\"item.description\">\n          <span ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\'))+ \'</small>\'\"></span>\n        </div>\n    </ui-select-choices>\n    </ui-select>\n    <ui-select ng-controller=\"UiSelectController\" multiple ng-if=\"(form.options.tagging||false) && !(form.options.groupBy || false)\" tagging=\"form.options.tagging||false\" tagging-label=\"form.options.taggingLabel\" tagging-tokens=\"form.options.taggingTokens\" sortable-options=\"{{form.sortableOptions}}\" ng-model=\"form.select_models\" theme=\"bootstrap\" on-select=\"$$value$$.push($item.value)\" on-remove=\"$$value$$.splice($$value$$.indexOf($item.value), 1)\" class=\"{{form.options.uiClass}}\">\n      <ui-select-match class=\"ui-select-match\" placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">{{$item.label}}&nbsp;<small>{{($item.isTag===true ?  form.options.taggingLabel : \'\')}}</small></ui-select-match>\n      <ui-select-choices class=\"ui-select-choices\" refresh-delay=\"form.options.refreshDelay\" refresh=\"fetchResult(form.schema, form.options, $select.search)\"\n         refresh-delay=\"form.options.refreshDelay\" repeat=\"item in form.schema.items | propsFilter: {label: $select.search, description: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\">\n          <div ng-if=\"item.isTag\" ng-bind-html=\"\'<div>\' + (item.label   | highlight: $select.search) + \' \' + form.options.taggingLabel + \'</div><div class=&quot;divider&quot;></div>\'\"></div>\n          <div ng-if=\"!item.isTag\" ng-bind-html=\"item.label + item.isTag | highlight: $select.search\"></div>\n      <div ng-if=\"item.description\"> \n        <span ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\')) + \'</small>\'\"></span>\n      </div>\n    </ui-select-choices>\n      <!--repeat code because tagging does not display properly under group by but is still useful -->\n    </ui-select>\n\n    <ui-select ng-controller=\"UiSelectController\" multiple ng-if=\"(form.options.tagging||false) && (form.options.groupBy || false)\" tagging=\"form.options.tagging||false\" tagging-label=\"form.options.taggingLabel\" tagging-tokens=\"form.options.taggingTokens\" sortable-options=\"{{form.sortableOptions}}\" ng-model=\"form.select_models\" theme=\"bootstrap\" on-select=\"$$value$$.push($item.value)\" on-remove=\"$$value$$.splice($$value$$.indexOf($item.value), 1)\" class=\"{{form.options.uiClass}}\">\n      <ui-select-match class=\"ui-select-match\" placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">{{$item.label}}&nbsp;<small>{{($item.isTag===true ?  form.options.taggingLabel : \'\')}}</small></ui-select-match>\n      <ui-select-choices class=\"ui-select-choices\" group-by=\"form.options.groupBy\" refresh-delay=\"form.options.refreshDelay\" refresh=\"fetchResult(form.schema, form.options, $select.search)\"\n         refresh-delay=\"form.options.refreshDelay\" repeat=\"item in form.schema.items | propsFilter: {label: $select.search, description: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\">\n          <div ng-if=\"item.isTag\" ng-bind-html=\"\'<div>\' + (item.label   | highlight: $select.search) + \' \' + form.options.taggingLabel + \'</div><div class=&quot;divider&quot;></div>\'\"></div>\n          <div ng-if=\"!item.isTag\" ng-bind-html=\"item.label + item.isTag | highlight: $select.search\"></div>\n      <div ng-if=\"item.description\"> \n        <span ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\')) + \'</small>\'\"></span>\n      </div>\n    </ui-select-choices>\n\n    </ui-select>\n    <input toggle-model type=\"hidden\" ng-model=\"insideModel\" sf-changed=\"form\" schema-validate=\"form\" />\n    <span ng-if=\"form.feedback !== false\"\n      class=\"form-control-feedback\"\n      ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"></span>\n    <div class=\"help-block\"\n      ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n      ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n  </div>\n</div>\n");
$templateCache.put("directives/decorators/bootstrap/uiselect/single.html","<div class=\"form-group {{form.htmlClass}}\"\n     ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\"\n     ng-init=\"form_key = form.key\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <ui-select ng-model=\"select_model.selected\"\n             ng-controller=\"UiSelectController\"\n             theme=\"bootstrap\"\n             ng-disabled=\"form.disabled\"\n             on-select=\"$$value$$=$item.value;onSelect($item.value, form.options)\"\n             class=\"{{form.options.uiClass}}\">\n    <ui-select-match class=\"ui-select-match\" placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">{{select_model.selected.label}}</ui-select-match>\n    <ui-select-choices class=\"ui-select-choices\"\n                       refresh=\"fetchResult(form.schema, form.options, $select.search)\"\n                       refresh-delay=\"form.options.refreshDelay\"\n                       group-by=\"form.options.groupBy\"\n                       repeat=\"item in form.schema.items | propsFilter: {label: $select.search, description: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\">\n      <div ng-bind-html=\"item.label | highlight: $select.search\"></div>\n      <div ng-if=\"item.description\">\n        <span ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\'))+ \'</small>\'\"></span>\n      </div>\n    </ui-select-choices>\n  </ui-select>\n\n  <span ng-if=\"form.feedback !== false\"\n        class=\"form-control-feedback\"\n        ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': form.disableSuccessState !== true && hasSuccess(), \'glyphicon-remove\': form.disableErrorState !== true && hasError() }\"\n        aria-hidden=true>\n  </span>\n  <div class=\"help-block\" sf-message=\"form.description\"></div>\n</div>\n");}]);
angular.module('schemaForm').config(
  ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var uiselect = function(name, schema, options) {
      if (schema.type === 'string' && schema.format == 'uiselect') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'uiselect';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(uiselect);

    var uiselect = function(name, schema, options) {
      if (schema.type === 'number' && schema.format == 'uiselect') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'uiselect';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.number.unshift(uiselect);

    var uimultiselect = function(name, schema, options) {
      if (schema.type === 'array' && schema.format == 'uiselect') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'uimultiselect';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };
    schemaFormProvider.defaults.array.unshift(uimultiselect);


    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'uiselect',
    'directives/decorators/bootstrap/uiselect/single.html');
    schemaFormDecoratorsProvider.createDirective('uiselect',
    'directives/decorators/bootstrap/uiselect/single.html');
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'uimultiselect',
    'directives/decorators/bootstrap/uiselect/multi.html');
    schemaFormDecoratorsProvider.createDirective('uimultiselect',
    'directives/decorators/bootstrap/uiselect/multi.html');
  }])
  .directive("toggleSingleModel", function() {
    // some how we get this to work ...
    return {
      require: 'ngModel',
      restrict: "A",
      scope: {},
      replace: true,
      controller: ['$scope', function($scope)  {
        $scope.$parent.$watch('select_model.selected',function(){
          if($scope.$parent.select_model.selected != undefined) {
            $scope.$parent.insideModel = $scope.$parent.select_model.selected.value;
            $scope.$parent.ngModel.$setViewValue($scope.$parent.select_model.selected.value);
          }
        });
      }],
    };
  })
  .filter('whereMulti', function() {
    return function(items, key, values) {
      var out = [];

      if (angular.isArray(values)) {
        values.forEach(function(value) {
          for (var i = 0; i < items.length; i++) {
            if (value == items[i][key]) {
              out.push(items[i]);
              break;
            }
          }
        });
      } else {
        // Let the output be the input untouched
        out = items;
      }

      return out;
    };
  })
  .filter('propsFilter', function() {
    return function(items, props) {
      var out = [];

      if (angular.isArray(items)) {
        items.forEach(function(item) {
          var itemMatches = false;

          var keys = Object.keys(props);
          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            if (item.hasOwnProperty(prop)){
              //only match if this property is actually in the item to avoid
              var text = props[prop].toLowerCase();
              //search for either a space before the text or the textg at the start of the string so that the middle of words are not matched
              if (item[prop].toString().toLowerCase().indexOf(text) === 0 || ( item[prop].toString()).toLowerCase().indexOf(' ' + text) !== -1  ) {
                itemMatches = true;
                break;
              }
            }
          }

          if (itemMatches) {
            out.push(item);
          }
        });
      } else {
        // Let the output be the input untouched
        out = items;
      }

      return out;
    };
  })
  .controller('UiSelectController', ['$scope', '$http', function($scope, $http) {

    $scope.select_model = {}

    $scope.$on('clear-select-model', function(event, form_key) {
      if($scope.select_model.selected === undefined || !$scope.form_key.includes(form_key)) return
      $scope.$evalAsync(function() {
        $scope.select_model.selected = undefined
      })
    })

    $scope.onSelect = function (value, options) {
      if(options && options.onSelect) {
        var os_func = (typeof options.onSelect == 'function') ? options.onSelect : new Function(options.onSelect)
        os_func(value, options)
      }
    }

    $scope.fetchResult = function (schema, options, search) {
      if(options) {
        if (options.callback) {
          var cb_func = (typeof options.callback == 'function') ?
          options.callback : new Function(options.callback);

          schema.items = cb_func(schema, options, search);
        }
        else if (options.http_post) {
          return $http.post(options.http_post.url, options.http_post.parameter).then(
            function (_data) {
              schema.items = _data.data;
            },
            function (data, status) {
              alert("Loading select items failed (URL: '" + String(options.http_post.url) +
              "' Parameter: " + String(options.http_post.parameter) + "\nError: "  + status);
            });
          }
          else if (options.http_get) {
            return $http.get(options.http_get.url, options.http_get.parameter).then(
              function (_data) {
                schema.items = _data.data;
              },
              function (data, status) {
                alert("Loading select items failed (URL: '" + String(options.http_get.url) +
                "\nError: "  + status);
              });
            }
            else if (options.async) {
              var cb_func = (typeof options.async.call == 'function') ?
              options.async.call : new Function(options.async.call);

              return cb_func(schema, options, search).then(
                function (_data) {
                  schema.items = _data.data;
                },
                function (data, status) {
                  alert("Loading select items failed(Options: '" + String(options) +
                  "\nError: "  + status);
                });
              }

            }
          };
        }])
