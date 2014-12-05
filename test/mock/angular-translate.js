/**
 * Created by dg on 12/5/14.
 */
angular.module('pascalprecht.translate',[]).
  provider('$translate',function(){
    this.use = function(){return this;};
    this.translations = function(){return this};
    this.fallbackLanguage = function(){return this};
    this.$get = function(){
      return {
        use:function(){return this}
      };
    };
  });
