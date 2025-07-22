var app = angular.module("cup",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/company-wise-strategy",{
        templateUrl:"app/view/company_wise.html"
})})