import emotions_fr from './_emotions_fr.json';
import emotions_ar from './_emotions_ar.json';
import valid_emotions_fr from './_valid_emotions_fr.json';
import valid_emotions_ar from './_valid_emotions_ar.json';

export async function get() {
  return {
    body: {
      emotions:{
        ar: {evolution:emotions_ar.rows, valid:valid_emotions_ar.rows},
        fr: {evolution:emotions_fr.rows, valid:valid_emotions_fr.rows},
      },
    },
  };
}