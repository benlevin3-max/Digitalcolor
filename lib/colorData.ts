export type ColorShade = {
  id: string;
  name: string;
  hex: string;
  category: CategoryId;
  tags?: string[];
};

export type CategoryId = 'life' | 'fashion' | 'covergray' | 'slightfashion' | 'edge';

export type Category = {
  id: CategoryId;
  label: string;
  shortLabel: string;
  description: string;
  count: number;
};

export const CATEGORIES: Category[] = [
  { id: 'life',          label: 'Life Color',              shortLabel: 'Life',    description: 'Natural shades — browns, blacks, warm tones for everyday color.',      count: 18 },
  { id: 'fashion',       label: 'Fashion Series',          shortLabel: 'Fashion', description: 'Bold, vivid fashion colors for creative and editorial styling.',        count: 10 },
  { id: 'covergray',     label: 'Cover Gray Hair',         shortLabel: 'Cover',   description: 'High-coverage formulas designed specifically for gray hair.',           count: 6  },
  { id: 'slightfashion', label: 'Slight Fashion',          shortLabel: 'Slight',  description: 'Subtle fashion tones — a refined touch of color without the boldness.', count: 12 },
  { id: 'edge',          label: 'Hair Edge Control Color', shortLabel: 'Edge',    description: 'Precision edge shades from degree 1 (black) through 9 (light).',       count: 9  },
];

export const lifeColors: ColorShade[] = [
  { id: '1.0',  name: 'Jet Black',              hex: '#0A0A0A', category: 'life', tags: ['black', 'dark'] },
  { id: '2.0',  name: 'Natural Black',           hex: '#1A1008', category: 'life', tags: ['black', 'dark'] },
  { id: '3.0',  name: 'Dark Brown',              hex: '#2C1A0E', category: 'life', tags: ['brown', 'dark'] },
  { id: '4.0',  name: 'Medium Brown',            hex: '#3D2010', category: 'life', tags: ['brown'] },
  { id: '4.5',  name: 'Mahogany Brown',          hex: '#5C2018', category: 'life', tags: ['brown', 'red'] },
  { id: '5.0',  name: 'Light Brown',             hex: '#5C3A1E', category: 'life', tags: ['brown'] },
  { id: '5.3',  name: 'Golden Brown',            hex: '#7A4A1E', category: 'life', tags: ['brown', 'warm'] },
  { id: '5.4',  name: 'Copper Brown',            hex: '#8B4513', category: 'life', tags: ['brown', 'copper'] },
  { id: '6.0',  name: 'Dark Blonde',             hex: '#8B6340', category: 'life', tags: ['blonde', 'dark'] },
  { id: '6.3',  name: 'Dark Golden Blonde',      hex: '#A07840', category: 'life', tags: ['blonde', 'golden'] },
  { id: '6.4',  name: 'Dark Copper Blonde',      hex: '#A0622A', category: 'life', tags: ['blonde', 'copper'] },
  { id: '7.0',  name: 'Medium Blonde',           hex: '#B08B50', category: 'life', tags: ['blonde'] },
  { id: '7.3',  name: 'Golden Blonde',           hex: '#C8A060', category: 'life', tags: ['blonde', 'golden', 'warm'] },
  { id: '7.4',  name: 'Copper Blonde',           hex: '#C07840', category: 'life', tags: ['blonde', 'copper'] },
  { id: '8.0',  name: 'Light Blonde',            hex: '#C8A870', category: 'life', tags: ['blonde', 'light'] },
  { id: '8.3',  name: 'Light Golden Blonde',     hex: '#D4B878', category: 'life', tags: ['blonde', 'golden', 'light'] },
  { id: '9.0',  name: 'Very Light Blonde',       hex: '#E0C898', category: 'life', tags: ['blonde', 'light'] },
  { id: '10.0', name: 'Platinum Blonde',         hex: '#F0E0C0', category: 'life', tags: ['blonde', 'platinum', 'light'] },
];

export const fashionColors: ColorShade[] = [
  { id: 'F.R1', name: 'Vivid Red',       hex: '#CC2200', category: 'fashion', tags: ['red', 'vivid'] },
  { id: 'F.R2', name: 'Scarlet',         hex: '#E83020', category: 'fashion', tags: ['red'] },
  { id: 'F.V1', name: 'Violet',          hex: '#6B2080', category: 'fashion', tags: ['purple', 'violet'] },
  { id: 'F.V2', name: 'Purple',          hex: '#8B30A0', category: 'fashion', tags: ['purple'] },
  { id: 'F.P1', name: 'Hot Pink',        hex: '#E0408C', category: 'fashion', tags: ['pink'] },
  { id: 'F.P2', name: 'Rose Pink',       hex: '#E870A8', category: 'fashion', tags: ['pink', 'rose'] },
  { id: 'F.B1', name: 'Electric Blue',   hex: '#2050C8', category: 'fashion', tags: ['blue'] },
  { id: 'F.B2', name: 'Sky Blue',        hex: '#4090D8', category: 'fashion', tags: ['blue', 'light'] },
  { id: 'F.T1', name: 'Teal',            hex: '#208080', category: 'fashion', tags: ['teal', 'green'] },
  { id: 'F.G1', name: 'Emerald',         hex: '#208040', category: 'fashion', tags: ['green'] },
];

