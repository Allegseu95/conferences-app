import swal from 'sweetalert';

export class MethodsAlert{

    static async confirmemethod(){
        swal({
            title:'Su acción fue confimada con exito',
            icon:'success'
        })
    }

    static async question(){
        swal({
            title: "Estas seguro que desea rechazar el registro?",
            text: "Una vez rechazado, no existirá vuelta atras!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Tu registro fue rechazado exitosamente!", {
                icon: "success",
              });
            } else {
              swal("Acción cancelada");
            }
          });
    }

    static async showvoucher(){
      await swal({
        title: 'Ver Registro de voucher',
        imageUrl: 'https://www.ejemplode.com/images/uploads/voucher.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }

}  
