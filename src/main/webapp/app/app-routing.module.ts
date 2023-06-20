import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute } from './desktop/layouts/error/error.route';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { PlatformConfig } from './config/platform.config';
import { switchMap } from 'rxjs';
import { PlatformType } from './shared/enums/platform-type';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            PlatformConfig.computePlatform().pipe(
              switchMap(userPlatform =>
                userPlatform === PlatformType.DESKTOP
                  ? import('./desktop/theme/theme-desktop.module').then(m => m.ThemeDesktopModule)
                  : import('./desktop/theme/theme-desktop.module').then(m => m.ThemeDesktopModule)
              )
            ),
          data: {
            preload: true,
          },
        },
        /*  {
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
          loadChildren: () => import('./admin/admin-routing.module'),
        },
        {
          path: 'account',
          loadChildren: () => import('./account/account.route'),
        },
        {
          path: 'login',
          component: LoginComponent,
          title: 'login.title',
        },
        {
          path: '',
          loadChildren: () => import(`./entities/entity-routing.module`).then(({ EntityRoutingModule }) => EntityRoutingModule),
        }, */
        ...errorRoute,
      ],
      { enableTracing: DEBUG_INFO_ENABLED, bindToComponentInputs: true }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
