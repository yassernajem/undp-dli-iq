import fs from "fs"
import {rows} from './_circlepack.json';

// export async function get() {

//   const csv = fs.readFileSync('./src/routes/viz/_data/circlepack.tsv', 'utf-8')
//     return {
//       body:csv,
//       headers: {
//         'Content-Type': 'text/plain'
//       }
//     };
//   }

export async function get() {
  return {
    body: {
      rows
    },
  };
}