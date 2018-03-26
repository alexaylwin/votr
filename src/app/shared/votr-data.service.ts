import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VotrDataService {
    private db_string = 'https://api.mlab.com/api/1/databases/votr/collections/votr?apiKey=';
    private key = 'Pz5a6rpsW4qvNi64riicPV2nenQTae4r';

    constructor(private httpClient: HttpClient) { }

    getVoteCount():Observable<number> {
        //Query for the 'active' question
        const query:string = '&q={"status":"active"}';
        return this.httpClient.get(this.db_string + this.key + query).pipe(
            map((resp) => resp[0].answers.length)
        );
    }

    sendAnswer():boolean {
        return true;
    }
    
}