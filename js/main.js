const { createApp } = Vue;


const app = createApp({
    data() {
        return {
            title: 'Titolo del testo.',
            text: 'Inserire del testo. es, Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rem autem illo, alias laborum incidunt iste illum ullam sit fugit nulla eaque amet quod ipsa officiis dolores aperiam adipisci minus?',
            image: {
                imgVue: './img/immagine.jpg'
            }
        };
    }
}).mount('#root');