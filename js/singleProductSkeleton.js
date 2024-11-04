
// lägg till auto constraints  -> hittar närmsta element under vissa variabler och sätter som parent/child?
// ide: grid layout + json dokument med comp = inflöde av konstant data i dynamisk kombination med UI komponenter.
let header;
let product;

export const singleProductSkeleton = [

// placering här sker i ordning då det sedan itereras, ska ett över ett annat måste det vara efter
  {
    id: 'div1',
    type: 'div',
    content: null,
    columnStart: 1,
    columnEnd: 7,
    rowStart: 1,
    rowEnd: null,

  },
  {
    id: 'div2',
    type: 'div',
    content: null,
    columnStart: 7,
    columnEnd: 13,
    rowStart: 1,
    rowEnd: null,
    url:null,
  },

  {
    id: 'product-image', //visa pris på produkt
    type: 'img',
    className: null,
    content: "+/articleNumber",
    columnStart: 2,
    ColumnEnd: 2,
    rowStart: 2,
    rowEnd: 2,
  },




  //div 1

  {
    id: 'product-header', //visa pris på produkt
    type: 'h2',
    className: 'headers',
    content: "+/name" ?? '0', // om data inte hämtas visar den meddelande
    columnStart: 9,
    columnEnd: null,
    rowStart: 2,
    rowEnd: 2,
  },
  {
    id: 'price-header', //visa pris på produkt
    type: 'h3',
    className: 'headers',
    content: `+/price SEK` ?? 'No color' ,
    columnStart: 9,
    columnEnd: null,
    rowStart: 3,
    rowEnd: 3,
    url:null
  },
  {
    id: 'stock-header', //visa pris på produkt
    type: 'p',
    className: 'headers',
    content: `+/stock in stock` ?? 'Out of stock', // om data inte hämtas visar den meddelande
    columnStart: 11,
    columnEnd: null,
    rowStart: 4,
    rowEnd: 4,
  },


  {
    id: 'color-header', //visa pris på produkt
    type: 'h3',
    className: 'headers',
    content: `+/color` ?? 'No color' ,
    columnStart: 9,
    columnEnd: null,
    rowStart: 4,
    rowEnd: 4,
  },

  {
    id: 'product-description', //visa pris på produkt
    type: 'span',
    className: 'descriptions',
    content: `+/description` ?? 'No description' ,
    columnStart: 9,
    columnEnd: null,
    rowStart: 5,
    rowEnd: 5, //om denna är true så måste tre ovan vara avstängda
  },

  {
    id: 'color-select', //visa pris på produkt
    type: 'select',
    className: 'product-select',
    content: `Colors` ?? 'No description' ,
    columnStart: 9,
    columnEnd: 10,
    rowStart: 6,
    rowEnd: 6, //om denna är true så måste tre ovan vara avstängda
  },

  {
    id: 'color-options', //visa pris på produkt
    type: 'option',
    className: 'product-select',
    content: `+/color` ?? 'No description' ,
    columnStart: 11,
    columnEnd: 10,
    rowStart: 6,
    rowEnd: 6, //om denna är true så måste tre ovan vara avstängda
  },


  {
    id: 'addon-options', //visa pris på produkt
    type: 'select',
    className: 'product-select',
    content: `Addons` ?? 'No description' ,
    columnStart: 10,
    columnEnd: 11,
    rowStart: 6,
    rowEnd: 6, //om denna är true så måste tre ovan vara avstängda
  },

  {
    id: 'buy-btn', //visa pris på produkt
    type: 'button',
    className: null,
    content: `BUY NOW` ?? 'No description' ,
    columnStart: 9,
    columnEnd: 9,
    rowStart: 7,
    rowEnd: 7, //om denna är true så måste tre ovan vara avstängda
  },
  /*


  {
    id: 'price-text', //visa pris på produkt
    type: 'h3',
    className: 'headers',
    content: `${Products.color}` || 'No color' ,
    columnStart: 1,
    ColumnEnd: 12,
    rowStart: 1,
    rowEnd: 2,
  },


{
 id: 'product-choices',
 type: 'dropdown-menu',
 className: 'dropdown-menu',
 menuTitle: 'Variants',
 items: null // placeholder för array som dynamiskt fylls med produkten baserat på logik jag lägger in
},


  {
    id: 'div1',
    type: 'div',
    content: null,
    columnStart: 1,
    ColumnEnd: 7,
    rowStart: 1,
    rowEnd: 6,
  },
  {
    id: 'div2',
    type: 'div',
    content: null,
    columnStart: 7,
    ColumnEnd: 13,
    rowStart: 1,
    rowEnd: 6,
  },



*/





  /* todo färger logik , vändning av kvadrat argb? neuralt nätverk tränar på json data / matriser för optimal positonering baserat på element typ, sido typ (kontakt sids osv)

  ide till: om rita upp matris, placera objekt på samma numeriska värden , enklare planering och skapande av sidor.
                                Center
  | A1  | A2  | A3  | A4  | A5  | A6  | A7  | A8  | A9  | A10 | A11 | A12 |
  | B1  | B2  | B3  | B4  | B5  | B6  | B7  | B8  | B9  | B10 | B11 | B12 |
  | C1  | C2  | C3  | C4  | C5  | C6  | C7  | C8  | C9  | C10 | C11 | C12 |
  | D1  | D2  | D3  | D4  | D5  | D6  | D7  | D8  | D9  | D10 | D11 | D12 |
  | E1  | E2  | E3  | E4  | E5  | E6  | E7  | E8  | E9  | E10 | E11 | E12 |
  | F1  | F2  | F3  | F4  | F5  | F6  | F7  | F8  | F9  | F10 | F11 | F12 |
  | G1  | G2  | G3  | G4  | G5  | G6  | G7  | G8  | G9  | G10 | G11 | G12 |
  | H1  | H2  | H3  | H4  | H5  | H6  | H7  | H8  | H9  | H10 | H11 | H12 |
  | I1  | I2  | I3  | I4  | I5  | I6  | I7  | I8  | I9  | I10 | I11 | I12 |
  | J1  | J2  | J3  | J4  | J5  | J6  | J7  | J8  | J9  | J10 | J11 | J12 |
  | K1  | K2  | K3  | K4  | K5  | K6  | K7  | K8  | K9  | K10 | K11 | K12 |
  | L1  | L2  | L3  | L4  | L5  | L6  | L7  | L8  | L9  | L10 | L11 | L12 |



  | A1  | A2  | A3  | A4  | A5  | A6  | A7  | A8  | A9  | A10 | A11 | A12 |
  | B1  | bi  | B3  | B4  | bi  | B6  | B7  | B8  | B9  | B10 | B11 | B12 |
  | C1  | C2  | C3  | C4  | C5  | C6  | C7  | HE  | HE  | C10 | C11 | C12 |
  | D1  | D2  | D3  | D4  | D5  | D6  | D7  | D8  | D9  | D10 | D11 | D12 |
  | E1  | E2  | E3  | E4  | E5  | E6  | E7  | ME  | ME  |  ME | E11 | E12 |
  | F1  | F2  | F3  | F4  | F5  | F6  | F7  | ME  | ME  | F10 | F11 | F12 |
  | G1  | G2  | G3  | G4  | G5  | G6  | G7  | ME  | ME  |  ME | G11 | G12 |
  | H1  | H2  | H3  | H4  | H5  | H6  | H7  | H8  | H9  | H10 | H11 | H12 |
  | I1  | I2  | I3  | I4  | I5  | I6  | I7  | I8  | I9  | I10 | I11 | I12 |
  | J1  | J2  | J3  | J4  | J5  | J6  | J7  | J8  | J9  | J10 | J11 | J12 |
  | K1  | bi  | K3  | K4  | bi  | K6  | K7  | K8  | K9  | K10 | K11 | K12 |
  | L1  | L2  | L3  | L4  | L5  | L6  | L7  | L8  | L9  | L10 | L11 | L12 |

  bild: col = b2 -> b5 , row = b2 -> k2
  text header: col = c8 -> c9, row = c8-c9 (två celler)
  dropdown menu: e8, e10, e8-g8
  knapp j9->j10
  färg backgrund div = col1->7



  */


]
