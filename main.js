 //Import (data.json) file to this page
 import data from './data.json'


 function activeGroup(name, obj) {
     // name => Seçeceğimiz koşul
     // obj => data.json'dan object gelen
 
     // Seçtiğiniz koşulu içeren yeni bir dizi oluşturun
     let newObject = obj.filter(item => item.group === name);
 
     function freeAssistant(x) {
         let assistantName = "";
         for (let i = 0; i < x.length; i++) {
             // Doğru değeri bulmasi icin
             if (x[i].assistant) {
                 assistantName = x[i].name; 
             }
         }
         // elde edilen değeri yazdır
         console.log(assistantName)
     }
     freeAssistant(newObject);
 }
 activeGroup("AliceBlue", data)