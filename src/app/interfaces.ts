export interface Archetype {
    id: number;
    name: string;
}

export interface Card {
    goldfishId: string;
    name: string;
    lowest_print: {
      image: string;
      image_flip: string;
    };
    image: string;
    image_flip: string;
}

export interface Deck {
    id: number;
    name: string;
    date: number;
    mainboard: any[];
    sideboard: any[];
    format: Format;
    archetype: Archetype;
    commander: Card;
    commander_partner: Card;
    editable: boolean;
}

export interface Format {
    id: number;
    name: string;
}
