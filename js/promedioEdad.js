function agregarEdad() {
    let cantidadPersonas = parseInt(document.getElementById("cantidad-personas").value);
    let edadesContainer = document.getElementById("edades-container");

    edadesContainer.innerHTML = ""; // Limpiar el contenedor de edades previas

    for (let i = 1; i <= cantidadPersonas; i++) {
      let label = document.createElement("label");
      label.for = "edad-" + i;
      label.textContent = "Edad de la persona " + i + ":";
      edadesContainer.appendChild(label);

      let input = document.createElement("input");
      input.type = "number";
      input.id = "edad-" + i;
      input.required = true;
      edadesContainer.appendChild(input);

      edadesContainer.appendChild(document.createElement("br"));
    }
  }

  function calcularPromedioEdad() {
    let cantidadPersonas = parseInt(document.getElementById("cantidad-personas").value);
    let edades = [];

    for (let i = 1; i <= cantidadPersonas; i++) {
      let edad = parseInt(document.getElementById("edad-" + i).value);
      
      if (isNaN(edad) || edad < 0) {
        document.getElementById("resultado").innerHTML = "Ingrese edades válidas.";
        return;
      }

      edades.push(edad);
    }

    let sumaEdades = edades.reduce(function(acc, edad) {
      return acc + edad;
    }, 0);

    let promedioEdad = sumaEdades / cantidadPersonas;

    document.getElementById("resultado").innerHTML = "Promedio de Edad: " + promedioEdad.toFixed(2);
  }