import { Routes } from '@angular/router';
import { EntitiesComponent } from './entities/entities.component';

const routeConfig: Routes = [
  {
    path: '',
    component: EntitiesComponent,
    title: 'Home page',
  },
];

export default routeConfig;
