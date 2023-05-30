
// funkcja do pokazywania/chowania teksty
function myFunction() {
    var x = document.getElementById("haslo");
    if (x.type === "password") {
         x.type = "text";
    } else {
        x.type = "password";
  }
}
//walidacja hasla
function Passwordvalidate() {
    let haslo = document.getElementById('haslo').value;
    console.log(haslo);

    let minimalnaliczbaliczb = document.getElementById('minimum').value;
    console.log(minimalnaliczbaliczb);

    let maksymalnaliczbaliczb = document.getElementById('max').value;
    console.log(maksymalnaliczbaliczb);

    let duze = document.getElementById('liczbaduze').value;
    console.log(duze);

    let znakible = document.getElementById('zakazane').value;
    console.log(znakible);

    let ilespec = document.getElementById('liczbaspecjal').value;
    console.log(ilespec);

    let zakazanelista = znakible.split(",");
    console.log(zakazanelista);

    let znakidozwolonje = document.getElementById('dozw').value;
    console.log(znakidozwolonje);

    let dozwolonelista = znakidozwolonje.split(",")
    console.log(dozwolonelista);

    let liczbaznakowdozwolonych = 0

    let resultText = 'wynik: ';
    let oki = 0
    var i = 0

    var j = 0

    

    console.log("===========================================");
    console.log("jest okej :)")
    alert("Rozpoczęto walidację...");


    //ify
      if (haslo.length < minimalnaliczbaliczb) {
          resultText += 'hasło jest za krótkie, hasło musi mieć conajmniej ' + minimalnaliczbaliczb + ' znakow, ' ;
      } 

      else if (haslo.length > maksymalnaliczbaliczb)
      {
          resultText += 'hasło jest za długie, '
      }

      else{
          resultText += 'długość hasła jest prawidłowa, '
          oki +=1

      }
      
      
//vary
      
      while(i < dozwolonelista.length){
          if (haslo.indexOf(dozwolonelista[i]) >= 0){
             liczbaznakowdozwolonych += 1
          }
          i+=1
      }
      
      while(j < zakazanelista.length){
          if (haslo.indexOf(zakazanelista[j]) >= 0){
              resultText += 'hasło posiada znaki zakazane,'
          }
          j+=1
      }
      var duzzz = 0;
      for (var i = 0; i < haslo.length; i++) {
          if (haslo[i] >= 'A' && haslo[i] <= 'Z') {
              duzzz++;
          }
      }
      if (duzzz < duze) {
          resultText += 'hasło musi zawierać co najmniej ' + duze + ' wielkich liter, ';
      }
      else {
          resultText += 'ilość wielkich liter jest prawidłowa, ';
          oki +=1
      }

      if (liczbaznakowdozwolonych < ilespec) {
          resultText += 'hasło musi zawierać co najmniej ' + ilespec + ' specjalnych znaków.';
      }
      else {
          resultText += 'ilość specjalnych znaków jest prawidłowa.';
          oki +=1

      }

    //alerty
      document.getElementById('result').innerText = resultText;
      if(oki == 3){
        alert("walidacja została pomyślnie zakończona hasło spełnia wymagania.");
    
      }
      else if(oki < 3){
        alert("!walidacja nie została pomyślnie zakończona hasło nie spełnia wymagań!.");
    
      }
  }
  
  
// skrypt jest okej 
// function displayDate
//document getElementById("showDate").innerHTML = Date();
//<button type "button" onclick= "displayDate()">ShowDate</button>
