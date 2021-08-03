function dateDiffString(now, bday) {
    var year = now.getFullYear() - bday.getFullYear();
    var month = now.getMonth() - bday.getMonth();
    var day = now.getDate() - bday.getDate();

    let diffInMilliSeconds = Math.abs(now - bday) / 1000;
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    const sekunden = parseInt(diffInMilliSeconds % 60)


    diff = new Date(
        now.getFullYear() - bday.getFullYear(),
        now.getMonth() - bday.getMonth(),
        now.getDate() - bday.getDate()
    );
    message = `${diff.getYear()} "Jahr(e)," ${diff.getMonth()} "Monat(e)" ${diff.getDate()} "Tag(e)." ${hours} "Stunde(n)" ${minutes} "Minute(n)" ${sekunden} "Sekunde(n)"`



    return message

}

const birthday = new Date("02/17/1985 05:30:00")

setInterval(() => {
    const now = new Date();
    console.log(dateDiffString(now, birthday))
}, 1000);



// Programmieraufgabe: Eine Funktion namensdateDiffString–zweiDateObjekte als Parameter,
//     also zB zweinew Date(); –Leserlichen String als Rückgabewert der durch Differenz der
// beidenDateObjekte zustande kommt∗zB:
// “1 Jahr, 3 Monate, 2 Wochen, 6 Tage, 14 Stunden, 57 Minuten, 34 Sekunden”∗
// Um die Aufgabe zu vereinfachen soll ein Monat einfach das vier - fache einer Woche sein•
// Alternative Aufgabe: javascript.infobesuchen10
