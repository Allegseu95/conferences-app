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
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          new Swal('Tu registro fue eliminado exitosamente!', {
            icon: 'success',
          });
        } else {
          new Swal('Acción cancelada');
        }
      });
  export const see = (title) =>

  new Swal({
    title:title,
    imageUrl: 'https://www.ejemplode.com/images/uploads/voucher.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
