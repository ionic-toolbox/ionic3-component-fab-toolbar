import { NgModule, ErrorHandler }		from '@angular/core';
import { BrowserModule }				from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar }					from '@ionic-native/status-bar';
import { SplashScreen }					from '@ionic-native/splash-screen';


import { MainApp }						from './app.component';

import { IonicFabsPage }				from '../pages/ionic-fabs/ionic-fabs';
import { ContactPage }					from '../pages/contact/contact';
import { HomePage }						from '../pages/home/home';
import { TabsPage }						from '../pages/tabs/tabs';

import { FabToolbar }					from '../components/fab-toolbar/fab-toolbar';

@NgModule({
	declarations: [
		MainApp,
		IonicFabsPage, ContactPage, HomePage, TabsPage,
		FabToolbar
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MainApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MainApp,
		IonicFabsPage, ContactPage, HomePage, TabsPage,

		FabToolbar
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
