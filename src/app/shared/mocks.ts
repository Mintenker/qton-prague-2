import {SolutionModel} from './solution.model';
import {ProjectModel} from './project.model';

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
        description: 'Wifi připojení, dobijení elektromobilů, automaticka intensita světla',
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

export type StatusType = 'done' | 'in_progress' | 'canceled';

export const MOCK_PROJECTS: ProjectModel[] = [
    {
        id: 1,
        name: 'Revitalizace parku v Lužánkách',
        status: 'done',
        location: 'Brno',
        budget: 5000000,
        budgetCurrency: 'CZK',
        description: 'Oživení městkého parku v Brně formou chytrych lavicek',
        longDescription: '\n' +
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam sed tellus id magna elementum tincidunt. ' +
        'Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. ' +
        'Sed ac dolor sit amet purus malesuada congue. Nullam faucibus mi quis velit. Duis sapien nunc, commodo et,' +
        ' interdum suscipit, sollicitudin et, dolor. Suspendisse nisl. Etiam neque. Donec iaculis gravida nulla.' +
        ' Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Cras elementum. Sed vel lectus. ' +
        'Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Etiam neque. Vestibulum fermentum tortor ' +
        'id mi. In dapibus augue non sapien.\n',
        documents: [
            {
                name: 'finalni_zprava.pdf',
                link: 'blink',
            }],
        solutions: [
            {
                fkSolution: 2,
                comments: [
                    {
                        author: 'Starosta Mesta',
                    }
                ],
            }],
        issues: [{
            fkIssue: 1,
        }],
        category: 'Zivotni prostredi'
    },

    {
        id: 2,
        name: 'Rekonstrukce naměstí',
        status: 'in_progress',
        location: 'Dolní horní',
        budget: 15000000,
        budgetCurrency: 'CZK',
        description: 'Rekonstrukce namesti a relizace noveho parkoviste s chytrym parkovacim systemem',
        longDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam sed tellus id magna elementum tincidunt. ' +
        'Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. ' +
        'Sed ac dolor sit amet purus malesuada congue. Nullam faucibus mi quis velit. Duis sapien nunc, commodo et,' +
        ' interdum suscipit, sollicitudin et, dolor. Suspendisse nisl. Etiam neque. Donec iaculis gravida nulla.' +
        ' Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Cras elementum. Sed vel lectus. ' +
        'Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Etiam neque. Vestibulum fermentum tortor ' +
        'id mi. In dapibus augue non sapien.\n',
        category: 'Infrastruktura'
    },

    {
        id: 3,
        name: 'Chytre osvetleni ulice Zamecka',
        status: 'in_progress',
        location: 'Ostrava',
        budget: 15000000,
        budgetCurrency: 'CZK',
        description: 'Pilotni projekt na ulici Zamecka',
        longDescription:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam sed tellus id magna elementum tincidunt. ' +
        'Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. ' +
        'Sed ac dolor sit amet purus malesuada congue. Nullam faucibus mi quis velit. Duis sapien nunc, commodo et,' +
        ' interdum suscipit, sollicitudin et, dolor. Suspendisse nisl. Etiam neque. Donec iaculis gravida nulla.' +
        ' Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Cras elementum. Sed vel lectus. ' +
        'Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Etiam neque. Vestibulum fermentum tortor ' +
        'id mi. In dapibus augue non sapien.\n',
        category: '',
    },

    {
        id: 4,
        name: 'Vystavba nové městké části',
        status: 'canceled',
        location: 'Praha',
        budget: 15000000,
        budgetCurrency: 'CZK',
        description: 'Nutnost reseni noveho dopravniho uzlu',
        longDescription: '\n' +
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam sed tellus id magna elementum tincidunt. ' +
        'Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. ' +
        'Sed ac dolor sit amet purus malesuada congue. Nullam faucibus mi quis velit. Duis sapien nunc, commodo et,' +
        ' interdum suscipit, sollicitudin et, dolor. Suspendisse nisl. Etiam neque. Donec iaculis gravida nulla.' +
        ' Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Cras elementum. Sed vel lectus. ' +
        'Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Etiam neque. Vestibulum fermentum tortor ' +
        'id mi. In dapibus augue non sapien.\n',
        category: '',
    },
];


