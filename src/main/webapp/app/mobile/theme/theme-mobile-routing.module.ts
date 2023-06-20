import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DEBUG_INFO_ENABLED } from '../../app.constants';
import { errorRoute } from '../../desktop/layouts/error/error.route';
import LoginComponent from '../../desktop/login/login.component';
import NavbarComponent from '../../desktop/layouts/navbar/navbar.component';
import HomeComponent from '../../desktop/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
          title: 'home.title',
        },
        {
          path: '',
          component: NavbarComponent,
          outlet: 'navbar',
        },
        {
          path: 'login',
          component: LoginComponent,
          title: 'login.title',
        },
        {
          path: '',
          loadChildren: () => import(`../../entities/entity-routing.module`).then(({ EntityRoutingModule }) => EntityRoutingModule),
        },
        ...errorRoute,
      ],
      { enableTracing: DEBUG_INFO_ENABLED, bindToComponentInputs: true }
    ),
  ],
  exports: [RouterModule],
})
export class ThemeMobileModule {}
