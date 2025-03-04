export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    defaultLocale: 'en',
    globalInjection: true,
    messages: {
        en: {
            welcome: 'Welcome',
            hero:{
                title: 'Title',
                subtitle: 'Subtitle',
                description: 'Description',
                when: 'Date',    
            },
            where: {
                title: 'Where',
                location: 'NAME',
                description: 'description.',
                address: 'Address',
                map: 'View on map' 
            },
            rsvp: {
                title: 'RSVP',
                description: 'description',
                html:''
            }
            
        },
        it: {
            welcome: 'Benvenuti',
            hero:{
                title: 'Titolo',
                subtitle: 'Sottotitolo',
                description: 'Descrizione',
                when: 'Data',    
            },
            where: {
                title: 'Dove',
                location: 'NOME',
                description: 'Descrizione',
                address: 'Indirizzo',
                map: 'Vedi sulla mappa'
            },
            rsvp: {
                title: 'RSVP',
                description: 'Descrizione',
                html: ''
            }

        }
    }
}))