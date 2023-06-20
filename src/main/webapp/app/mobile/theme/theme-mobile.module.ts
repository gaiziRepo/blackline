import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TranslationModule } from 'app/shared/language/translation.module';
import SharedModule from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import FooterComponent from '../../desktop/layouts/footer/footer.component';
import PageRibbonComponent from '../../desktop/layouts/profiles/page-ribbon.component';

@NgModule({
  imports: [SharedModule, RouterModule, FooterComponent, PageRibbonComponent, HttpClientModule, TranslationModule],
  //declarations: [MainComponent],
})
export class ThemeMobileModule {}
