document.addEventListener("DOMContentLoaded", function () {
    const pagarButton = document.querySelector(".pagar");
  
    pagarButton.addEventListener("click", function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
      // Obtener los valores de los campos
      const numeroPedido = document.querySelector('input[name="numeroPedido"]').value;
      const direccion = document.querySelector('input[name="direccion"]').value;
      const ccv = document.querySelector('input[name="ccv"]').value;
      const fechaVencimiento = document.querySelector('input[name="fechaVencimiento"]').value;
      const numeroTarjeta = document.querySelector('input[name="numeroTarjeta"]').value;
      const nombrePropietario = document.querySelector('input[name="nombrePropietario"]').value;
  
      // Validación de los campos
      if (!numeroPedido || !direccion || !ccv || !fechaVencimiento || !numeroTarjeta || !nombrePropietario) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      // Validar el número de tarjeta (ejemplo simple: debe tener 16 dígitos)
      if (numeroTarjeta.length !== 16 || isNaN(numeroTarjeta)) {
        alert("El número de tarjeta debe tener 16 dígitos.");
        return;
      }
  
      // Validar el CCV (debe tener 3 dígitos)
      if (ccv.length !== 3 || isNaN(ccv)) {
        alert("El CCV debe tener 3 dígitos.");
        return;
      }
  
      // Validar la fecha de vencimiento (ejemplo simple)
      if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(fechaVencimiento)) {
        alert("La fecha de vencimiento debe estar en el formato MM/AA.");
        return;
      }
  
      // Si todas las validaciones pasan
      alert("Pago realizado con éxito.");
    });
  });
  