import {FormControl} from '@angular/forms'

export class ZipFormControl extends FormControl {
    setValue(value:string | null, options:any){
        console.log(value);
        if(!value){
            super.setValue('', {...options, emitModelToViewChange: true});
            return
        }

        if(value.match("\d{2}-\d{3}")){
            super.setValue(this.value, {...options, emitModelToViewChange: true});
            return
        }

        if(value.length > 6){
            super.setValue(this.value, {...options, emitModelToViewChange: true});
            return
        }

        if(value.length === 2 && this.value.length === 3){
            super.setValue(value, {...options, emitModelToViewChange: true});
            return;
        }

        if(value.length === 2){
            super.setValue(value + '-', {...options, emitModelToViewChange: true});
            return
        }


        super.setValue(value, {...options, emitModelToViewChange: true});
    }
}
