# Projekt-Dokumentation


## Informieren

### User Stories

| US-№ | Verbindlichkeit  | Beschreibung                       |
| ---- | --------------- | ---------------------------------- |
| 0    |              Muss    | Als eine Lehrperson möchte ich eine Dokumentation sehen, um den Lernprozess meiner Schüler besser nachvollziehen zu können. |
| 1    |              Muss    | Als ein Besucher möchte ich Snake spielen können, um mein Geschick zu testen und Spass zu haben. |
| 2  |              Muss       |   Als ein Besucher möchte ich TicTacToe spielen können, um strategische Herausforderungen zu erleben.                                 |
| 3  |              Muss     |   Als ein Besucher möchte ich Tetris spielen können, um mein räumliches Denken zu verbessern.                                 |
| 4  |              Muss      |  Als ein Besucher möchte ich auf einer übersichtlichen Startseite landen, um einfach zu den Spielen navigieren zu können.                                 |
| 5  |              Kann     |   Als ein Besucher möchte ich eine ansprechende und benutzerfreundliche Webseite erleben, um meine Spielerfahrung zu verbessern.                              |



### 1.3 Testfälle


| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
|1.1|	Besucher befindet sich auf der Startseite	|Klick auf "Snake"|	Snake-Spiel wird gestartet und ist spielbar|
|1.2|	Besucher spielt gerade Snake	|Kollision mit der Wand|	Das Spiel endet, und eine Fehlermeldung wird angezeigt|
|1.3|	Besucher beendet das Snake-Spiel|	Klick auf "Zurück zur Startseite"	|Der Besucher kehrt zur Startseite zurück|
|2.1|	Besucher befindet sich auf der Startseite	|Klick auf "TicTacToe"|	TicTacToe-Spiel wird gestartet und ist spielbar|
|2.2|	Besucher setzt ein X in ein leeres Feld	|Klick auf ein leeres Feld	|X wird im ausgewählten Feld platziert|
|2.3|	Besucher gewinnt das TicTacToe-Spiel	|Erfolgreiches Setzen von drei X in einer Reihe|	Gewinnmeldung wird angezeigt|
|3.1|	Besucher befindet sich auf der Startseite|	Klick auf "Tetris"	|Tetris-Spiel wird gestartet und ist spielbar|
|3.2|	Besucher bewegt den Tetris-Block nach links|	Tastendruck "Links"|	Tetris-Block bewegt sich nach links|
|3.3|	Besucher erreicht eine volle horizontale Reihe|	Blockreihe wird komplettiert|	Die volle Reihe verschwindet, und Punkte werden hinzugefügt|
|4.1|	Besucher öffnet die Webseite|	-|	Eine übersichtliche Startseite wird angezeigt|
|4.2|	Besucher navigiert zurück zur Startseite|	Klick auf "Startseite"	|Der Besucher landet auf der Startseite|


## 2 Planen

| AP-№ | Zuständig | Beschreibung                            | Geplante Zeit |
| ---- | --------- | --------------------------------------- | ------------- |
| 0.0  |  Manser        | Projektdokumentation                          | 2 Stunden     |
| 1.A  |  Greub         | Implementierung des Snake-Spiels        | 10 Stunden     |
| 1.B  |  Greub         | Durchführung von Snake-Spieltests       | 2 Stunden      |
| 2.A  |  Raviraj         | Implementierung des TicTacToe-Spiels    | 10 Stunden     |
| 2.B  |  Raviraj        | Durchführung von TicTacToe-Spieltests   | 2 Stunden      |
| 3.A  |  Lucena         | Implementierung des Tetris-Spiels       | 15 Stunden     |
| 3.B  |  Lucena         | Durchführung von Tetris-Spieltests      | 2 Stunden      |
| 4.A  |  Manser         | Design und Implementierung der Startseite | 10 Stunden  |
| 4.B  |  Manser         | Durchführung von Startseitentests       | 1 Stunden      |
| 5.A  |  Individuell         | Portfolioeintrag       | 4 Stunden      |


## 3 Entscheiden

Keine

## 4 Realisieren

| AP-№ | Zuständig | Geplante Zeit | Tatsächliche Zeit |
| ---- | --------- | ------------- | ----------------- |
| 0.0  |  Manser        | 2 Stunden      | 2 Stunden         |
| 1.A  |  Greub         | 10 Stunden     |   12 Stunden      |
| 1.B  |  Greub         | 2 Stunden      |    2 Stunden               |
| 2.A  |  Raviraj         | 10 Stunden     |  10 Studen               |
| 2.B  |  Raviraj         | 2 Stunden      |  2 Stunden                 |
| 3.A  |  Lucena         | 15 Stunden     |   14 stunden                |
| 3.B  |  Lucena         | 2 Stunden      |   1 Stunde                |
| 4.A  |  Manser         | 10 Stunden     |   11 Stunden                |
| 4.B  |  Manser         | 1 Stunden      |   2 Stunden                |




## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Resultat | Tester  |
| ---- | -------- | ------- |
| 1.1  | OK       | Greub   |
| 1.2  | NOK       | Greub   |
| 1.3  | OK       | Greub   |
| 2.1  | OK       | Raviraj |
| 2.2  | OK       | Raviraj |
| 2.3  | OK       | Raviraj |
| 3.1  | OK       | Lucena  |
| 3.2  | OK       | Lucena  |
| 3.3  | OK       | Lucena  |
| 4.1  | OK       | Manser  |
| 4.2  | OK       | Manser  |

Fazit:
Bis auf das Snake-Spiel konnten alle Anforderungen erfüllt werden.




