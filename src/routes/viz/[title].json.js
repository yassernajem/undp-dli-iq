const visualisations = import.meta.globEager('./_visualisations/*.json');

export async function get({params}) {
    const data = visualisations['./_visualisations/' + params.title + '.json'].default
    // if(data.type === 'static'){
    //   data.sections = data.sections.map(d=>{
    //     return {...d, img_path:images['./_images/'+ d.img] }
    //   })
    // }
    return {
      body: {
        data
      },
    };
  }