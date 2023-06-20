import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslationModule } from 'app/shared/language/translation.module';
import MainComponent from '../layouts/main/main.component';
import SharedModule from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import FooterComponent from '../layouts/footer/footer.component';
import PageRibbonComponent from '../layouts/profiles/page-ribbon.component';

@NgModule({
  imports: [SharedModule, RouterModule, FooterComponent, PageRibbonComponent, HttpClientModule, TranslationModule],
  declarations: [MainComponent],
})
export class ThemeDesktopModule {}
