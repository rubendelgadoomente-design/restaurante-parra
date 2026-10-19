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

// true mientras no haya una hoja de Google con la carta REAL de Parra.
// Los platos, precios y alérgenos de abajo son de EJEMPLO: no se pueden publicar.
export const MENU_ES_EJEMPLO = !process.env.NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL;

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

  // DATOS DE EJEMPLO (no son la carta real de Parra). Sustituir por la hoja de Google real.
  if (!sheetUrl) {
    return [
      // ENTRANTES Y PARA COMPARTIR
      { 
        categoria: 'Para Compartir', 
        nombre: 'Jamón Ibérico de Bellota', 
        descripcion: 'Cortado a cuchillo al momento, acompañado de tostas de pan con tomate aliñado.', 
        precio: '24.00€',
        alergenos: ['Gluten (en tosta opcional)'],
        destacado: true,
        sinGluten: true
      },
      { 
        categoria: 'Para Compartir', 
        nombre: 'Croquetas Caseras de Jamón y Boletus', 
        descripcion: 'Bechamel suave y crujiente exterior, receta tradicional de la casa (6 uds).', 
        precio: '13.50€',
        alergenos: ['Gluten', 'Lácteos', 'Huevo'],
        destacado: true
      },
      { 
        categoria: 'Para Compartir', 
        nombre: 'Torreznos Crujientes de Soria', 
        descripcion: 'Corte grueso confitado a baja temperatura y suflado a fuego vivo.', 
        precio: '12.00€',
        destacado: true,
        sinGluten: true,
        receta1973: true
      },
      { 
        categoria: 'Para Compartir', 
        nombre: 'Queso Puro de Oveja Curado', 
        descripcion: 'Con nueces de la comarca y confitura casera de higos.', 
        precio: '15.00€',
        alergenos: ['Lácteos', 'Frutos secos'],
        sinGluten: true
      },

      // PLATOS DE CUCHARA
      { 
        categoria: 'Cocina de Cuchara', 
        nombre: 'Judiones de La Granja', 
        descripcion: 'Estofados lentamente con chorizo ibérico, morcilla de la sierra y oreja.', 
        precio: '14.50€',
        destacado: true,
        sinGluten: true,
        receta1973: true
      },
      { 
        categoria: 'Cocina de Cuchara', 
        nombre: 'Sopa Castellana Tradicional', 
        descripcion: 'Ajo dorado, pimentón de la Vera, tacos de jamón y huevo escalfado con pan de hogaza.', 
        precio: '11.00€',
        alergenos: ['Gluten', 'Huevo'],
        receta1973: true
      },
      { 
        categoria: 'Cocina de Cuchara', 
        nombre: 'Rabo de Toro Estofado', 
        descripcion: 'Guiso meloso a fuego lento con reducción de vino tinto de Madrid y patatas rústicas.', 
        precio: '19.50€',
        destacado: true,
        sinGluten: true
      },

      // CARNES DE GUADARRAMA
      { 
        categoria: 'Carnes de Guadarrama', 
        nombre: 'Chuletón de Vaca Madurada (1kg aprox.)', 
        descripcion: 'Selección de la Sierra de Guadarrama, maduración mínima 30 días, hecho a la brasa con sal en escamas.', 
        precio: '54.00€',
        destacado: true,
        sinGluten: true
      },
      { 
        categoria: 'Carnes de Guadarrama', 
        nombre: 'Solomillo a la Brasa con Foie', 
        descripcion: 'Centro de solomillo de ternera con medallón de foie fresco y reducción de Pedro Ximénez.', 
        precio: '26.00€',
        alergenos: ['Sulfitos'],
        destacado: true
      },
      { 
        categoria: 'Carnes de Guadarrama', 
        nombre: 'Entrecot de Ternera de Guadarrama', 
        descripcion: 'Corte noble de 400g a la parrilla de carbón de encina con guarnición de patatas y pimientos de padrón.', 
        precio: '22.50€',
        sinGluten: true
      },
      { 
        categoria: 'Carnes de Guadarrama', 
        nombre: 'Paletilla de Lechazo Asada en Horno', 
        descripcion: 'Asado tradicional castellano con agua, manteca y sal, jugosa por dentro y piel crujiente.', 
        precio: '29.00€',
        destacado: true,
        sinGluten: true,
        receta1973: true
      },
      { 
        categoria: 'Carnes de Guadarrama', 
        nombre: 'Chuletitas de Cordero Lechal', 
        descripcion: 'Fritas al ajillo o a la brasa (8 uds). Crujientes y tiernas.', 
        precio: '21.00€',
        sinGluten: true
      },

      // ARROCES POR ENCARGO
      { 
        categoria: 'Arroces (Por Encargo)', 
        nombre: 'Arroz Caldoso con Bogavante', 
        descripcion: 'Fondo intenso de marisco de roca y bogavante entero (Precio por persona, mínimo 2 pax).', 
        precio: '24.00€/pax',
        alergenos: ['Crustáceos'],
        destacado: true,
        sinGluten: true
      },
      { 
        categoria: 'Arroces (Por Encargo)', 
        nombre: 'Paella Marinera de Pescado y Marisco', 
        descripcion: 'Sepia, gambón, mejillón y almejas con arroz bomba en grano suelto (mínimo 2 pax).', 
        precio: '19.50€/pax',
        alergenos: ['Moluscos', 'Crustáceos'],
        sinGluten: true
      },
      { 
        categoria: 'Arroces (Por Encargo)', 
        nombre: 'Arroz de Montaña con Boletus y Secreto', 
        descripcion: 'Elaborado con setas de la sierra y corte de cerdo ibérico a la brasa (mínimo 2 pax).', 
        precio: '21.00€/pax',
        sinGluten: true
      },

      // PESCADOS
      { 
        categoria: 'Pescados', 
        nombre: 'Lubina de Estero a la Espalda', 
        descripcion: 'Abierta al horno con sofrito tradicional de ajo, guindilla y vinagre de sidra.', 
        precio: '21.00€',
        alergenos: ['Pescado'],
        sinGluten: true
      },
      { 
        categoria: 'Pescados', 
        nombre: 'Bacalao Confitado al Ajoarriero', 
        descripcion: 'Lomo grueso desalado con pimientos asados en leña y salsa vizcaína.', 
        precio: '22.50€',
        alergenos: ['Pescado']
      },

      // POSTRES CASEROS
      { 
        categoria: 'Postres Caseros', 
        nombre: 'Tarta de Queso Horneada', 
        descripcion: 'Cremosa por dentro, base crujiente de galleta y toque tostado superficial.', 
        precio: '6.50€',
        alergenos: ['Lácteos', 'Huevo', 'Gluten'],
        destacado: true
      },
      { 
        categoria: 'Postres Caseros', 
        nombre: 'Torrija Caramelizada en Pan Brioche', 
        descripcion: 'Infusionada en leche con canela y cítricos, servida con bola de helado de turrón artesano.', 
        precio: '7.00€',
        alergenos: ['Lácteos', 'Huevo', 'Gluten'],
        destacado: true
      },
      { 
        categoria: 'Postres Caseros', 
        nombre: 'Flan Casero de Huevo al Caramelo', 
        descripcion: 'El clásico de toda la vida elaborado con huevos de campo y nata fresca.', 
        precio: '5.50€',
        alergenos: ['Lácteos', 'Huevo'],
        sinGluten: true,
        receta1973: true
      }
    ];
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
