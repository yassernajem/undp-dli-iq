import {visualisations} from './_visualisations.json';
//const images = import.meta.globEager('./_images/*.png');

// const data = visualisations.map(d=>{
//   return {...d, thumb_path:images['./_images/'+ d.thumb] }
// })


export async function get() {
    return {
      body: {
        visualisations
      },
    };
  }