angular.module("App", [])
    .controller("mainController", mainController);
    
function mainController ($scope) {

    $scope.dir = 'assets/img/';
    // Debe actualizarse cuando se agregan nuevas fotos que seran usadas en las tarjetas
    $scope.cards = [
        {
            file: 'velas.jfif', 
            description: 'Una vela de soja con aroma lavanda y jabón liquido con fragancia a naranja', 
            title: 'Vela y Difusor'
        },
        {
            file: 'a.jpeg',        
            description: 'Vela abierta con pabilo de madera de bajo consumo, optimo para disfrutar del aroma por más tiempo', 
            title: 'Velas'
        },
        {
            file: 'b-sm.jpeg',     
            description: 'Velas con protector de madera, para su protección luego de ser apagada, asi no se ensucia', 
            title: 'Velas'
        },
        {
            file: 'b.jpeg',        
            description: '', 
            title: 'Velas'
        },
        {
            file: 'c.jpeg',        
            description: '', 
            title: 'Velas'},
        {
            file: 'd.jpeg',        
            description: '', 
            title: 'Velas'
        },

    ];

    $scope.velasyescencia = 'El proceso de selección de una pieza contenedora y su perfumees único, cada vela es vertida a mano. Con materias primas de excelente calidad';
    $scope.homespray = 'Aromatizador de ambiente/textil, esta formulado con un alto porcentaje de fragancia de perfumeria fina, que te va a asegurar un aroma intenso y duradero.';
    $scope.salesbanio = 'Proceso de sales de baño';
}