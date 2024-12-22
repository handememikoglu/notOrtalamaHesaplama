// Not Ortalaması Hesaplayan Fonksiyon
function takeNotes() {
    const grades = [];
    const value = Number(prompt("Kaç adet not girmek istersiniz."));
    if(value !== value || value <= 0 ){ //NaN kontrolü yapıldı.
        alert("Yanlış değer girdiniz!!");
        return takeNotes();
    }
    for (let i = 0; i < value; i++) {
        const note = Number(prompt(`${i+1}. Notu giriniz.`));
        if(note !== note || note < 0 || note > 100){
            alert("Geçrsiz not girişi");
            i--; //contunie ile denemeyi unutma!!
        }else{
            grades.push(note);
        }
        
    }
    console.log(grades);
    return grades;
    
}
function average(grades) {
    const sum = grades.reduce((acc,x) => acc + x, 0);
    const result = sum / grades.length;
    console.log(result);
    if(result >= 90){
        alert(`Not ortalaması: ${result} \n Harf notu: A`);
        console.log(`Not ortalaması: ${result} \n Harf notu: A`); 
    }else if(result >=80 && result < 90){
        alert(`Not ortalaması: ${result} \n Harf notu: B`);
        console.log(`Not ortalaması: ${result} \n Harf notu: B`); 

    }else if(result >=70 && result < 80){
        alert(`Not ortalaması: ${result} \n Harf notu: C`);
        console.log(`Not ortalaması: ${result} \n Harf notu: C`); 
    }else if(result >=60 && result < 70){
        alert(`Not ortalaması: ${result} \n Harf notu: D`);
        console.log(`Not ortalaması: ${result} \n Harf notu: D`); 
    }else if(result < 60){
        alert(`Not ortalaması: ${result} \n Harf notu: F`);
        console.log(`Not ortalaması: ${result} \n Harf notu: F`); 
    }
    
}
const grades = takeNotes();
average(grades);