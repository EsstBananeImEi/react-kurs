Aufgaben2 
Typescript Klassen implementieren:BookundBookShelf:
    - KlasseBook, hat Attribute:
        - title - Name, typString
        - pageCount - Anzahl gesamt Seiten, typ Number
        – pageCurrent - Lesezeichen, typ Number
    - KlasseBookShelf, mit einem Attribut:
        – books - Array von Büchern, typ Book
    - Book#progess Methode zur Rückgabe der Ganzzahl des Lesefortschrittes in Prozent 
        - zB 42
    - Book#toString Methode zur Ausgabe des Lesefortschrittes
        – zB: ‘42% Lesefortschritt’
    - BookShelf#toString Methode zur Ausgabe des Lesefortschrittes
        – zB: ‘Gesamt Lesefortschritt: 11%. 3 Bücher angefangen (15%). 1Bücher noch anzufangen’

Bei zügiger Bearbeitung kann man den Code noch so anpassen dass für dieangefangenen Bücher auch nochmal der Lesefortschritt explizit angezeigt wird.Dh ohne die nicht angefangenen Bücher in die Berechnung mit einzubeziehen.Oder alternativ könnte man sich auch noch irgendwas ausdenken, wie zB einAttribut welches angibt ob das Buch ausgeliehen ist, uvm.

Beispielhafter Startpunkt,main.ts:
    import BookShelf from'./book-shelf'
    import Book from'./book'
    const angular= newBook('Angular',406,32)
    const react= newBook('React',203,64)
    const vue= newBook('Vue',101,11)
    const backbone= newBook('Backbone',302,0)
    
    console.log(react.toString())
    
    constbooks=[angular,react,vue,backbone]
    console.table(books)
    const bookShelf= newBookShelf(books)
    console.log(bookShelf.toString())
    
    Siehe Starting-Point für vorbereitetes node Paket mit Linter support.Code mittelsyarn startodernpm startausführen.17
