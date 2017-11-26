import {SolutionModel} from './solution.model';

export const MOCK_SOLUTIONS: SolutionModel[] = [
    {
        id: 1,
        year: 2017,
        status: 'pilotni testovani',
        category: 'lidé',
        vendor: 'Operator ICT, a.s.',
        title: 'Chytré odpadkové koše',
        description: 'Chytre',
        longDescription: 'Speciálně vybavené lavičky umožní Pražanům a návštěvníkům hlavního města kromě běžné relaxace ' +
        'a odpočinku dobít si telefon či tablet, připojit se k internetu, zjistit aktuální teplotu a vlhkost vzduchu nebo' +
        ' množství oxidu uhličitého v ovzduší. A to vše přímo ve veřejném prostoru města bez napojení na zdroj elektrické ' +
        'energie – lavičky se napájí pomocí solárních panelů.',
        comments: [],
        historicalResults: [],
        budget: 200000,
        location: 'Praha',
        image: 'assets/images/kos.jpg'
    },
    {
        id: 2,
        year: 2017,
        status: 'dokonceno',
        category: 'lidé',
        vendor: 'Operator ICT, a.s.',
        title: 'Chytrá lavička',
        description: 'Lavička disponuje wifi pripojenim, nabíjením telefonů a senzory pro měření',
        longDescription: '',
        comments: [],
        historicalResults: [],
        budget: 280000,
        location: 'Praha',
        image: 'assets/images/lavicka.jpg',
        referenceVendor: '',
        referenceCity: '',
    },
    {
        id: 3,
        year: 2017,
        status: 'dokonceno',
        category: 'categorie',
        vendor: 'Dumb Prague',
        title: 'Chytré městcké osvětlení',
        description: 'Dumb lavicky su celkovo dost dobre :D',
        longDescription: 'Dumb lavicky su celkovo dost dobre :D',
        comments: [],
        historicalResults: [],
        budget: 500,
        location: 'Prague',
        image: 'assets/images/lampa.jpg'
    },
    {
        id: 4,
        year: 2017,
        status: 'dokonceno',
        category: 'categorie',
        vendor: 'Dumb Prague',
        title: 'Chytré parkování',
        description: 'Dumb lavicky su celkovo dost dobre :D',
        longDescription: 'Dumb lavicky su celkovo dost dobre :D',
        comments: [],
        historicalResults: [],
        budget: 500,
        location: 'Prague',
        image: 'assets/images/parkovani.png'
    },

    {
        id: 5,
        year: 2017,
        status: 'dokonceno',
        category: 'categorie',
        vendor: 'Dumb Prague',
        title: 'Chytré řízení dopravního provozu',
        description: 'Dumb lavicky su celkovo dost dobre :D',
        longDescription: 'Dumb lavicky su celkovo dost dobre :D',
        comments: [],
        historicalResults: [],
        budget: 500,
        location: 'Prague',
        image: 'assets/images/doprava.jpg'
    },
];
