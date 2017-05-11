import {Pipe, PipeTransform} from '@angular/core';
import {Album } from './album.model';

@Pipe({
  name:"genre",
  pure: false
})


export class GenrePipe implements PipeTransform {
  transform(input: Album[], selectGenre){
    var output: Album[] = [];
      if(selectGenre === "allGenres") {
        return input;
      } else  {
        for(var i = 0; i < input.length; i++){
          if(input[i].genre.toLowerCase() === selectGenre.toLowerCase()) {
            output.push(input[i]);
          }
        }
        return output;
      }
  }

}
