import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidations {

  static equalTo(otherField : string) : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
      const fieldValue = control.value;
      const otherFieldValue = control.root.get(otherField)?.value

      if (fieldValue !== otherFieldValue){
        return { equalTo : true}
      }

      return null;

    }
  }


}


/TODO: fazer
  validarDataMinima(control:AbstractControl) : ValidationErrors  {
      let lowerValue : Date = new Date();
      lowerValue.setDate(1);
      lowerValue.setMonth(0);
      lowerValue.setFullYear(1900);
      lowerValue.setHours(0);
      lowerValue.setMinutes(0);
      lowerValue.setSeconds(0);
      lowerValue.setMilliseconds(0);

      let vigenciaInicialDoPaValue: Date = control.value as Date;

      if(vigenciaInicialDoPaValue == null){
        return null;
      }
vigenciaInicialDoPaValue = new Date(vigenciaInicialDoPaValue);

      if(lowerValue.getTime() > vigenciaInicialDoPaValue.getTime()){
        return {
          'dataMinimaValida': {value: control.value}
        };
      }

      return null;
    }

  //TODO: fazer
  vigenciaFinalCodigoReceitaNaoPodeSerMenorQueInicial(control:AbstractControl) : ValidationErrors  {

      let vigenciaFinalDoCrValue: Date = control.value as Date;

      if(vigenciaFinalDoCrValue == null){
        return null;
      }
      console.log("Foo");

      if (this.vigenciaInicialReceitaCtl != null){
        let vigenciaInicialDoCrValue: Date = this.vigenciaInicialReceitaCtl?.value as Date;

        if(vigenciaInicialDoCrValue > vigenciaFinalDoCrValue){
          return  {'vigenciaFinalCodigoReceitaNaoPodeSerMenorQueInicial': {value: control.value}};
        }

      }

      return null;
    }

  vigenciaInicialCodigoReceitaNaoPodeSerMaiorQueFinal1(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

      let vigenciaInicialDoCrValue: Date = control.value as Date;
      if(vigenciaInicialDoCrValue == null){
        return null;
      }


      let vigenciaFinalDoCrValue: Date = this.vigenciaFinalReceitaCtl.value as Date;


      if(vigenciaInicialDoCrValue > vigenciaFinalDoCrValue){
        return {
          invalid: true
        };
      }

      return null;
    }
  }

  //TODO: fazer
  vigenciaFinalPAnaoPodeSerMenorQueInicial(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      return null;
    }
  }

  //TODO: fazer
  vigenciaFinalPAnaoPodeSerMenorQueInicialDaRV(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      return null;
    }
  }

  //TODO: fazer
  anoFinalnaoPodeSerMenorQueOInicial(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      return null;
    }
  }



  somenteNumerosPositivos(control: AbstractControl): ValidationErrors {
    if (control.value === '' || control.pristine){
      return null
    }
    if (control.value?.match(/\D+/)){
      return {'somenteNumerosPositivos': {value: control.value}}
    }
    const isNotANumber = isNaN(parseInt(control.value));

    if (isNotANumber) {
      return  {'somenteNumerosPositivos': {value: control.value}}
    }

    return null;

  }

  somenteNumerosPositivosENegativos(control : AbstractControl) : ValidationErrors {

    if (control.value === '' || control.pristine){
      return null
    }

    const pattern = /(^\d$|^\d\d$|^\-\d\d$|^\-\d$)/;
    if (!pattern.test(control.value)) {
      return {'somenteNumerosPositivosENegativos': {value: control.value}}
    }
    return null;
  }


  numeroMinimoDeCaracteres(control: AbstractControl): ValidationErrors  {
      const valorCampo = control.value;
      if (valorCampo?.length > 0 && valorCampo?.length < 4){
        return {'quantidadeMininaDeCaracteres': {value: control.value}}
      }
      return null;
  }

    //Em desenvolvimento
    dataMinima(control: AbstractControl): ValidationErrors  {
      const dataMinima : Date = new Date('01/01/1900');
      const valorCampo = control.value as Date;

      if ( dataMinima > valorCampo ){
        return {'dataMinimaError': {value: control.value}}
      }
      return null;
    }



  getFormValidationErrors() {
    Object.keys(this.formGroup.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.formGroup.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
         console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }

  getFormValidationsErros2(name: string){
    console.log(this.formGroup.get(name)?.errors);
  }

















