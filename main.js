function decrypt() {
    const codedText = document.getElementById('coded-text').value;
    const letterValuesTable = document.getElementById('letter-values');
    
    // Votre réponse attendue
    const expectedAnswer = "On les clubs at 5, 3, 5 4, 4, 5 4, 6 11 5 4, 3 2, 6 11 3, 5 6, 3 6, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1 3, 5 6, 4 2, 6 11 3, 5 6, 3 6, 5 4, 5 4, 5, 1"; // Remplacez cela par la réponse correcte

    // Vérifiez si la réponse de l'utilisateur est correcte
    if (codedText === expectedAnswer) {
        // Effacer le contenu précédent de la table
        while (letterValuesTable.rows.length > 1) {
            letterValuesTable.deleteRow(1);
        }

        // Votre logique de décryptage ici
        const letterValues = {
            A: 5,
            C: 3,
            D: 4,
            E: 11,
            G: 6,
            I: 2,
            J: 1,
            L: 6,
            M: 3,
            N: 4,
            O: 5,
            P: 73,
            R: 3,
            S: 5,
            T: 4,
            U: 6
            // Ajoutez les valeurs de lettres manquantes ici
        };

        // Afficher le tableau complet
        for (const letter in letterValues) {
            const row = letterValuesTable.insertRow(1);
            const letterCell = row.insertCell(0);
            const valueCell = row.insertCell(1);
            letterCell.textContent = letter;
            valueCell.textContent = letterValues[letter];
        }
    }
}