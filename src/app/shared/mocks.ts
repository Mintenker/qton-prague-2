import {SolutionModel} from './solution.model';

export const MOCK_SOLUTIONS: SolutionModel[] = [
    {
        id: 1,
        year: 2017,
        status: 'dokonceno',
        category: 'categorie',
        vendor: 'Flowup',
        title: 'Best project',
        description: 'Best project eveeeeeer',
        longDescription: 'Best project eveeeeeeer - even longer',
        comments: [],
        historicalResults: [],
        budget: 200000,
        location: 'Prague',
        image: 'assets/images/smart-city-mock.jpg'
    },
    {
        id: 2,
        year: 2017,
        status: 'dokonceno',
        category: 'categorie',
        vendor: 'Smart Prague',
        title: 'Smart lavicky',
        description: 'Smart lavicky su celkovo nic moc :D',
        longDescription: 'Smart lavicky su celkovo nic moc :D',
        comments: [],
        historicalResults: [],
        budget: 500000,
        location: 'Prague',
        image: 'assets/images/smart-city-mock.jpg'
    },
    {
        id: 3,
        year: 2017,
        status: 'dokonceno',
        category: 'categorie',
        vendor: 'Dumb Prague',
        title: 'Dumb lavicky',
        description: 'Dumb lavicky su celkovo dost dobre :D',
        longDescription: 'Dumb lavicky su celkovo dost dobre :D',
        comments: [],
        historicalResults: [],
        budget: 500,
        location: 'Prague',
        image: 'assets/images/smart-city-mock.jpg'
    },
];
