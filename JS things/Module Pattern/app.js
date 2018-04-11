// Basic structure

(function(){
    // Declare private vars and functions

    return {
        // Declare public vars and functions
    }
})();

// Standard module pattern
const UICtrl = (function(){
    let text ='Hello World';

    const changeText = function (){
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChangeText : function(){
            changeText();

            console.log(text);
        }
    }
})();

UICtrl.callChangeText();

// Revealing Module Pattern
const ItemCtrl = (function(){
    let _data = [];

    function _add(item){
        _data.push(item);
        console.log('Item Added....')
    }

    function _get(id){
        return _data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: _add,
        get: _get
    }
})();

ItemCtrl.add({id:1, name: 'John'});
ItemCtrl.add({id:2, name: 'Mark'});