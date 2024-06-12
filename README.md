# Airbean-Gruppexamination

| Anrop  |         Route          |                              Resultat |
| ------ | :--------------------: | ------------------------------------: |
| GET    |           /            |                            Startsidan |
| GET    |         /about         |                                Om oss |
| GET    |         /order         |                             Visa Meny |
| POST   |         /cart          |                       Lägg i varukorg |
| GET    |         /cart          |                           Se varukorg |
| DEL    |       /cart/:id        |            Ta bort vara från varukorg |
| POST   |         /order         |                               Beställ |
| GET    |    /order/:orderid     |           Bekräftelse med leveranstid |
| GET    | /account/order/orders  |                         Orderhistorik |
| POST   |   /account/register    |                           Skapa konto |
| GET    | /account/users/:userid |                      Se kontodetaljer |
| POST   |     /account/login     |                              Logga in |
| GET    |    /account/status     |                        Se loginstatus |
| POST   |    /account/logout     |              Logga ut + rensa vaukorg |
| POST   |     /account/login     |              admin + admin123 i bodyn |
| GET    |    /account/session    |                 Se så rollen är admin |
| POST   |      /admin/menu       |             Lägg till en ny produkt £ |
| PUT    |  /admin/menu/idnummer  |                    Ändrar sin produkt |
| DELETE |  /admin/menu/idnummer  |                  Tar bort vald menyId |
| POST   |   /admin/promotions    | Välj 2 id för att göra till kampanj & |

£ = Formatet för att lägga till produkt som admin är följande:
{
"id": "1",
"title": "Espresso",
"desc": "Strong coffee",
"price": 25
}

& = formatet för att göra en kampanj som admin är följande:
{
"products": ["7", "8"],
"price": 45
}
Där 7, 8 är id på produkterna man lagt till.

## Gruppmedlemmar

Ann Heijkenskjöld, Maya Arzapalo Björklund, Amanda Cyrus och Erik Karlsson

Individuella:
Börjar med att skapa en middleware för kontroll av admin.
Skapar upp en route för admin.
Hårdkoda in en admin.
Kombinera ihop inloggninskoden
Alla funkar i insomnia
skapar databasen för kampanjerbjudanen
Får problem med dubbla cart.db och menu.db
bör skapa en gemensam fil för databaserna och importera / exportera istället
Importera på rätt ställen.
Provar i insomnia.
Alla http anrop fungerar som dem ska.
