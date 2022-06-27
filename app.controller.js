(function() {
    'use-strict';

angular.module("App", [])
.controller("mainController", mainController);
    
function mainController ($scope, $interval) {

    var self = this;
    
    // --------------- Subtitlos --------------- // 
    
    self.subtitles = [
        'Excelente calidad y precios accesibles',
        'Home Spray',
        'Textile Flavoring',
        'Candles & Essencess',
    ];

    self.cont = 0;
    self.subtitle = 'Bienvenidos a Karoma Home';
    $interval(async () => {
        if(self.cont == self.subtitles.length){ self.cont = 0; }
        
        let myQuery = $('#fondo-1 div h2');

        myQuery.fadeOut(() => { 
            myQuery.text(`${self.subtitles[self.cont]}`);
            self.cont+=1;
        }).fadeIn();

    }, 4000);

    // --------------- Fin Subtitlos --------------- // 
    
    // --------------- Imagenes --------------- // 
    $scope.dir = 'assets/img/in_use/';
    // Debe actualizarse cuando se agregan nuevas fotos que seran usadas en las tarjetas
    $scope.cards = [
        // {
        //     file: 'velas.jfif', 
        //     description: 'Una vela de soja con aroma lavanda y jabón liquido con fragancia a naranja', 
        //     title: 'Vela y Difusor'
        // },
        {
            file: 'a.jpeg',        
            description: 'Vela abierta con pabilo de madera de bajo consumo, optimo para disfrutar del aroma por más tiempo', 
            title: 'Velas',
        },
        {
            file: 'vela-tres-pabilo.jpeg',     
            description: 'Velas con protector de madera, para su protección luego de ser apagada, asi no se ensucia', 
            title: 'Velas',
        },
        {
            file: 'c.jpeg',        
            description: 'Velas con protector de madera, para su protección luego de ser apagada, asi no se ensucia', 
            title: 'Velas',
        },
        {
            file: 'd.jpeg',        
            description: 'Velas con protector de madera, para su protección luego de ser apagada, asi no se ensucia', 
            title: 'Velas',
        },
        {
            file:'vela-nosotros.jpeg',
            description:'Velas con pabilo doble, generando una senacion de bienestar en el ambiene con la duabilidad absoluta',
            title: 'Velas'
        },
        {
            file:'velas.jfif',
            description:'El pack de la escencia, tal que biene con un coso para hacer puf y su velita magica',
            title: 'Velas'
        }

    ];
    // --------------- Fin Imagenes --------------- // 
    
    $scope.velasyescencia = 'El proceso de selección de una pieza contenedora y su perfumees único, cada vela es vertida a mano. Con materias primas de excelente calidad';
    $scope.homespray = 'Aromatizador de ambiente/textil, esta formulado con un alto porcentaje de fragancia de perfumeria fina, que te va a asegurar un aroma intenso y duradero.';
    $scope.salesbanio = 'Para un baño refrescante y relajante, ';
    
    // Controlador para cambiar de display sobre el id enviado, para no exceder width de pagina
    (function(){
        $(window).resize(() => {
            var ancho = $(window).width(); 
            if(ancho < 615 && !($('#d-nosotros').hasClass('d-block')) ){
                $('#d-nosotros').removeClass('d-flex');
                $('#d-nosotros').addClass('d-block');
            }else if(ancho > 574){
                $('#d-nosotros').addClass('d-flex');
                $('#d-nosotros').removeClass('d-block');
            }
        });
    })();

    $(function() {
        var text = $(".text");
        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          if (scroll >= 500) {
            text.removeClass("hidden");
          } else{
            text.addClass("hidden");
          }
        });
      });
      

} // Fin Controller 

})();

