export type Chapter = {
  id: string;
  place: string;
  dates: string;
  image: string;
  imageAlt: string;
  line: string;
};

export const chapters: Chapter[] = [
  {
    id: 'bangkok',
    place: 'Bangkok',
    dates: '25 a 27 de janeiro',
    image: 'destinations/bangkok.jpg',
    imageAlt: 'Templos dourados em Bangkok sob céu azul',
    line:
      'Tay, a gente chega juntos na Tailândia. Três dias pra respirar a cidade: templos, o rio, comida de rua e aquela energia que só Bangkok tem.',
  },
  {
    id: 'chiang-mai',
    place: 'Chiang Mai',
    dates: '28 e 29 de janeiro',
    image: 'destinations/chiang-mai.jpg',
    imageAlt: 'Chedi dourado do Doi Suthep em Chiang Mai',
    line:
      'Depois subimos pro norte. Doi Suthep brilhando no alto da montanha, a cidade antiga pra caminhar sem pressa — Chiang Mai no nosso ritmo.',
  },
  {
    id: 'chiang-rai',
    place: 'Chiang Rai',
    dates: '30 de janeiro',
    image: 'destinations/chiang-rai.jpg',
    imageAlt: 'Wat Rong Khun, o Templo Branco, em Chiang Rai',
    line:
      'Um dia especial no Templo Branco — Wat Rong Khun. Quase irreal, todo branco, daqueles lugares que a gente guarda pra sempre.',
  },
  {
    id: 'andaman',
    place: 'Ilhas do oeste',
    dates: '31 de janeiro a 5 de fevereiro',
    image: 'destinations/andaman.jpg',
    imageAlt: 'Águas turquesa e falésias no Mar de Andaman',
    line:
      'E aí o Mar de Andaman: Phuket, Phi Phi, Krabi. Água verde-azul, barcos, ilhas — a parte da viagem que a gente já imagina em câmera lenta.',
  },
  {
    id: 'koh-samui',
    place: 'Koh Samui',
    dates: '6 a 10 de fevereiro',
    image: 'destinations/koh-samui.jpg',
    imageAlt: 'Big Buddha (Wat Phra Yai) em Koh Samui',
    line:
      'Do lado leste, Koh Samui. Dias de praia… e ainda vamos encontrar o Dicção por lá. Vai ficar ainda mais especial.',
  },
  {
    id: 'bali',
    place: 'Bali',
    dates: '11 a 17 de fevereiro',
    image: 'destinations/bali.jpg',
    imageAlt: 'Terraços de arroz e verde de Bali',
    line:
      'Sete dias em Bali, contando o voo de chegada. Ubud no verde, a costa sul no mar — o último capítulo no mapa… ou quase.',
  },
];

export const credits = [
  {
    place: 'Hero / Phi Phi',
    credit: 'Foto via Unsplash (photo-1552465011)',
    href: 'https://unsplash.com/photos/brown-wooden-boat-on-sea-shore-during-daytime-1552465011-b4e21bf6e79a',
  },
  {
    place: 'Bangkok',
    credit: 'Foto via Unsplash (photo-1563492065599)',
    href: 'https://unsplash.com/photos/1563492065599-3520f775eeed',
  },
  {
    place: 'Chiang Mai · Doi Suthep',
    credit: 'PhilipNalangan · Wikimedia Commons',
    href: 'https://commons.wikimedia.org/wiki/File:Doi_Suthep_Temple_Chiang_Mai_Thailand.jpg',
  },
  {
    place: 'Chiang Rai · Wat Rong Khun',
    credit: 'Ddalbiez · Wikimedia Commons',
    href: 'https://commons.wikimedia.org/wiki/File:Wat_Rong_Khun-001.jpg',
  },
  {
    place: 'Ilhas do oeste',
    credit: 'Foto via Unsplash (photo-1589394815804)',
    href: 'https://unsplash.com/photos/1589394815804-964ed0be2eb5',
  },
  {
    place: 'Koh Samui · Big Buddha',
    credit: 'Argenberg · Wikimedia Commons',
    href: 'https://commons.wikimedia.org/wiki/File:Koh_Samui,_Big_Buddha_01.jpg',
  },
  {
    place: 'Bali',
    credit: 'Foto via Unsplash (photo-1537996194471)',
    href: 'https://unsplash.com/photos/1537996194471-e657df975ab4',
  },
];
