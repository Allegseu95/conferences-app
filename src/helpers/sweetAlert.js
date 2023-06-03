import Swal from 'sweetalert2';

export const showBasicAlert = (title, icon, text = '') =>
  Swal.fire({
    icon: icon,
    title: title,
    backdrop: 'rgba(0,0,0,0.7)',
    text: text,
  });

  export const question = (title, icon, text) =>
  Swal.fire(
    {
        title,
        text:text,
        icon:icon,
        buttons: true,
        showCancelButton: true,
        confirmButtonText: 'confirmar',
      }).then((willDelete) => {
        if (willDelete.isConfirmed          ) {
          new Swal('Tu registro fue eliminado exitosamente!', {
            icon: 'success',
          });
        } else {
          new Swal('Acción cancelada', {icon:'warning'});
        }
      });
  export const see = (title, imageUrl, width, height) =>

  new Swal({
    title:title,
    imageUrl,
    width: width,
    height: height,
    imageWidth: width,
    imageHeight: height,
    imageAlt: 'Custom image',
  })
