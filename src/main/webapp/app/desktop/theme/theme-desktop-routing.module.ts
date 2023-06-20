import { NgModule } from '@angular/core';

import './config/dayjs';
import { RouterModule } from '@angular/router';
import { errorRoute } from '../layouts/error/error.route';
import { DEBUG_INFO_ENABLED } from '../../app.constants';
import HomeComponent from '../home/home.component';
import NavbarComponent from '../layouts/navbar/navbar.component';
import { Authority } from '../../config/authority.constants';
import { UserRouteAccessService } from '../../core/auth/user-route-access.service';
import LoginComponent from '../login/login.component';
import MainComponent from '../layouts/main/main.component';

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
          path: 'admin',
          data: {
            authorities: [Authority.ADMIN],
          },
          canActivate: [UserRouteAccessService],
          loadChildren: () => import('../admin/admin-routing.module'),
        },
        {
          path: 'account',
          loadChildren: () => import('../account/account.route'),
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
export class ThemeDesktopModule {}
