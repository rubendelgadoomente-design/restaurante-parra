export type MenuItem = {
  categoria: string;
  nombre: string;
  descripcion: string;
  precio: string;
  alergenos?: string[];
  destacado?: boolean;
  sinGluten?: boolean;
  receta1973?: boolean;
};

// Carta REAL de Parra copiada de su carta de Avocaty el 19/10/2026.
// Sustituirla por la hoja de Google cuando el restaurante la mantenga allí.
// La carta original NO indica alérgenos por plato (solo el aviso general),
// así que aquí tampoco se marcan alérgenos ni "sin gluten" hasta que Parra los valide.
export const CARTA_ACTUALIZADA = '19/10/2026';
export const MENU_ES_EJEMPLO = false;

const CARTA_PARRA: MenuItem[] = [
    {"categoria": "Para compartir", "nombre": "Puerros confitados a la plancha con salsa romesco", "descripcion": "", "precio": "19,00 €"},
    {"categoria": "Para compartir", "nombre": "Flores de alcachofa a la plancha con paleta ibérica", "descripcion": "", "precio": "17,00 €"},
    {"categoria": "Para compartir", "nombre": "Alcachofas confitadas rellenas de rabo de toro", "descripcion": "3 piezas", "precio": "24,00 €"},
    {"categoria": "Para compartir", "nombre": "Croquetas cremosas de jamón", "descripcion": "", "precio": "13,90 €"},
    {"categoria": "Para compartir", "nombre": "Huevos rotos con paleta ibérica", "descripcion": "", "precio": "17,90 €"},
    {"categoria": "Para compartir", "nombre": "Revuelto de setas meloso con langostinos", "descripcion": "", "precio": "14,90 €"},
    {"categoria": "Para compartir", "nombre": "Morcilla de Burgos frita con pimientos de Padrón", "descripcion": "", "precio": "14,90 €"},
    {"categoria": "Para compartir", "nombre": "Gambas al ajillo en cazuela", "descripcion": "Con un toque alegre de guindilla", "precio": "19,90 €"},
    {"categoria": "Para compartir", "nombre": "Queso camembert crujiente sobre cebolla caramelizada", "descripcion": "", "precio": "15,00 €"},
    {"categoria": "Para compartir", "nombre": "Habitas baby con jamón y huevo frito", "descripcion": "", "precio": "22,90 €"},
    {"categoria": "Para compartir", "nombre": "Carpaccio de buey con rúcula y queso parmesano", "descripcion": "", "precio": "19,90 €"},
    {"categoria": "Para compartir", "nombre": "Canutillos de cecina rellenos de queso de cabra", "descripcion": "Con confitura de pimientos", "precio": "22,90 €"},
    {"categoria": "Para compartir", "nombre": "Pulpito a la plancha con espárragos trigueros", "descripcion": "", "precio": "27,50 €"},
    {"categoria": "Para compartir", "nombre": "Tartar de vieiras con aguacate, lima y eneldo", "descripcion": "", "precio": "20,90 €"},
    {"categoria": "Para compartir", "nombre": "Zamburiñas con salsa de mango y ajitos", "descripcion": "8 piezas", "precio": "22,90 €"},
    {"categoria": "Para compartir", "nombre": "Torreznos de Soria con pimientos de Padrón", "descripcion": "", "precio": "15,90 €"},
    {"categoria": "Para compartir", "nombre": "Anchoas del Cantábrico con AOVE", "descripcion": "", "precio": "21,90 €"},
    {"categoria": "Para compartir", "nombre": "Queso curado de oveja", "descripcion": "", "precio": "14,90 €"},
    {"categoria": "Para compartir", "nombre": "Gilda de la casa", "descripcion": "Unidad", "precio": "3,50 €"},
    {"categoria": "Para compartir", "nombre": "Ración de pan y aperitivo", "descripcion": "Por persona", "precio": "1,50 €"},
    {"categoria": "Ensaladas", "nombre": "Ensalada verde de cecina, queso de cabra y frutos secos", "descripcion": "", "precio": "16,00 €"},
    {"categoria": "Ensaladas", "nombre": "Pimientos asados al horno con ventresca", "descripcion": "Aliñados, con cebolla morada y guindillas", "precio": "18,00 €"},
    {"categoria": "Ensaladas", "nombre": "Ensalada de ventresca con tomate rosa y cebolla morada", "descripcion": "", "precio": "14,90 €"},
    {"categoria": "Ensaladas", "nombre": "Ensalada PARRA", "descripcion": "Queso burrata, tomate rosa, salsa pesto y aguacate", "precio": "18,00 €"},
    {"categoria": "Ensaladas", "nombre": "Ensaladilla rusa con langostinos", "descripcion": "", "precio": "12,90 €"},
    {"categoria": "De cuchara", "nombre": "Judiones con matanza de pueblo", "descripcion": "", "precio": "13,50 €"},
    {"categoria": "De cuchara", "nombre": "Sopa castellana al estilo del marqués", "descripcion": "", "precio": "9,00 €"},
    {"categoria": "De cuchara", "nombre": "Callos con morros", "descripcion": "", "precio": "17,90 €", "destacado": true},
    {"categoria": "Arroces (por encargo)", "nombre": "Arroz caldoso con bogavante", "descripcion": "Por encargo, mínimo dos personas. Precio por persona", "precio": "25,90 €"},
    {"categoria": "Arroces (por encargo)", "nombre": "Paella de mariscos", "descripcion": "Por encargo, mínimo dos personas. Precio por persona", "precio": "19,50 €"},
    {"categoria": "Arroces (por encargo)", "nombre": "Paella mixta", "descripcion": "Por encargo, mínimo dos personas. Precio por persona", "precio": "15,70 €"},
    {"categoria": "Carnes y parrilla", "nombre": "Chuletón de vaca madurada trinchado con hueso", "descripcion": "Según peso", "precio": "69,00 €/kg"},
    {"categoria": "Carnes y parrilla", "nombre": "Lomo de vaca madurada trinchado, sin hueso", "descripcion": "500 g aprox.", "precio": "39,00 €"},
    {"categoria": "Carnes y parrilla", "nombre": "Solomillo especial de ternera IGP Sierra de Guadarrama", "descripcion": "", "precio": "29,90 €"},
    {"categoria": "Carnes y parrilla", "nombre": "Paletilla de lechazo asada al estilo tradicional", "descripcion": "Encárgala al reservar con 24 h de antelación", "precio": "29,90 €"},
    {"categoria": "Carnes y parrilla", "nombre": "Rabo de toro estofado al vino tinto", "descripcion": "", "precio": "25,50 €"},
    {"categoria": "Carnes y parrilla", "nombre": "Chuletitas de cordero lechal con su guarnición", "descripcion": "6 piezas", "precio": "27,00 €"},
    {"categoria": "Carnes y parrilla", "nombre": "Cachopo de ternera", "descripcion": "Jamón ibérico y queso de Miraflores", "precio": "24,90 €"},
    {"categoria": "Carnes y parrilla", "nombre": "Entrecot de ternera IGP Sierra de Guadarrama", "descripcion": "", "precio": "26,00 €"},
    {"categoria": "Del mar", "nombre": "Bocaditos de merluza rebozados con alioli", "descripcion": "", "precio": "21,00 €"},
    {"categoria": "Del mar", "nombre": "Lubina a la plancha con salsa bilbaína", "descripcion": "", "precio": "22,90 €"},
    {"categoria": "Del mar", "nombre": "Bacalao Islas Feroe con tomate y gambas", "descripcion": "", "precio": "27,90 €"},
    {"categoria": "Del mar", "nombre": "Sepia a la plancha con ajo, perejil y alioli", "descripcion": "", "precio": "24,90 €"},
    {"categoria": "Del mar", "nombre": "Chipirones encebollados con patatas baby al horno", "descripcion": "", "precio": "24,90 €"},
    {"categoria": "Postres caseros", "nombre": "Brownie con helado y crema de natillas", "descripcion": "", "precio": "7,60 €"},
    {"categoria": "Postres caseros", "nombre": "Tarta de tiramisú", "descripcion": "", "precio": "7,00 €"},
    {"categoria": "Postres caseros", "nombre": "Tarta de queso con arándanos", "descripcion": "", "precio": "7,50 €", "destacado": true},
    {"categoria": "Postres caseros", "nombre": "Tarta de tres chocolates", "descripcion": "", "precio": "7,00 €"},
    {"categoria": "Postres caseros", "nombre": "Tatín de manzana con helado", "descripcion": "", "precio": "7,60 €"},
    {"categoria": "Postres caseros", "nombre": "Sorbete de limón al cava", "descripcion": "", "precio": "6,50 €"},
];

