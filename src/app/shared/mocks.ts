import {SolutionModel} from './solution.model';

export const MOCK_SOLUTIONS: SolutionModel[] = [
    {
        id: 1,
        year: 2017,
        status: 'pilotní testovani',
        category: 'lidé',
        vendor: 'Operator ICT, a.s.',
        title: 'Chytré odpadkové koše',
        description: 'Koše umožnují notifikace o stavu naplnění, přístup k wifi',
        longDescription: 'Koše umožnují notifikace o stavu naplnění, přístup k wifi',
        comments: [],
        historicalResults: [],
        budget: 200000,
        location: 'Praha',
        image: 'assets/images/kos.jpg'
    },
    {
        id: 2,
        year: 2017,
        status: 'dokončeno',
        category: 'lidé',
        vendor: 'Operator ICT, a.s.',
        title: 'Chytrá lavička',
        description: 'Lavička disponuje wifi pripojenim, nabíjením telefonů a senzory pro měření',
        longDescription: 'Speciálně vybavené lavičky umožnují návštěvníkům a obyvatelům města kromě běžné relaxace ' +
        'a odpočinku dobít si telefon či tablet, připojit se k internetu, zjistit aktuální teplotu a vlhkost vzduchu nebo' +
        ' množství oxidu uhličitého v ovzduší. A to vše přímo ve veřejném prostoru města bez napojení na zdroj elektrické ' +
        'energie – lavičky se napájí pomocí solárních panelů.',
        comments: [],
        historicalResults: [],
        budget: 70000,
        location: 'Brno',
        image: 'assets/images/lavicka.jpg',
        referenceVendor: '',
        referenceCity: '',
    },
    {
        id: 3,
        year: 2017,
        status: 'probíhá realizace',
        category: 'categorie',
        vendor: 'Dumb Prague',
        title: 'Chytré městské osvětlení',
        description: 'Wifi připojení, dobijění elektromobilů, automaticka intensita světla',
        longDescription: 'Dumb lavicky su celkovo dost dobre :D',
        comments: [],
        historicalResults: [],
        budget: 1000000,
        location: 'Ostrava',
        image: 'assets/images/lampa.jpg'
    },
    {
        id: 4,
        year: 2017,
        status: 'dokončeno',
        category: 'categorie',
        vendor: 'Dumb Prague',
        title: 'Chytré parkování',
        description: 'Statistiky o obsazenosti parkoviště',
        longDescription: 'Dumb lavicky su celkovo dost dobre :D',
        comments: [],
        historicalResults: [],
        budget: 2500000,
        location: 'Dolní horní',
        image: 'assets/images/parkovani.png'
    },

    {
        id: 5,
        year: 2017,
        status: 'v přípravě',
        category: 'categorie',
        vendor: 'Dumb Prague',
        title: 'Chytré řízení dopravního provozu',
        description: 'Plynulejší městcká doprava',
        longDescription: 'Dumb lavicky su celkovo dost dobre :D',
        comments: [],
        historicalResults: [],
        budget: 500000,
        location: 'Střední město',
        image: 'assets/images/doprava.jpg'
    },
];
