// * Angular
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../../core/services/translate.service';
/*
note: 
    instal npm install typings -g --save-dev
    npm install @types/node --save-dev
    in tsconfig.app.json add the next line in "compilerOptions"
    "compilerOptions":{
        "types": [ "node" ],
    }
  },
*/

@Pipe({
    name: 'translate',
    standalone:true
})

export class TranslatePipe implements PipeTransform {


  constructor( private ts : TranslateService ) {}

    
  transform(translateKey: string, lang: string): string {

    // * Get the language
    const currentLang = lang || localStorage.getItem('lang') || 'es';

    // * Load JSON 
    const translations = require(`../../../assets/lang/${currentLang}.json`);

    // Split the translation key into parts to navigate through the JSON object
    const keys = translateKey.split('.');

    // Iterate through the keys to get the final translation
    let translation = translations;
    for (const key of keys) {
        if (translation.hasOwnProperty(key)) {
            translation = translation[key];
        } else {
            // If the key doesn't exist, return the original key
            translation = translateKey;
            break;
        }
    }

    return translation;
  }
  
}