import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user.model';

export class FakeBackendService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        password: "1234", // Only for mock
        id: 2,
        username: "borcha",
        name: "Bruno",
        surname: "Orcha García",
        birthdate: "01/12/1982",
        phone: "666777888",
        phone2: "666888999",

        email: "borcha@uoc.edu",
        documentNumber: "11777111F",
        documentType: { id: 1, name: 'NIF/NIE' },
        aboutMe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, quod alias mollitia optio fuga nesciunt! Explicabo qui sed sequi! Temporibus similique laudantium delectus recusandae mollitia molestiae ullam, laboriosam ducimus facere!",
        otherCompetences: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat at cumque consectetur nulla eius ratione sit quis accusamus provident unde reprehenderit, vero autem fugit totam repudiandae ipsum soluta assumenda voluptatum?",
        license: "B1",
        avatar_hash: 'https://api.adorable.io/avatars/156/borcha@uoc.edu.png',
        address: {
          street: 'Calle Falsa, 1',
          province: { id: 4, name: 'Cádiz' },
          municipe: { id: 1, name: 'Sanlúcar de Barrameda' }
        },
        roles: ['student'],
        studies: [
          {
            id: 1,
            level: { id: 1, name: 'Ciclo Formativo' },
            category: { id: 2, name: 'Informática y comunicaciones' },
            institution: {
              id: 2,
              name: 'IES Politécnico Jesús Marin'
            },
            title: {
              id: 2,
              name: 'Administracion de sistemas informaticos y redes'
            },
            grade: {
              id: 3,
              name: 'Ciclo Formativo de Grado Superior'
            },
            date: '30/06/2005',
            dual: false,
            bilingue: true,
            certificate: true
          },
          {
            id: 2,
            institution: {
              id: 2,
              name: 'IES Politécnico Jesús Marin'
            },
            category: { id: 2, name: 'Informática y comunicaciones' },
            level: { id: 1, name: 'Ciclo Formativo' },
            title: {
              id: 1,
              name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
            },
            grade: { id: 3, name: 'Ciclo Formativo de Grado Superior' },
            date: '30/06/2007',
            dual: true,
            bilingue: false,
            certificate: false
          }
        ],
        experiencies: [],
        languages: [],
        offers: []
      },
      {
        id: 1,
        username: 'carloscg',
        name: 'Carlos',
        surname: 'Caballero',
        birthdate: '19/11/1984',
        phone: '644039911',
        phone2: '690940321',
        email: 'carlos.caballero@gmail.com',
        password: '1234',
        roles: ['student'],
        documentType: { id: 1, name: 'NIF/NIE' },
        documentNumber: '26808956H',
        license: 'B1',
        aboutMe: 'LOREM IPSUM',
        otherCompetences: 'LOREM IPSUM',
        address: {
          street: 'Urbanización las Areanas - 45',
          province: { id: 4, name: 'Cádiz' },
          municipe: { id: 6, name: 'Chiclana de la Frontera' }
        },
        avatar_hash: 'assets/img/perfil.png',
        studies: [
          {
            id: 1,
            level: { id: 1, name: 'Ciclo Formativo' },
            category: { id: 2, name: 'Informática y comunicaciones' },
            institution: {
              id: 2,
              name: 'IES Politécnico Jesús Marin'
            },
            title: {
              id: 2,
              name: 'Administracion de sistemas informaticos y redes'
            },
            grade: {
              id: 3,
              name: 'Ciclo Formativo de Grado Superior'
            },
            date: '30/06/2005',
            dual: false,
            bilingue: true,
            certificate: true
          },
          {
            id: 2,
            institution: {
              id: 2,
              name: 'IES Politécnico Jesús Marin'
            },
            category: { id: 2, name: 'Informática y comunicaciones' },
            level: { id: 1, name: 'Ciclo Formativo' },
            title: {
              id: 1,
              name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
            },
            grade: { id: 3, name: 'Ciclo Formativo de Grado Superior' },
            date: '30/06/2007',
            dual: true,
            bilingue: false,
            certificate: false
          }
        ],
        experiencies: [],
        languages: [
          {
            id: 1,
            level: { id: 5, name: 'C1' },
            name: { id: 1, name: 'Inglés' },
            date: '30/06/2005'
          },
          {
            id: 2,
            level: { id: 4, name: 'B2' },
            name: { id: 2, name: 'Francés' },
            date: '30/06/1998'
          }
        ],
        offers: []
        /*         experiences: [
          {
            id: 0,
            eid: 0,
            empresa: 'Suma',
            date_incio: '1548320228',
            date_fin: '1548320228',
            puesto: 'Junior',
            tareas: 'Desarrollador front-end'
          },
          {
            id: 0,
            eid: 1,
            empresa: 'Indra',
            date_incio: '1548320228',
            date_fin: '1548320228',
            puesto: 'Ingeniero',
            tareas: 'Desarrollador back-end'
          }
        ],
        languages: [
          { id: 0, lid: 0, idioma: 'Inglés', nivel: 'B2', date: '30/06/2008' },
          {
            id: 0,
            lid: 1,
            idioma: 'Portugués',
            nivel: 'A2',
            date: '30/06/2013'
          }
        ]
     */
      }
    ];

    const offers: any[] = [
      {
        id: 1,
        company: {
          id: 33,
          name: 'Coritel'
        },
        job: {
          name: 'Programador Jr Java',
          description: 'Programación y prueba unitaria en Java'
        },
        province: { id: 1, name: 'Málaga' },
        municipe: { id: 7, name: 'Estepona' },
        date: '21/09/2006',
        category: { id: 2, name: 'Informática y Comunicaciones' },
        title: [
          { id: 1, name: 'Desarrollo Aplicaciones Web' },
          { id: 4, name: 'Desarrollo Aplicaciones Multiplataforma' }
        ]
      },
      {
        id: 2,
        company: {
          id: 33,
          name: 'Coritel'
        },
        job: {
          name: 'Comercial',
          description:
            'Relaciones con los clientes y atención a las redes sociales.'
        },
        province: { id: 1, name: 'Málaga' },
        municipe: { id: 8, name: 'Campanillas (PTA)' },
        date: '21/09/2016',
        category: { id: 4, name: 'Comercio y Marketing' },
        title: [{ id: 5, name: 'Gestión Comercial y Empresarial' }]
      },
      {
        id: 3,
        company: {
          id: 33,
          name: 'Coritel'
        },
        job: {
          name: 'Analista Programador Java',
          description:
            'Análisis funcional y diseño técnico/detallado de componentes'
        },
        province: { id: 5, name: 'Granada' },
        municipe: { id: 9, name: 'Motril' },
        date: '11/07/2016',
        category: { id: 2, name: 'Informática y Comunicaciones' },
        title: [{ id: 4, name: 'Desarrollo Aplicaciones Multiplataforma' }]
      },
      {
        id: 4,
        company: {
          id: 35,
          name: 'Indra'
        },
        job: {
          name: 'Administrativo',
          description: 'Gestión de cartera de clientes.'
        },
        province: { id: 2, name: 'Sevilla' },
        municipe: { id: 10, name: 'Osuna' },
        date: '01/12/2015',
        category: { id: 5, name: 'Administración y Gestión' },
        title: [{ id: 6, name: 'Empresariales' }]
      }
    ];

    const documentTypes: any[] = [
      { id: 0, name: 'Otro' },
      { id: 1, name: 'NIF/NIE' },
      { id: 2, name: 'Pasaporte' }
    ];
    const provinces: any[] = [
      { id: 1, name: 'Málaga' },
      { id: 2, name: 'Sevilla' },
      { id: 4, name: 'Cádiz' },
      { id: 5, name: 'Granada' }
    ];
    const municipes: any[] = [
      { id: 1, name: 'Sanlúcar de Barrameda' },
      { id: 6, name: 'Chiclana de la Frontera' },
      { id: 7, name: 'Estepona' },
      { id: 9, name: 'Motril' },
      { id: 10, name: 'Osuna' }
    ];

    const institutions: any[] = [
      { id: 1, name: 'IES 1' },
      { id: 2, name: 'IES Politécnico Jesús Marin' },
      { id: 3, name: 'IES 3' },
    ];

    const categories: any[] = [
      { id: 1, name: 'Categoria1' },
      { id: 2, name: 'Informática y comunicaciones' },
      { id: 3, name: 'Categoria3' },
    ];

    const grades: any[] = [
      { id: 1, name: 'Grado1' },
      { id: 2, name: 'Grado2' },
      { id: 3, name: 'Ciclo Formativo de Grado Superior' },
    ];

    const titleStudies: any[] = [
      { id: 1, name: 'Estudio1' },
      { id: 2, name: 'Administracion de sistemas informaticos y redes' },
      { id: 3, name: 'Estudio3' },
    ];

    ];

    return {
      users,
      offers,
      documentTypes,
      provinces,
      municipes,
      institutions,
      categories,
      grades,
      titleStudies,
    };
  }
}