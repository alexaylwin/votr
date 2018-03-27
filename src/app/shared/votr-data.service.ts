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
            map((resp) => resp[0].questions[0].answers.length)
        );
    }

    getCurrentQuestion():Observable<string> {
         //Query for the 'active' question
         const query:string = '&q={"status":"active"}';

         return this.httpClient.get(this.db_string + this.key + query).pipe(
             map((resp) => resp[0].questions[0].question)
         );       
    }

    /**
     * This creates a new game in the database
     * @param players number of players
     * @param playerName the player name
     * @returns the uid of this player
     */
    createGame(players:number, playerName:string): string {
        return 'a1b2c3';
    }

    sendAnswer():boolean {
        return true;
    }

    /**
     * Mark the current question as inactive and
     * insert a new question into the current game document
     */
    sendQuestion():boolean {
        
        return true;
    }
    
}