export const coverGrayColors: ColorShade[] = [
  { id: 'CG.1', name: 'Natural Black Cover',    hex: '#1A1008', category: 'covergray', tags: ['black', 'cover'] },
  { id: 'CG.3', name: 'Dark Brown Cover',        hex: '#2C1A0E', category: 'covergray', tags: ['brown', 'cover'] },
  { id: 'CG.4', name: 'Medium Brown Cover',      hex: '#4A2818', category: 'covergray', tags: ['brown', 'cover'] },
  { id: 'CG.5', name: 'Light Brown Cover',       hex: '#6B4028', category: 'covergray', tags: ['brown', 'cover', 'light'] },
  { id: 'CG.6', name: 'Dark Blonde Cover',       hex: '#907050', category: 'covergray', tags: ['blonde', 'cover'] },
  { id: 'CG.7', name: 'Blonde Cover',            hex: '#B09060', category: 'covergray', tags: ['blonde', 'cover', 'light'] },
];

export const slightFashionColors: ColorShade[] = [
  { id: 'SF.1',  name: 'Soft Burgundy',      hex: '#7A2030', category: 'slightfashion', tags: ['red', 'subtle'] },
  { id: 'SF.2',  name: 'Dusty Rose',         hex: '#C07888', category: 'slightfashion', tags: ['pink', 'subtle'] },
  { id: 'SF.3',  name: 'Muted Mauve',        hex: '#8C6070', category: 'slightfashion', tags: ['purple', 'subtle'] },
  { id: 'SF.4',  name: 'Warm Copper',        hex: '#B06030', category: 'slightfashion', tags: ['copper', 'warm'] },
  { id: 'SF.5',  name: 'Caramel Tint',       hex: '#C89050', category: 'slightfashion', tags: ['warm', 'blonde'] },
  { id: 'SF.6',  name: 'Soft Violet',        hex: '#806898', category: 'slightfashion', tags: ['purple', 'subtle'] },
  { id: 'SF.7',  name: 'Mocha Ash',          hex: '#786060', category: 'slightfashion', tags: ['ash', 'neutral'] },
  { id: 'SF.8',  name: 'Champagne',          hex: '#D8B880', category: 'slightfashion', tags: ['blonde', 'light'] },
  { id: 'SF.9',  name: 'Smoky Plum',         hex: '#604060', category: 'slightfashion', tags: ['purple', 'dark'] },
  { id: 'SF.10', name: 'Subtle Teal',        hex: '#508088', category: 'slightfashion', tags: ['teal', 'subtle'] },
  { id: 'SF.11', name: 'Rose Gold',          hex: '#C09080', category: 'slightfashion', tags: ['pink', 'warm', 'gold'] },
  { id: 'SF.12', name: 'Pearl Ash',          hex: '#B8B0A8', category: 'slightfashion', tags: ['ash', 'light'] },
];

export const edgeColors: ColorShade[] = [
  { id: 'E.1', name: 'Degree 1 — Jet Black',     hex: '#0A0A0A', category: 'edge', tags: ['black'] },
  { id: 'E.2', name: 'Degree 2 — Deep Black',     hex: '#1A0A08', category: 'edge', tags: ['black', 'dark'] },
  { id: 'E.3', name: 'Degree 3 — Dark Brown',     hex: '#2C1808', category: 'edge', tags: ['brown', 'dark'] },
  { id: 'E.4', name: 'Degree 4 — Medium Brown',   hex: '#3D2010', category: 'edge', tags: ['brown'] },
  { id: 'E.5', name: 'Degree 5 — Warm Brown',     hex: '#5C3020', category: 'edge', tags: ['brown', 'warm'] },
  { id: 'E.6', name: 'Degree 6 — Dark Blonde',    hex: '#806040', category: 'edge', tags: ['blonde', 'dark'] },
  { id: 'E.7', name: 'Degree 7 — Medium Blonde',  hex: '#A08050', category: 'edge', tags: ['blonde'] },
  { id: 'E.8', name: 'Degree 8 — Light Blonde',   hex: '#C0A070', category: 'edge', tags: ['blonde', 'light'] },
  { id: 'E.9', name: 'Degree 9 — Lightest',       hex: '#E0C090', category: 'edge', tags: ['light', 'blonde'] },
];

export const ALL_COLORS: ColorShade[] = [
  ...lifeColors,
  ...fashionColors,
  ...coverGrayColors,
  ...slightFashionColors,
  ...edgeColors,
];

export const COLOR_MAP: Record<CategoryId, ColorShade[]> = {
  life: lifeColors,
  fashion: fashionColors,
  covergray: coverGrayColors,
  slightfashion: slightFashionColors,
  edge: edgeColors,
};

export const TOTAL_SHADES = 1000;

/** Luminance check — should text on this hex be dark or light? */
export function isDark(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
}

/** Simulate a formula string for a given shade */
export function simulateFormula(shade: ColorShade): string {
  const bases: Record<CategoryId, string[]> = {
    life:          ['Base A', 'Warm Tone', 'Natural Booster'],
    fashion:       ['Vivid Base', 'Color Catalyst', 'Fashion Boost'],
    covergray:     ['Cover Base', 'Gray Neutralizer', 'Depth Pigment'],
    slightfashion: ['Pastel Base', 'Tone Modifier', 'Soft Pigment'],
    edge:          ['Edge Concentrate', 'Precision Base', 'Control Agent'],
  };
  const b = bases[shade.category];
  const pcts = [Math.floor(30 + Math.random() * 20), Math.floor(20 + Math.random() * 20)];
  const remainder = 100 - pcts[0] - pcts[1];
  return `${b[0]} ${pcts[0]}% · ${b[1]} ${pcts[1]}% · ${b[2]} ${remainder}%`;
}
