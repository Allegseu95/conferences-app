import Swal from 'sweetalert2';
import imagen from '@/assets/icon.png'
export const mostrarCertificado = () => {
  Swal.fire({
    imageUrl: imagen,
    imageAlt: 'Certificado',
    imageHeight: 400,
    imageWidth: 600, // Ajusta el valor del ancho de la imagen según tus necesidades
    confirmButtonText: 'Cerrar',
    showCloseButton: true,
  });
};
