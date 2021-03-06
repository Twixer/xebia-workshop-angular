// declare a module
var myAppModule = angular.module('workshop', []).
	filter('truncate', function() {
		return function(input) {
		  var out = input;
		  if (input != "" && input.length > 12) { 
			out = input.substring(input, 12) + "..."		  
		  }
		  
		  return out;
		}
	});

function LogCtrl($scope) {
  $scope.selectedLogs=[];
  
  $scope.selectedStatus = {200:true, 404:true, 500:true};
  
  $scope.selectedMethods = {GET:true, POST:true, PUT:true, DELETE:true};
  
  $scope.logs  = [
    {
        "id": "1",
        "method": "GET",
        "status": "200",
        "message": "OK",
        "url": "http://my/site/name/for/fun/and/filtering/demonstration/ok.html",
        "date": "01/01/2013 00:00:00"
    },
    {
        "id": "2",
        "method": "GET",
        "status": "200",
        "message": "OK",
        "url": "http://ok.html",
        "date": "01/01/2013 00:01:00"
    },
    {
        "id": "3",
        "method": "DELETE",
        "status": "404",
        "message": "NOT FOUND!",
        "url": "http://notfound.html",
        "date": "01/01/2013 00:00:10"
    },
    {
        "id": "4",
        "method": "POST",
        "status": "500",
        "message": "PROBLEM SIR?",
        "url": "http://troll.html",
        "date": "01/01/2013 00:03:10"
    },
    {
        "id": "5",
        "method": "DELETE",
        "status": "200",
        "message": "OK",
        "url": "http://ok.html",
        "date": "01/01/2013 00:05:10"
    },
    {
        "id": "6",
        "method": "PUT",
        "status": "500",
        "message": "PROBLEM SIR?",
        "url": "http://troll.html",
        "date": "01/01/2013 01:04:00"
    },
    {
        "id": "7",
        "method": "POST",
        "status": "404",
        "message": "NOT FOUND!",
        "url": "http://notfound.html",
        "date": "01/01/2013 01:05:00"
    }];
	
    function filterLogs() {
        if ($scope.logs) {
            var result = [];
            $scope.logs.forEach(function(log) {
                if ($scope.selectedStatus[log.status] && $scope.selectedMethods[log.method]) {
                    result.push(log);
                }
            });
            $scope.selectedLogs = result;
        }
    }

	$scope.$watchCollection('selectedStatus', filterLogs);
	$scope.$watchCollection('selectedMethods', filterLogs);	
}





