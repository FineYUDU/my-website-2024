// @angular
import { ApplicationRef, Injectable, inject } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class UpdateCheckService {
    // @injections
    private  appRef= inject( ApplicationRef );
    private updateService = inject( SwUpdate );
    // constructor() { }

    checkForUpdate(){
        const appIsStable$ = this.appRef.isStable.pipe( first(isStable => isStable === true) );
        const everySixHour$ = interval(2 * 60 * 1000);
        const everySixHourOnceAppIsStable$ = concat( appIsStable$, everySixHour$ );
        everySixHourOnceAppIsStable$.subscribe(async () => {
            try {
                const updateFound = await this.updateService.checkForUpdate();
                console.log(updateFound ? 'A new version is available' : 'Already on the last version.');
            } catch(err) {
                console.log('Failed to check updates:', err);
            }
        });
    }
    
}