Calculator = function(selector) {
    this.selector = selector;
    this.buttons = [[1,2,3,4,5,6,7,8,9,0,".",'(',')'],
                ["*","/","+","-"],
                ["=","C"]];

    this.buildCalculator = function(){
        var outerRow = $('<div class="row bor buttons calculator"></div>');
        var container = $('<div class="col-md-12"></div>');  
        outerRow.append(container);

        this.buildHeader(container);
        this.buildDisplay(container);
        this.buildButtons(container);

        $(this.selector).append(outerRow);
    }
    this.buildHeader = function(container){

    }
    this.buildDisplay = function(container){
        
    }

    this.buildButtons = function (container) {
        for( i = 0; i < this.buttons.length ; i++){ // iteration over root array
            var elmas = this.buttons[i];
            console.log("---------------------");
            for ( j = 0; j < elmas.length + this.emptyElementsCount(elmas.length) ; j++){// iteration over inner arrays
          
              if ((j+1)%4==1){
                var divrow = $('<div>').addClass("row");
                container.append(divrow);
                   console.log("---------------------");
              }

                var el = elmas[j];
                var col = $('<div>').addClass("col-md-3");
                var button = $('<button>')
                                .text(el)
                                .addClass("btn btn-default span")
                                .attr("type","button")
                                .attr("value",el);
                switch(el){
                case '=':
                   button.on("click",this.onEqual);
                   break;
                case 'C':
                   button.click(this.onClear);                   
                   break;
                default:
                   button.on("click",this.onSymbol);                        
                }
                if ( el || el == 0 ){                              
                    col.append(button);
                }
                $(divrow).append(col);

              
               console.log(el);

           }
           console.log("---------------------");
        }
    }
    this.emptyElementsCount = function(length){
        if ((length%4) == 0){
            return 0;
        }
        else{
            return 4-(length%4);
        }
    }

    this.onClear = function(){        
        var value = $("#dis").val();
        $(".history").append("<div><span class=\"val\">" + value + "</span><span class=\"remove\">X</span></div>");

        $("#dis").val("");
    }

    this.onEqual = function(){
        var value = $("#dis").val();
        $("#dis").val(value + "=" + eval(value));
    },
    this.onSymbol = function(){
        var value = $("#dis").val();
        $("#dis").val(value + $(this).val());
    }
}


