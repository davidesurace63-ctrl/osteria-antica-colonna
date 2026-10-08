export type MenuItem = { name: string; price: number; description?: string; largePrice?: number; unit?: string };

export const menu: Record<string, MenuItem[]> = {
  Antipasti: [
    { name: "Affettati misti con formaggi", price: 14, largePrice: 16, description: "Piatto medio 14 € · piatto grande 16 €" },
    { name: "Bufala, prosciutto crudo e pomodorini", price: 15, description: "Baccalà alla vicentina e mantecato con sarde in saor e polenta" },
    { name: "Uova in padella e tartufo di Acqualagna D.O.P.", price: 12 },
    { name: "Terracotta", price: 12, description: "Fusione di asiago e gorgonzola con pere e noci" },
  ],
  "Primi piatti": [
    { name: "Bigoli di pasta fresca al ragù bianco di cortile", price: 13 },
    { name: "Bigoli di pasta fresca in salsa di acciughe", price: 13 },
    { name: "Tagliatelle con verdure spadellate", price: 11 },
    { name: "Paccheri con gamberetti, pesto e stracciatella", price: 15 },
  ],
  "Secondi piatti": [
    { name: "Tartare o carpaccio di scottona", price: 24 },
    { name: "Costata di Scottona", price: 5, unit: "hg" },
    { name: '"Labra salate"', price: 17, description: "Baccalà alla vicentina e mantecato con sarde in saor e polenta" },
    { name: "Arrosto di vitello con patate", price: 20 },
    { name: "Ribs di maiale con salsa dello chef", price: 20 },
    { name: "Fegato alla veneziana con polenta", price: 22 },
  ],
  Contorni: [
    { name: "Insalata con pomodori e cipolla", price: 5 },
    { name: "Fagioli alla Bud Spencer con salsiccia e pomodoro piccante", price: 7 },
    { name: "Fagioli e cipolla", price: 6 },
    { name: "Verdure spadellate", price: 6 },
    { name: "Patate alla ca'dorina con speck, cipolla e burro fuso", price: 7 },
  ],
  Dolci: [
    { name: '“Il nostro” tiramisù medaglia d\'oro al valore (quando c\'è!)', price: 6 },
    { name: "Semifreddo al pistacchio", price: 6 },
    { name: "Semifreddo al torroncino", price: 6 },
    { name: "Soufflé al cioccolato con cuore caldo", price: 6 },
  ],
  "Vini rossi": [
    { name: "Valpolicella ripasso - Benedetti La Villa", price: 26 },
    { name: "Valpolicella classico superiore - Benedetti La Villa", price: 24 },
    { name: "Cabernet - Parco del Venda", price: 22 },
    { name: "Merlot - Parco del Venda", price: 22 },
    { name: "Merlot lapilli - Parco del Venda", price: 26 },
    { name: "Cabernet agape - Parco del Venda", price: 26 },
  ],
  "Bianchi fermi": [
    { name: "Rio floriano friulano collio DOC", price: 26 },
    { name: "Chardonnay - Parco del Venda", price: 22 },
    { name: "Chardonnay - Frassinella", price: 21 },
    { name: "Pinot bianco - Parco del Venda", price: 22 },
    { name: "Pinello autoctono - Parco del Venda", price: 22 },
  ],
  Bollicine: [
    { name: "Prosecco - Parco del Venda", price: 20 },
    { name: "Champagne - uve blanche estelle encry-brut", price: 80 },
  ],
  "Vino della casa": [
    { name: "Rosso fermo 1/4 l", price: 4 },
    { name: "Prosecco 1/4 l", price: 4 },
    { name: "Birra alla spina - piccola", price: 3 },
  ],
};