import { BehaviorSubject } from 'rxjs';

export const store = new BehaviorSubject({
    firstName: 'kamlesh pawar',  
    lastName: 'kamleshpawar2006@gmail.com',
    addresses: [{city: "Pune"}]
  });

export const store$ = store.asObservable();