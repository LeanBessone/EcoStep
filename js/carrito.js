
    document.addEventListener("DOMContentLoaded", function () {
        calcularTotal();

        // Agrega un evento de cambio a todos los elementos de cantidad
        var cantidades = document.querySelectorAll(".w-25");
        cantidades.forEach(function (cantidad) {
            cantidad.addEventListener("change", function () {
                if (parseFloat(cantidad.value) < 0) {
                    cantidad.value = "0";
                }
                calcularTotal();
            });
        });

        // Agrega un evento al botón "Aplicar descuento"
        var botonDescuento = document.querySelector("#aplicarDescuento");
        botonDescuento.addEventListener("click", function () {
            aplicarDescuento();
            calcularTotal(); // Recalcula el total después de aplicar el descuento
        });

        // Función para calcular el total
        function calcularTotal() {
            var filas = document.querySelectorAll("#contenedorCarrito tbody tr");
            var subtotal = 0;

            filas.forEach(function (fila) {
                var precioUnitario = parseFloat(fila.querySelector("#precio").textContent);
                var cantidad = parseFloat(fila.querySelector(".w-25").value);
                if (cantidad < 0) {
                    cantidad = 0;
                    fila.querySelector(".w-25").value = "0";
                }

                var totalProducto = precioUnitario * cantidad;
                fila.querySelector("#total").textContent = "$" + totalProducto.toFixed(2);
                subtotal += totalProducto;
            });

            var subtotalElement = document.getElementById("subtotal");
            var envioElement = document.getElementById("envio");
            var descuentoElement = document.getElementById("descuento");
            var precioFinalElement = document.getElementById("precioFinal");

            // Calcula el envío
            var envio = 2500.00;
            envioElement.textContent = "$" + envio.toFixed(2);

            // Inicializa el descuento en 0
            var descuento = parseFloat(descuentoElement.textContent.slice(1));

            // Calcula el precio final
            var precioFinal = subtotal + envio - descuento;

            // Actualiza los elementos en la interfaz
            subtotalElement.textContent = "$" + subtotal.toFixed(2);
            descuentoElement.textContent = "$" + descuento.toFixed(2);
            precioFinalElement.textContent = "$" + precioFinal.toFixed(2);
        }

        // Función para aplicar el descuento
        function aplicarDescuento() {
            var inputCodigo = document.getElementById("codigoDescuento");
            var codigoDescuento = inputCodigo.value.trim();

            // Verifica el código de descuento
            if (codigoDescuento === "RECICLA") {
                // Aplica el descuento
                var subtotal = parseFloat(document.getElementById("subtotal").textContent.slice(1));
                var descuento = 1500.00;

                // Resta el descuento del subtotal
                var nuevoSubtotal = subtotal - descuento;
                document.getElementById("subtotal").textContent = "$" + nuevoSubtotal.toFixed(2);

                // Actualiza los elementos de descuento
                document.getElementById("descuento").textContent = "$" + descuento.toFixed(2);
            } else {
                alert("Código de descuento no válido");
            }
        }
    
        var eliminarBotones = document.querySelectorAll("#eliminar");
        eliminarBotones.forEach(function (boton) {
            boton.addEventListener("click", function () {
                eliminarCantidad(boton);
            });
        });

        function eliminarCantidad(boton) {
            // Obtiene la fila del producto
            var filaProducto = boton.closest('.producto');
            
            // Obtiene el input de cantidad y establece su valor a 0
            var cantidadInput = filaProducto.querySelector('#cantProducto');
            cantidadInput.value = "0";

            // Vuelve a calcular el total
            calcularTotal();
        }

        var incrementarBotones = document.querySelectorAll(".fa-plus");
            incrementarBotones.forEach(function (boton) {
                boton.addEventListener("click", function () {
                    incrementarCantidad(boton);
                });
            });

            var decrementarBotones = document.querySelectorAll(".fa-minus");
            decrementarBotones.forEach(function (boton) {
                boton.addEventListener("click", function () {
                    decrementarCantidad(boton);
                });
            });
            function incrementarCantidad(boton) {
                var filaProducto = boton.closest('.producto');
                var cantidadInput = filaProducto.querySelector('#cantProducto');
                cantidadInput.value = parseInt(cantidadInput.value, 10) + 1;
                calcularTotal();
            }

            function decrementarCantidad(boton) {
                var filaProducto = boton.closest('.producto');
                var cantidadInput = filaProducto.querySelector('#cantProducto');
                if (parseInt(cantidadInput.value, 10) > 0) {
                    cantidadInput.value = parseInt(cantidadInput.value, 10) - 1;
                    calcularTotal();
                }
            }

            // Agrega un evento al botón "ir a pagar"
        var botonDescuento = document.querySelector("#botonPagar");
        botonDescuento.addEventListener("click", function () {
            alert("Gracias por su compra 🌍❤️");
            location.reload();
        });

    });