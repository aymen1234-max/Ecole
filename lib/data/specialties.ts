import type { Specialty } from '../types';

export const ALL_SPECIALTIES: Specialty[] = [
  // 1. Formations Diplômantes (BTS & BTP)
  {
    id: 'dipl-1',
    title: 'Informatique (BTS & BTP)',
    category: 'Formations Diplômantes',
    instructor: 'Alex Johnson',
    instructorImage: 'https://picsum.photos/seed/p1/100/100',
    image: 'https://picsum.photos/seed/it/800/600',
    duration: '2 Ans',
    lessons: 120,
    price: 1800
  },
  {
    id: 'dipl-2',
    title: 'Animation (BTS & BTP)',
    category: 'Formations Diplômantes',
    instructor: 'Sarah Miller',
    instructorImage: 'https://picsum.photos/seed/p2/100/100',
    image: 'https://picsum.photos/seed/animate/800/600',
    duration: '2 Ans',
    lessons: 90,
    price: 1700
  },
  {
    id: 'dipl-3',
    title: 'Douane (BTS)',
    category: 'Formations Diplômantes',
    instructor: 'Marc Dupont',
    instructorImage: 'https://picsum.photos/seed/p3/100/100',
    image: 'https://picsum.photos/seed/customs2/800/600',
    duration: '2 Ans',
    lessons: 80,
    price: 1600
  },
  {
    id: 'dipl-4',
    title: 'Esthétique (BTP)',
    category: 'Formations Diplômantes',
    instructor: 'Elena Rossi',
    instructorImage: 'https://picsum.photos/seed/p4/100/100',
    image: 'https://picsum.photos/seed/beauty/800/600',
    duration: '1 An',
    lessons: 60,
    price: 1400
  },

  // 2. Métiers de l'Artisanat et des Services
  {
    id: 'art-1',
    title: 'Cuisine Professionnelle',
    category: 'Artisanat & Services',
    instructor: 'Chef Ahmed',
    instructorImage: 'https://picsum.photos/seed/p5/100/100',
    image: 'https://picsum.photos/seed/cooking/800/600',
    duration: '6 Mois',
    lessons: 48,
    price: 1200
  },
  {
    id: 'art-2',
    title: 'Pâtisserie Fine',
    category: 'Artisanat & Services',
    instructor: 'Chef Elena',
    instructorImage: 'https://picsum.photos/seed/p6/100/100',
    image: 'https://picsum.photos/seed/pastry/800/600',
    duration: '6 Mois',
    lessons: 48,
    price: 1300
  },
  {
    id: 'art-3',
    title: 'Coiffure (Homme & Femme)',
    category: 'Artisanat & Services',
    instructor: 'Leila Trabelsi',
    instructorImage: 'https://picsum.photos/seed/p7/100/100',
    image: 'https://picsum.photos/seed/hair/800/600',
    duration: '6 Mois',
    lessons: 40,
    price: 1100
  },
  {
    id: 'art-4',
    title: 'Plomberie Sanitaire',
    category: 'Artisanat & Services',
    instructor: 'Karim Gharbi',
    instructorImage: 'https://picsum.photos/seed/p8/100/100',
    image: 'https://picsum.photos/seed/plumbing/800/600',
    duration: '4 Mois',
    lessons: 36,
    price: 900
  },
  {
    id: 'art-5',
    title: 'Électricité de Bâtiment',
    category: 'Artisanat & Services',
    instructor: 'Sami Ben Ali',
    instructorImage: 'https://picsum.photos/seed/p9/100/100',
    image: 'https://picsum.photos/seed/elec/800/600',
    duration: '4 Mois',
    lessons: 36,
    price: 950
  },

  // 3. Pôle Langues Vivantes
  {
    id: 'lang-1',
    title: 'Anglais (Tous Niveaux)',
    category: 'Langues Vivantes',
    instructor: 'James Smith',
    instructorImage: 'https://picsum.photos/seed/p10/100/100',
    image: 'https://picsum.photos/seed/english/800/600',
    duration: '3 Mois',
    lessons: 24,
    price: 450
  },
  {
    id: 'lang-2',
    title: 'Français de Communication',
    category: 'Langues Vivantes',
    instructor: 'Marie Claire',
    instructorImage: 'https://picsum.photos/seed/p11/100/100',
    image: 'https://picsum.photos/seed/french/800/600',
    duration: '3 Mois',
    lessons: 24,
    price: 400
  },
  {
    id: 'lang-3',
    title: 'Italien',
    category: 'Langues Vivantes',
    instructor: 'Giovanni B.',
    instructorImage: 'https://picsum.photos/seed/p12/100/100',
    image: 'https://picsum.photos/seed/italy/800/600',
    duration: '3 Mois',
    lessons: 24,
    price: 450
  },
  {
    id: 'lang-4',
    title: 'Allemand',
    category: 'Langues Vivantes',
    instructor: 'Hans Müller',
    instructorImage: 'https://picsum.photos/seed/p13/100/100',
    image: 'https://picsum.photos/seed/german/800/600',
    duration: '3 Mois',
    lessons: 24,
    price: 500
  },

  // 4. Formations Accélérées
  {
    id: 'acc-1',
    title: 'Pose de Cils à Cils',
    category: 'Formations Accélérées',
    instructor: 'Sonia Dridi',
    instructorImage: 'https://picsum.photos/seed/p14/100/100',
    image: 'https://picsum.photos/seed/lashes/800/600',
    duration: '3 Jours',
    lessons: 3,
    price: 250
  },
  {
    id: 'acc-2',
    title: 'Maquillage de Soirée',
    category: 'Formations Accélérées',
    instructor: 'Sonia Dridi',
    instructorImage: 'https://picsum.photos/seed/p14/100/100',
    image: 'https://picsum.photos/seed/makeup/800/600',
    duration: '3 Jours',
    lessons: 3,
    price: 200
  }
];
