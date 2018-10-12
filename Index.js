function formatoMoneda () {
    //Declaracion constantes
    let cif = 3;
    let dec = 2;
    // tomamos el valor que tiene el input
    let inputNum = document.getElementById('monedaInput').value    
    // Lo convertimos en texto
    inputNum = inputNum.toString()

    //borramos valores diferentes a numeros (0-9) y caracter "."
    inputNum = inputNum.replace(/(?!^-)[^0-9.]/g,"");

    // separamos en un array los valores antes y después del punto
    inputNum = inputNum.split('.')
    // evaluamos si existen decimales
    if (!inputNum[1]) {
      inputNum[1] = '00'
    }
  
    let separados
    // se calcula la longitud de la cadena
    if (inputNum[0].length > cif) {
      let uno = inputNum[0].length % cif
      if (uno === 0) {
        separados = []
      } else {
        separados = [inputNum[0].substring(0, uno)]
      }
      let posiciones = parseInt(inputNum[0].length / cif)
      for (let i = 0; i < posiciones; i++) {
        let pos = ((i * cif) + uno)
        console.log(uno, pos)
        separados.push(inputNum[0].substring(pos, (pos + 3)))
      }
    } else {
      separados = [inputNum[0]]
    }
  
    document.getElementById('monedaInput').value = '$' + separados.join(',') + '.' + inputNum[1]
  }

  function isNumberKey(evt)
  {
     let charCode = (evt.which) ? evt.which : event.keyCode
     //48 = valor(0) // 57 = valor(9) // 44 = caracter(",") // 46 = caracter(".") // 13 = Tecla_Retroceso 
     if ((charCode >= 48 && charCode <= 57) || charCode == 44 || charCode == 46 || charCode <= 13)
        return true;

     return false;
  }