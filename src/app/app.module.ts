import { NgModule, ErrorHandler }		from '@angular/core';
import { BrowserModule }				from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar }					from '@ionic-native/status-bar';
import { SplashScreen }					from '@ionic-native/splash-screen';


import { MainApp }						from './app.component';

import { AboutPage }					from '../pages/about/about';
import { ContactPage }					from '../pages/contact/contact';
import { HomePage }						from '../pages/home/home';
import { TabsPage }						from '../pages/tabs/tabs';

import { FabToolbar }					from '../components/fab-toolbar/fab-toolbar';

@NgModule({
	declarations: [
		MainApp,
		AboutPage, ContactPage, HomePage, TabsPage,
		FabToolbar
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MainApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MainApp,
		AboutPage, ContactPage, HomePage, TabsPage,

		FabToolbar
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
