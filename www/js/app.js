var MyApp = angular.module('DemoApp', ['firebase','ionic']);

MyApp.constant(
    
       'FIREBASE_URL',
       'https://anothertodo.firebaseio.com/todolist/todos');

MyApp.controller('TodoCtrl', function(
    $firebaseArray, FIREBASE_URL
    ){
   // Sync to Firebase 
   this.todos = $firebaseArray(new Firebase(FIREBASE_URL));
   
   // Add TODO
   this.addTodo = function() {
       this.todos.$add({
           name: this.title,
           date: new Date().valueOf()
       });
       this.title = null;
   }.bind(this)
        
    // Remove Todo
    this.removeItem = function (item){
        
        this.todos.$remove(item);
    };
    });

MyApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