// Lector de CSV que respeta comillas: una descripción con comas ("Judiones, chorizo…")
// no rompe las columnas. Google Sheets exporta así los campos con comas.
function parseCSV(texto: string): string[][] {
  const filas: string[][] = [];
  let fila: string[] = [];
  let campo = '';
  let entreComillas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (entreComillas) {
      if (c === '"' && texto[i + 1] === '"') { campo += '"'; i++; }
      else if (c === '"') entreComillas = false;
      else campo += c;
    } else if (c === '"') entreComillas = true;
    else if (c === ',') { fila.push(campo); campo = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && texto[i + 1] === '\n') i++;
      fila.push(campo); filas.push(fila); fila = []; campo = '';
    } else campo += c;
  }
  if (campo || fila.length) { fila.push(campo); filas.push(fila); }
  return filas;
}

export async function getMenu(): Promise<MenuItem[]> {
  const sheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL;

  // Sin hoja de Google configurada: se usa la carta real copiada arriba.
  if (!sheetUrl) {
    return CARTA_PARRA;
  }

  try {
    const res = await fetch(sheetUrl, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Error al cargar el CSV');
    
    const text = await res.text();
    const rows = parseCSV(text).slice(1);

    return rows.map(cols => {
      const [categoria, nombre, descripcion, precio, alergenosStr, flags] = cols.map(item => item?.trim() || '');
      const alergenos = alergenosStr ? alergenosStr.split(';').map(a => a.trim()) : undefined;
      const destacado = flags?.includes('destacado');
      const sinGluten = flags?.includes('singluten');
      const receta1973 = flags?.includes('1973');
      return { categoria, nombre, descripcion, precio, alergenos, destacado, sinGluten, receta1973 };
    }).filter(item => item.nombre);
  } catch (error) {
    console.error(error);
    return [];
  }
}
