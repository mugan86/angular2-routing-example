import { Pipe , PipeTransform } from '@angular/core';

@Pipe({
    name: 'firstFourCharsOnly'
})

export class FirstFourCharsOnlyPipe implements PipeTransform
{
     transform(text: string): string{

        if (text.length < 4) return text;
        return text.substring(0,4);
    }
}