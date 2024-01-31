/*
Jeden lístek do divadla :i[Pěst na oko] stojí 12 euro. Spočítejte měsíční příjem divadla ze vstupného, přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. Uložte výsledek do proměnné prijem.
Hodnotu proměnné prijem vypište do stránky.
Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného. Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti?
Vypište do stránky i příjem divadla se započítanou slevou pro studenty.
*/

document.body.innerHTML = "<h1>priklad_1"

const cena_listku = 12
const pocet_navstevniku = 173
const pocet_predstaveni = 15


let prijem = cena_listku * pocet_navstevniku * pocet_predstaveni

console.log(
  "Prijem divadla je: " + prijem
)
