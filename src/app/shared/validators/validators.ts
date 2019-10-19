import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { validate } from 'src/app/shared/validators/validateSpanishId.js'



export function validDate(c: FormControl) {
  const DDMMYYYY_REGEXP = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$|^$/;

  return DDMMYYYY_REGEXP.test(c.value) && validTextDate(c.value) ? null : {
    validDate: {
      valid: false
    }
  };

  function validTextDate(t: string) {
    const chunks = t.split('/');
    return !Date.parse(`chunks[2]-chunks[1]-chunks[0]`);
  }
}

export let validPhoneNumber = Validators.pattern(/^\+?[0-9 ]+$|^$/);

export function validateDocumentNumber(group: FormGroup) {
  const documentType = group.get('documentType');
  const documentNumber = group.get('documentNumber');  

  if (documentType.value && documentType.value.name == 'NIF/NIE' && documentNumber.value.length > 0 && !validate(documentNumber.value).valid) {
    return { nif : { valid: false }};
  }

  return null;
}
